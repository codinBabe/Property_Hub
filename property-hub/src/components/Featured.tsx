import Image from "next/image";
import { arrowRight, featuredProperties } from "./ImportImages";

const Featured = () => {
  return (
    <section className="p-24">
      <h2 className="text-3xl font-semibold text-center mb-8">Featured</h2>
      <p className="text-lg text-center mb-8">
        This includes the number of companies that we featured in.
      </p>
      <div className="flex justify-between gap-4 my-16">
        <p>12 Companies featured</p>
        <div className="flex items-center gap-4">
          <button className="p-3 rounded-full border border-primary-color text-white cursor-pointer my-2 transform rotate-180">
            <Image src={arrowRight} alt="icon" />
          </button>
          <button className="p-3 rounded-full border border-primary-color text-white cursor-pointer my-2">
            <Image src={arrowRight} alt="icon" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Image src={featuredProperties.property1} alt="property-1" />
        <Image src={featuredProperties.property2} alt="property-2" />
        <Image src={featuredProperties.property3} alt="property-3" />
        <Image src={featuredProperties.property4} alt="property-4" />
        <Image src={featuredProperties.property5} alt="property-5" />
      </div>
    </section>
  );
};

export default Featured;
