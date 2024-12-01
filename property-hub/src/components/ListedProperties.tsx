import { listedProperties } from "./ImportImages";
import Image from "next/image";

function ListedProperties() {
  return (
    <section className="properties">
      <div className="flex items-center gap-12 py-12 w-full">
        <div className="flex-1">
          <Image src={listedProperties.listedproperty1} alt="listedproperty1" />
        </div>
        <div className="flex-1 flex-col justify-center px-8">
          <div>
            <h3 className="text-xl font-medium mb-4 uppercase">
              LIST OUT PROPERTIES
            </h3>
            <h2 className="text-3xl font-semibold mb-4 break-words w-auto max-w-[500px]">
              List out available properties both for sale and rent.
            </h2>
            <p className="mb-8 w-auto max-w-[450px]">
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
      <div className="flex items-center gap-12 py-12 w-full">
        <div className="flex-1 flex-col justify-center pl-40">
          <div>
            <h3 className="text-xl font-medium mb-4 uppercase">BUY A HOUSE</h3>
            <h2 className="text-3xl font-semibold mb-4 break-words w-auto max-w-[500px]">
              Buy Luxorious and affordable house.
            </h2>
            <p className="mb-8 w-auto max-w-[450px]">
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
          <Image src={listedProperties.listedproperty2} alt="listedproperty2" />
        </div>
      </div>
      <div className="flex items-center gap-12 py-12 w-full">
        <div className="flex-1">
          <Image src={listedProperties.listedproperty3} alt="listedproperty3" />
        </div>
        <div className="flex-1 flex-col justify-center px-8">
          <div>
            <h3 className="text-xl font-medium mb-4 uppercase">RENT A HOUSE</h3>
            <h2 className="text-3xl font-semibold mb-4 break-words w-auto max-w-[500px]">
              Look for affordable apartment to stay
            </h2>
            <p className="mb-8 w-auto max-w-[450px]">
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
