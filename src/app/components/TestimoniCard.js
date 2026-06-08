import { FaStar, FaUserCircle } from "react-icons/fa";

const TestimoniCard = ({ item }) => {
  return (
    <div className="h-90 w-auto flex flex-col justify-around">
      <div>
        <FaUserCircle className=" text-5xl mx-auto" />
      </div>
      <div className="flex justify-center mb-4">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <p className="text-center text-xs md:text-sm mt-2">{item.text}</p>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-center">{item.name}</h3>
        <p className="text-gray-500 text-sm md:text-lg text-center">{item.city}</p>
      </div>
    </div>
  );
};
export default TestimoniCard;
