import Image from "next/image";
import { recentlyAddedProperties } from "./ImportImages";

const propertiesData = [
  {
    image: recentlyAddedProperties.recentlyAddedProperty1,
    location: "Ibeju-Lekki, Lagos.",
    description:
      "Tastefully finished 5 bedroom duplex with bq in a mini & secured estate location: wuye price: 200m",
    price: "#250,000,000.00",
    amenities: [
      { icon: recentlyAddedProperties.bathroom, value: "7 Bathrooms" },
      { icon: recentlyAddedProperties.bedroom, value: "7 Bedrooms" },
      { icon: recentlyAddedProperties.toilet, value: "8 Toilets" },
      { icon: recentlyAddedProperties.car, value: "12 Parking Spaces" },
    ],
  },
  {
    image: recentlyAddedProperties.recentlyAddedProperty2,
    location: "Ibeju-Lekki, Lagos.",
    description:
      "Tastefully finished 5 bedroom duplex with bq in a mini & secured estate location: wuye price: 200m",
    price: "#250,000,000.00",
    amenities: [
      { icon: recentlyAddedProperties.bathroom, value: "7 Bathrooms" },
      { icon: recentlyAddedProperties.bedroom, value: "7 Bedrooms" },
      { icon: recentlyAddedProperties.toilet, value: "8 Toilets" },
      { icon: recentlyAddedProperties.car, value: "12 Parking Spaces" },
    ],
  },
  {
    image: recentlyAddedProperties.recentlyAddedProperty3,
    location: "Ibeju-Lekki, Lagos.",
    description:
      "Tastefully finished 5 bedroom duplex with bq in a mini & secured estate location: wuye price: 200m",
    price: "#250,000,000.00",
    amenities: [
      { icon: recentlyAddedProperties.bathroom, value: "7 Bathrooms" },
      { icon: recentlyAddedProperties.bedroom, value: "7 Bedrooms" },
      { icon: recentlyAddedProperties.toilet, value: "8 Toilets" },
      { icon: recentlyAddedProperties.car, value: "12 Parking Spaces" },
    ],
  },
  {
    image: recentlyAddedProperties.recentlyAddedProperty5,
    location: "Ibeju-Lekki, Lagos.",
    description:
      "Tastefully finished 5 bedroom duplex with bq in a mini & secured estate location: wuye price: 200m",
    price: "#250,000,000.00",
    amenities: [
      { icon: recentlyAddedProperties.bathroom, value: "7 Bathrooms" },
      { icon: recentlyAddedProperties.bedroom, value: "7 Bedrooms" },
      { icon: recentlyAddedProperties.toilet, value: "8 Toilets" },
      { icon: recentlyAddedProperties.car, value: "12 Parking Spaces" },
    ],
  },
  {
    image: recentlyAddedProperties.recentlyAddedProperty4,
    location: "Ibeju-Lekki, Lagos.",
    description:
      "Tastefully finished 5 bedroom duplex with bq in a mini & secured estate location: wuye price: 200m",
    price: "#250,000,000.00",
    amenities: [
      { icon: recentlyAddedProperties.bathroom, value: "7 Bathrooms" },
      { icon: recentlyAddedProperties.bedroom, value: "7 Bedrooms" },
      { icon: recentlyAddedProperties.toilet, value: "8 Toilets" },
      { icon: recentlyAddedProperties.car, value: "12 Parking Spaces" },
    ],
  },
  {
    image: recentlyAddedProperties.recentlyAddedProperty5,
    location: "Ibeju-Lekki, Lagos.",
    description:
      "Tastefully finished 5 bedroom duplex with bq in a mini & secured estate location: wuye price: 200m",
    price: "#250,000,000.00",
    amenities: [
      { icon: recentlyAddedProperties.bathroom, value: "7 Bathrooms" },
      { icon: recentlyAddedProperties.bedroom, value: "7 Bedrooms" },
      { icon: recentlyAddedProperties.toilet, value: "8 Toilets" },
      { icon: recentlyAddedProperties.car, value: "12 Parking Spaces" },
    ],
  },
];

function RecentlyAddedProperties() {
  return (
    <section className="more-properties">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Recently Added Properties
      </h2>
      <p className="text-xl text-center mb-8">
        This includes the list of properties that is been added to the platform
        recently.
      </p>
      <div className="flex items-center justify-between gap-4 my-20">
        <p>Last updated: 12 Jun, 2021</p>
        <p>400 properties added.</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {propertiesData.map((property, index) => (
          <div className="bg-white shadow-md max-w-[97%] h-80" key={index}>
            <div className="flex items-center gap-4 p-4">
              <div className="w-[70%] overflow-hidden">
                <Image
                  src={property.image}
                  alt="Property 4"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-primary-color underline">
                  Detached duplex for sale
                </h3>
                <div className="flex items-center gap-2 my-3">
                  <Image
                    src={recentlyAddedProperties.location}
                    alt="Location"
                  />
                  <p>{property.location}</p>
                </div>
                <p className="text-lg">{property.description}</p>
                <hr className="border-0 border-b-[0.5px] border-primary-color mt-4 -mx-3 mb-2" />
                <p className="text-3xl font-semibold text-primary-color mt-2;">
                  {property.price}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 border-t border-border-color py-2 px-4">
              {property.amenities.map((amenity, index) => (
                <div className="flex items-center gap-2 mt-2" key={index}>
                  <Image src={amenity.icon} alt={amenity.value} />
                  <p className="text-sm text-text-color">{amenity.value}</p>
                  {index < property.amenities.length - 1 && (
                    <span className="mx-2 text-text-color text-2xl">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container flex justify-end mt-12">
        <button>Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>Next</button>
      </div>
    </section>
  );
}

export default RecentlyAddedProperties;
