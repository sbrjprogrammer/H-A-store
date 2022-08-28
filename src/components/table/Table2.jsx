import React,{useState,useEffect} from "react";
import "./table2.css";
import data from "../../dummy data/data.json"

const Table = () => {
 
  console.log(data)



  return (
    <div class="content-box">
      <p>
        Top Selling Projects <span>Sell All</span>
      </p>
      <br />
      <table>
        <tr>
          <th>User</th>
          <th>FirstName</th>
          <th>Amount</th>
          <th>Deadline</th>
        </tr>
         {data.map((item,index)=>{
            return(
              <tr key={index}>
              <td>{item.order}</td>
              <td>{item.username}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td></tr>
            )
        })} 
        
      </table>
    </div>
  );
};

export default Table;
