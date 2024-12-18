import Image from "next/image";
import { servicesIcons } from "./ImportImages";

const Service = () => {
  return (
    <section className="services p-6 md:p-24">
      <div className="service-content mb-8 md:mb-16">
        <h3 className="font-montserrat font-medium text-sm text-primary-color mb-2">
          9JAPROPERTYHUB
        </h3>
        <h2 className="font-medium text-2xl md:text-4xl text-text-color mb-4">
          Our Services
        </h2>
        <p className="text-base md:text-2xl text-text-color w-full md:w-[80%]">
          We offer you the best services that will favor you when renting or
          purchasing properties.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="service-1">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-service-1-color">
            <Image src={servicesIcons.service1} alt="Service 1" />
          </div>
          <p className="text-sm text-text-color">Cost Management</p>
        </div>
        <div className="service-2">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-service-2-color">
            <Image src={servicesIcons.service2} alt="Service 2" />
          </div>
          <p className="text-sm text-text-color">
            List out available properties
          </p>
        </div>
        <div className="service-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-primary-color">
            <Image src={servicesIcons.service3} alt="Service 3" />
          </div>
          <p className="text-sm text-text-color">
            Full personnels verification.
          </p>
        </div>
        <div className="service-4 md:col-start-3 md:justify-self-end">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-service-4-color">
            <Image src={servicesIcons.service4} alt="Service 4" />
          </div>
          <p className="text-sm text-text-color">Affordable Prices</p>
        </div>
        <div className="service-5 md:col-start-4 md:justify-self-end">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-service-5-color">
            <Image src={servicesIcons.service5} alt="Service 5" />
          </div>
          <p className="text-sm text-text-color">
            Buying and Selling of properties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
