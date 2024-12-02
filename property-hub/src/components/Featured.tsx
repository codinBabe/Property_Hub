import Image from "next/image";
import { arrowRight, featuredProperties } from "./ImportImages";

const Featured = () => {
  return (
    <section className="p-6 md:p-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-8">
        Featured
      </h2>
      <p className="text-base md:text-lg text-center mb-4 md:mb-8">
        This includes the number of companies that we featured in.
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-4 my-8 md:my-16">
        <p className="text-center md:text-left">12 Companies featured</p>
        <div className="flex justify-center md:justify-end items-center gap-4">
          <button className="p-3 rounded-full border border-primary-color text-white cursor-pointer my-2 transform rotate-180">
            <Image src={arrowRight} alt="icon" />
          </button>
          <button className="p-3 rounded-full border border-primary-color text-white cursor-pointer my-2">
            <Image src={arrowRight} alt="icon" />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src={featuredProperties.property1}
          alt="property-1"
          className="w-full md:w-auto"
        />
        <Image
          src={featuredProperties.property2}
          alt="property-2"
          className="w-full md:w-auto"
        />
        <Image
          src={featuredProperties.property3}
          alt="property-3"
          className="w-full md:w-auto"
        />
        <Image
          src={featuredProperties.property4}
          alt="property-4"
          className="w-full md:w-auto"
        />
        <Image
          src={featuredProperties.property5}
          alt="property-5"
          className="w-full md:w-auto"
        />
      </div>
    </section>
  );
};

export default Featured;
