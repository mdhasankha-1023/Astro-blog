import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function IconComponents({ type }) {
  return (
    <div>
      {type === "search" && <IoIosSearch />}
      {type === "bars" && <FaBars className="text-3xl" />}
      {type === "facebook" && <FaFacebook className="text-3xl" />}
      {type === "instagram" && <FaInstagramSquare className="text-3xl" />}
      {type === "twitter" && <FaTwitter className="text-3xl" />}
      {type === "linkedin" && <FaLinkedinIn className="text-3xl" />}
      {type === "youtube" && <FaYoutube className="text-3xl" />}
    </div>
  );
}
