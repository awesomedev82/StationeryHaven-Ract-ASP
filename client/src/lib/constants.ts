import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import ErrorIcon from '@mui/icons-material/Error';
import slider1 from "../images/slider/slider1.jpg";
import slider2 from "../images/slider/slider2.jpg";
import slider3 from "../images/slider/slider3.jpg";

export const links = [
  { title: "home", path: "/", icon: StoreIcon },
  { title: "about", path: "/about", icon: InfoIcon },
  { title: "contact", path: "/contact", icon: EmailIcon },
  { title: "error", path: "/error", icon: ErrorIcon },
];

export const registrationLink = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

export const images = [slider1, slider2, slider3];