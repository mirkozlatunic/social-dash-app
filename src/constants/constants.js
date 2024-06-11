import { IoLogoFacebook } from "react-icons/io";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import instagramLogo from "../assets/instagram.svg";

const contentLarge = [
  {
    border: "border-t-blue-500",
    icon: <IoLogoFacebook className="mr-2 size-6 text-blue-500" />,
    user: "@nathanf",
    followers: "1987",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "12 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-sky-500",
    icon: <FaTwitter className="mr-2 size-6 text-sky-500" />,
    user: "@nathanf",
    followers: "1044",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "99 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-pink-500",
    icon: <img src={instagramLogo} alt="instagram" className="mr-2 " />,
    user: "@realnathanf",
    followers: "11k",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "1099 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-red-500",
    icon: <FaYoutube className="mr-2 size-6 text-red-500" />,
    user: "Nathan F.",
    followers: "8234",
    status: <TiArrowSortedDown className="mr-1 text-red-500" />,
    number: "144 Today",
    arrow: "text-red-500",
  },
];

const contentSmall = [
  {
    text: "Page Views",
    icon: <IoLogoFacebook className="mr-2 size-6 text-blue-500" />,
    number: "87",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    precent: "3%",
  },
];

export { contentLarge, contentSmall };
