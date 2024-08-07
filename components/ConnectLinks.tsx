import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, FileTextIcon } from "@radix-ui/react-icons";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "Email",
    href: "mailto:s@crisp.sh",
    icon: <EnvelopeClosedIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sellerscrisp/",
    icon: <LinkedInLogoIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/sellerscrisp",
    icon: <GitHubLogoIcon />,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: <FileTextIcon />,
  },
];

export default ConnectLinks;