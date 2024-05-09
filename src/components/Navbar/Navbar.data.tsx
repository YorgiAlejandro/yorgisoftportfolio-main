import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine } from "react-icons/ri";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="25" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="25" />,
  },
  {
    name: "services",
    path: "/services",
    icon: <RiServerLine size="25" />,
  },
  {
    name: "work",
    path: "/works",
    icon: <RiBriefcase2Line size="25" />,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <RiChatPollLine size="25" />,
  },
];