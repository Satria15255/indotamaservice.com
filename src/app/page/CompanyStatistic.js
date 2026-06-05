const CompanyStatistic = () => {
    return (
        <div className="bg-blue-100 h-auto py-12">
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl">1000+</p>
                    <p className="text-sm">Happy Customers</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-3xl">3000+</p>
                    <p className="text-sm">AC Unit Installed</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-3xl">5th</p>
                    <p className="text-sm">Trusted by Clients</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyStatistic