import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaX } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/ravinesh18/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Ravinesh18" Icon={FiGithub} />
      <SingleContactSocial link="https://x.com/RavineshMishra1" Icon={FaX} />
    </div>
  );
};

export default ContactSocial;
