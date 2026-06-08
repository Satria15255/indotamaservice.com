const ServiceCard = ({ service }) => {
  return (
    <div>
      <div key={service.id} className="flex gap-3 bg-white p-4 h-50 hover:shadow-2xl transition duration-200 m-2 rounded shadow-lg">
        <div className="text-center bg-blue-200 text-5xl rounded-full flex justify-center h-5 px-9">{service.icon}</div>
        <div className="flex flex-col justify-around">
          <h2 className="text-lg xl:text-xl h-12 font-semibold">{service.title}</h2>
          <p className="max-w-lg text-gray-600 text-xs xl:text-sm py-4">{service.description}</p>
          <p className="text-xl text-blue-400 font-bold hover:underline">More</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
