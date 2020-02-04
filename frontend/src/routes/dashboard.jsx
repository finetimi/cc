import AllCollabs from "views/Collabs/AllCollabs";
import ActiveCollabs from "views/Collabs/ActiveCollabs";
import CollabDetails from "../views/Collabs/CollabDetails";
import NewCollabs from "views/Collabs/NewCollab";
import Dashboard from "views/Dashboard/Dashboard.jsx";

// @material-ui/icons
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import HelpIcon from '@material-ui/icons/Help';
import Help from "../views/Help/Help";
import ContactUs from "../views/ContactUs/ContactUs";
import UserProfile from "../views/EditProfile/EditProfile";


const collabs = [

  {
    path: "/new-collab",
    name: "New Collab",
    mini: "NC",
    component: NewCollabs
  },
  {
    path: "/active-collabs",
    name: "Active Collabs",
    mini: "AC",
    component: ActiveCollabs
  },
  {
    path: "/all-collabs",
    name: "All Collabs",
    mini: "ALL",
    component: AllCollabs
  }
];

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    collapse: true,
    path: "-collabs",
    name: "Collabs",
    state: "openCollabs",
    icon: Image,
    views: collabs
  },
  {
    path: "/help",
    name: "Help",
    icon: HelpIcon,
    component: Help
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    icon: MailIcon,
    component: ContactUs
  },
  { path: "/collab-details/:id", name: "Collab Details", icon: MailIcon, component: CollabDetails },
  { path: "/user-profile", name: "User Profile", icon: MailIcon, component: UserProfile },

  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
