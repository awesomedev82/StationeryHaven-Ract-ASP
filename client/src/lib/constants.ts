import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import ErrorIcon from '@mui/icons-material/Error';

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