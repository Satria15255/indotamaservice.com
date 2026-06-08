const ServiceCard = ({ service }) => {
  return (
    <div>
      <div key={service.id} className="bg-white rounded-lg p-4 h-full m-2 text-center rounded shadow-xl">
        <div className="text-center text-5xl rounded-full flex justify-center mb-5 ">{service.icon}</div>
        <h2 className="text-lg xl:text-xl font-semibold">{service.title}</h2>
        <p className="max-w-lg text-xs xl:text-sm py-4">{service.description}</p>
        <p className="text-xl text-blue-400 font-bold hover:underline">More</p>
      </div>
    </div>
  );
};

export default ServiceCard;
