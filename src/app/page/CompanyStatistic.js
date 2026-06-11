import {
  PiUsersThreeDuotone,
  PiClipboardTextDuotone,
  PiListChecksDuotone,
  PiCalendarDotsDuotone,
} from "react-icons/pi";
import { AiTwotoneLike } from "react-icons/ai";

const CompanyStatistic = () => {
  return (
    <div className="h-auto py-12 flex justify-center px-5 md:px-8">
      <div className="w-full h-100 md:h-auto md:py-16 bg-blue-100 grid grid-cols-2 md:grid-cols-4 items-center rounded-4xl ">
        <div className="flex flex-col md:flex-row justify-center items-center text-semibold gap-2 border-r border-gray-300">
          <div className="bg-white rounded-full p-2 ">
            <PiUsersThreeDuotone size={50} className="text-blue-900" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl font-bold">1K+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center  text-semibold gap-2 md:border-r border-gray-300">
          <div className="bg-white rounded-full p-2">
            <PiListChecksDuotone size={50} className="text-blue-900" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl font-bold">3K+</p>
            <p className="text-sm">Project Completed</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center  text-semibold gap-2 border-r border-gray-300">
          <div className="bg-white rounded-full p-2">
            <PiCalendarDotsDuotone size={50} className="text-blue-900" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl font-bold">5th</p>
            <p className="text-sm">Trusted by Clients</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center  text-semibold gap-2">
          <div className="bg-white rounded-full p-2">
            <AiTwotoneLike size={50} className="text-blue-900" />
          </div>
          <div className=" flex flex-col items-center md:items-start">
            <p className="text-4xl font-bold">99%</p>
            <p className="text-sm">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatistic;
