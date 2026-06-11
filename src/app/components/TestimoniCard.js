import { FaStar, FaUserCircle } from "react-icons/fa";

const TestimoniCard = ({ item }) => {
  return (
    <div className="h-80 w-full flex flex-col justify-around shadow-lg bg-blue-100 border border-gray-100 rounded-lg p-4">
      <div className="flex items-center gap-4">
        <div>
          <FaUserCircle className=" text-5xl mx-auto" />
        </div>
        <div className="flex items-center justify-around gap-3">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
      </div>
      <div>
        <p className=" text-gray-700 text-sm md:text-lg mt-2">{item.text}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-500 text-sm md:text-lg ">{item.role}</p>
      </div>
    </div>
  );
};
export default TestimoniCard;
