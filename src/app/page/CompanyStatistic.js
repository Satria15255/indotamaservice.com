const CompanyStatistic = () => {
    return (
      <div className="h-screen md:h-auto py-12 flex justify-center px-8">
        <div className="w-full h-auto py-16 bg-blue-100 flex flex-col md:flex-row justify-around items-center rounded-4xl ">
          <div className="flex flex-col justify-center items-center  text-semibold gap-2">
            <p className="text-5xl font-bold">1K+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="flex flex-col justify-center items-center  text-semibold gap-2">
            <p className="text-5xl font-bold">3K+</p>
            <p className="text-sm">AC Unit Installed</p>
          </div>
          <div className="flex flex-col justify-center items-center  text-semibold gap-2">
            <p className="text-5xl font-bold">5th</p>
            <p className="text-sm">Trusted by Clients</p>
          </div>
          <div className="flex flex-col justify-center items-center  text-semibold gap-2">
            <p className="text-5xl font-bold">99%</p>
            <p className="text-sm">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    );
}

export default CompanyStatistic