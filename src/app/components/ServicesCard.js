import { PiArrowRightThin } from "react-icons/pi";

const ServiceCard = ({ service }) => {
  return (
    <div className="w-full">
      <div key={service.id} className="flex flex-col justify-around w-full gap-3 bg-white p-4 h-80 hover:shadow-2xl transition duration-200 m-2 rounded-xl shadow-lg">
        <div className="text-center flex justify-center ">
          <p className="text-blue-900 text-4xl rounded-full bg-blue-100 p-4">{service.icon}</p>
        </div>
        <div className="flex flex-col items-center justify-around">
          <h2 className="text-lg xl:text-xl h-12 font-semibold">{service.title}</h2>
          <p className="max-w-lg text-gray-600 text-center text-xs xl:text-sm py-4">{service.description}</p>
          <p className="text-xl text-blue-900 font-bold hover:underline flex items-center gap-2">
            Book Now <PiArrowRightThin />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
