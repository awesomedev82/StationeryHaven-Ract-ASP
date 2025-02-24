import StoreIcon from "@mui/icons-material/Store";
// import InfoIcon from "@mui/icons-material/Info";
// import EmailIcon from "@mui/icons-material/Email";
import ErrorIcon from "@mui/icons-material/Error";

import slider1 from "../images/slider/slider1.jpg";
import slider2 from "../images/slider/slider2.jpg";
import slider3 from "../images/slider/slider3.jpg";


export const links = [
  { title: "home", path: "/", icon: StoreIcon },
  // { title: "about", path: "/about", icon: InfoIcon },
  // { title: "contact", path: "/contact", icon: EmailIcon },
  { title: "error", path: "/error", icon: ErrorIcon },
];

export const registrationLink = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

export const sliderArray = [
  {title: "Stationery Heaven", image: slider1},
  {title: "The best place", image: slider2},
  {title: "For you office", image: slider3}
]


export const tableHeaders: { label: string; align?: "left" | "right" | "center" | "inherit" | "justify" | undefined }[] = [
  { label: "Product", align: "left" },
  { label: "Price", align: "right" },
  { label: "Quantity", align: "center" },
  { label: "Subtotal", align: "right" },
  { label: "", align: "right" }, 
];

export const sortOptions = [
  {value: "name", label: "Alphabetical"},
  {value: "priceDesc", label: "Price - Hight to low"},
  {value: "price", label: "Price - Low to hight"},
]

export const checkoutSteps = ["Shipping address", "Review your order", "Payment details"];

type AlignType = "left" | "right" | "center" | undefined;

export const basketTableHeaders: { label: string; align?: AlignType }[] = [
  { label: "Product", align: "left" },
  { label: "Price", align: "right" },
  { label: "Quantity", align: "center" },
  { label: "Subtotal", align: "right" },
  { label: "", align: "right" }, 
];