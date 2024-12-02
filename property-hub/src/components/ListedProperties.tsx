import { listedProperties } from "./ImportImages";
import Image from "next/image";

function ListedProperties() {
  return (
    <section className="properties">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 py-6 md:py-12 w-full">
        <div className="flex-1">
          <Image
            src={listedProperties.listedproperty1}
            alt="listedproperty1"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4 uppercase">
              LIST OUT PROPERTIES
            </h3>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 break-words w-auto max-w-full md:max-w-[500px]">
              List out available properties both for sale and rent.
            </h2>
            <p className="text-base md:text-lg mb-4 md:mb-8 w-auto max-w-full md:max-w-[450px]">
              Properties listed on this platform are quite affordable and you
              don’t have to panic about fake or agents that are not trustworthy.
              All these are been taken care of. Register on this platform to
              view available properties for sale based on your preferred
              location.
            </p>
          </div>
          <button className="linear-btn">Learn More</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 py-6 md:py-12 w-full">
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 md:pl-40">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4 uppercase">
              BUY A HOUSE
            </h3>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 break-words w-auto max-w-full md:max-w-[500px]">
              Buy Luxurious and affordable house.
            </h2>
            <p className="text-base md:text-lg mb-4 md:mb-8 w-auto max-w-full md:max-w-[450px]">
              Properties listed on this platform are quite affordable and you
              don’t have to panic about fake or agents that are not trustworthy.
              All these are been taken care of. Register on this platform to
              view available properties for sale based on your preferred
              location.
            </p>
          </div>
          <button className="linear-btn">Learn More</button>
        </div>
        <div className="flex-1">
          <Image
            src={listedProperties.listedproperty2}
            alt="listedproperty2"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 py-6 md:py-12 w-full">
        <div className="flex-1">
          <Image
            src={listedProperties.listedproperty3}
            alt="listedproperty3"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4 uppercase">
              RENT A HOUSE
            </h3>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 break-words w-auto max-w-full md:max-w-[500px]">
              Look for affordable apartment to stay
            </h2>
            <p className="text-base md:text-lg mb-4 md:mb-8 w-auto max-w-full md:max-w-[450px]">
              Properties listed on this platform are quite affordable and you
              don’t have to panic about fake or agents that are not trustworthy.
              All these are been taken care of. Register on this platform to
              view available properties for sale based on your preferred
              location.
            </p>
          </div>
          <button className="linear-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default ListedProperties;
