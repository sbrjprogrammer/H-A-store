import "./navbar.css";
import avatar from "../../assets/avatar.svg";
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import MessageSharpIcon from '@material-ui/icons/MessageSharp';
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
      
      <SearchSharpIcon/><input className="serch" type="text"placeholder="search" />
      </div>
      <div className="navbar__right">
        <a href="#">
          <i  aria-hidden="true"><NotificationsActiveSharpIcon/></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"><MessageSharpIcon/></i>
        </a>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;