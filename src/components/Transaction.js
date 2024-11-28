import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { transaction } from "../api/auth";

const Transaction = () => {
  const transType = ["all", "deposit", "withdraw", "transfer"];


  const { data, isFetching, isSuccess, error } = useQuery({
    queryKey: ["transaction"],
    queryFn: () => transaction(),
  });


  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [fromDate, setFromDate] = useState(""); 
  const [toDate, setToDate] = useState(""); 

 
  const filteredTransactions = data
  ?.filter((transaction) => {

    const transactionType = transaction.type || ""; 
    const transactionAmount = transaction.amount !== null && transaction.amount !== undefined
      ? transaction.amount.toString()
      : ""; 

    if (filter !== "all" && transactionType !== filter) return false;

 
    if (
      searchTerm &&
      !transactionType.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !transactionAmount.includes(searchTerm)
    )
      return false;

  
    const transactionDate = new Date(transaction.updatedAt);
    if (fromDate && transactionDate < new Date(fromDate)) return false;
    if (toDate && transactionDate > new Date(toDate)) return false;

    return true;
  });

  return (
    <div className="App">
     
      <div className="w-50 mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search by type or amount"
          className="border border-black mx-3 px-3 w-75"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="btn butt" onClick={() => {}}>
          Search
        </button>
      </div>

 
      <div className="trans-container px-5 py-2">
        <div className="d-flex justify-content-center mb-3">
          <label className="text-color">Filter: </label>
          {transType.map((option) => (
            <div className="form-check form-check-inline ms-5" key={option}>
              <input
                className="form-check-input"
                type="radio"
                name="transactionFilter"
                value={option}
                id={option}
                checked={filter === option}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label className="form-check-label" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </div>

   
        <div className="d-flex justify-content-center">
          <div className="mx-5">
            <label className="text-color">From:</label>
            <input
              type="date"
              name="fromDate"
              className="m-2 px-2"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="mx-5">
            <label className="text-color">To:</label>
            <input
              type="date"
              name="toDate"
              className="m-2 px-2"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
      </div>

   
      <div className="login-container px-5 py-3 mt-4 m-2">
        <div className="container">
          <div className="row">
            <h4 className="col-4">Type</h4>
            <h4 className="col-4">Amount</h4>
            <h4 className="col-4">Date</h4>
          </div>
        </div>

        {filteredTransactions?.map((transaction) => (
          <div className="container m-2" key={transaction.id}>
            <div className="row">
              <h4 className="col-4">{transaction.type}</h4>
              <h4 className="col-4">{transaction.amount}</h4>
              <h4 className="col-4">{transaction.updatedAt.slice(0, 10)}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;