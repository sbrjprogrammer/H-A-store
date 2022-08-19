import React from 'react'
import Table from '../table/Table2'

const SmallTable = () => {
  return (
    <div className="charts">
    <div className="charts__left">
      <div className="charts__left__title">
        <div>
          <h1>Daily Reports</h1>
          
        </div>
        
      </div>
       <Table />
    </div>

    <div className="charts__right">
      <div className="charts__right__title">
        <div>
          <h1>Stats Reports</h1>
          <p>Cupertino, California, USA</p>
        </div>
        
      </div>

      <div className="charts__right__cards">
        
      <Table />
        

      
      
      </div>
    </div>
  </div>
  )
}

export default SmallTable