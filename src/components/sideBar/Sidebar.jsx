import "./sidebar.css";
// import logo from "../../assets/logo.png";
// import logo from "../../assets/logo4.png";
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SportsHandballSharpIcon from '@material-ui/icons/SportsHandballSharp';
import HomeWorkSharpIcon from '@material-ui/icons/HomeWorkSharp';
import PaymentSharpIcon from '@material-ui/icons/PaymentSharp';
import LiveHelpSharpIcon from '@material-ui/icons/LiveHelpSharp';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img  alt="logo" />
          <h1>HA store</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"><StorefrontIcon/></i>
          <a href="#">Product Management</a>
        </div>
        <div className="sidebar__link">
          <i ><AddShoppingCartOutlinedIcon></AddShoppingCartOutlinedIcon></i>
         
          <a href="#">orders</a>
        </div>
        <div className="sidebar__link">
          <i ><SportsHandballSharpIcon/></i>
          <a href="#">promotion</a>
        </div>
        <div className="sidebar__link">
          <i ><HomeWorkSharpIcon/></i>
          <a href="#">Warehouse</a>
        </div>
        <div className="sidebar__link">
          <i ><PaymentSharpIcon/></i>
          <a href="#">Finance</a>
        </div>
        <div className="sidebar__link">
          <i ><LiveHelpSharpIcon/></i>
          <a href="#">Seller support</a>
        </div>
        <h2>Seller</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"><AccountBoxSharpIcon/></i>
          <a href="#">Seller documentation</a>
        </div>
        <div className="sidebar__link">
          <i ><PersonSharpIcon/></i>
          <a href="#">Profile</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Special Days</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#">Apply for leave</a>
        </div>
       
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
