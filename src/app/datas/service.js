import { FaPumpSoap, FaTools, FaWrench, FaSnowflake, FaTruckMoving, FaCalendarCheck } from "react-icons/fa";

const service = [
  {
    id: 1,
    title: "AC Cleaning",
    description: "Thorough cleaning of the AC unit to remove dust and dirt so that the air is cleaner and the AC works more efficiently.",
    icon: <FaPumpSoap />,
  },
  {
    id: 2,
    title: "AC Installation",
    description: "New AC installation with a neat, safe and standardized process to ensure optimal cooling performance.",
    icon: <FaTools />,
  },
  {
    id: 3,
    title: "AC Repair",
    description: "Solusi cepat dan tepat untuk berbagai kerusakan AC, ditangani langsung oleh teknisi berpengalaman.",
    icon: <FaWrench />,
  },
  {
    id: 4,
    title: "Freon Refill",
    description: "Freon filling and addition service to restore the AC's cooling capacity to its maximum.",
    icon: <FaSnowflake />,
  },
  {
    id: 5,
    title: "AC Dismantling & Relocation",
    description: "Serving dismantling and reinstallation of AC when moving house, office, or room renovation.",
    icon: <FaTruckMoving />,
  },
  {
    id: 6,
    title: "Periodic AC Maintenance",
    description: "Regular maintenance services to maintain optimal AC performance, save electricity, and last longer.",
    icon: <FaCalendarCheck />,
  },
];

export default service;
