import { FaGithub, FaInstagram, FaLinkedin, FaKeybase, FaKeyboard } from "react-icons/fa";
// import { FaYoutube } from "react-icons/si";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "Email (General)",
    href: "mailto:s@crisp.sh",
    icon: <FaKeyboard />,
  },
  {
    label: "GitHub",
    href: "https://github.com/sellerscrisp",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sellerscrisp/",
    icon: <FaLinkedin />,
  },
  {
    label: "Keybase",
    href: "https://keybase.io/shcrisp",
    icon: <FaKeybase />,
  },
];

export default ConnectLinks;