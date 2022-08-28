import "./main.css";
import React,{useState,useEffect} from "react";
import hello from "../../assets/hello.svg";
import Chart from "../chart/Chart";
import Table from "../table/Table2";
import PeopleIcon from '@material-ui/icons/People';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SmallTable from "../smallTable/SmallTable";
// import data from "../../dummy data/data.json"

const Main = () => {
  // const [json, setjson] = useState(data)

  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>HA STORE</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ><PeopleIcon/></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Sellers</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"><VisibilityIcon/></i>
            <div className="card_inner">
              <p className="text-primary-p">Product Visitor</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i><LocalOfferIcon/></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of product</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <i
           
            ><ThumbUpIcon/></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}
        <SmallTable/>
      {/* <Table data={json}/> */}
      <Table/>
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}


        
      </div>
    </main>
  );
};

export default Main;