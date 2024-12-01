"use client";
import { useState } from "react";

const HeroSection = () => {
  const [selectedLocation, setSelectedLocation] = useState("Kwara");
  const [selectedPropertyType, setSelectedPropertyType] =
    useState("4 bedroom duplex");
  const [selectedPrice, setSelectedPrice] = useState("$25000");

  const [dropdownOpen, setDropdownOpen] = useState({
    location: false,
    propertyType: false,
    price: false,
  });

  const locations = [
    "Kwara",
    "Lagos",
    "Abuja",
    "Oyo",
    "Niger",
    "Ogun",
    "River",
    "Ondo",
  ];
  const propertyTypes = ["4 bedroom duplex"];
  const prices = ["$25000"];
  return (
    <section className="hero-section">
      <div className="mt-16 text-white max-w-[620px]">
        <h1 className="text-[2.8rem] font-semibold mb-4 leading-tight">
          Look for the perfect location to get accommodation.
        </h1>
        <p className="text-xl mb-6">
          This platform also helps real estate managers in placing good tenants
          in their real estate property so as not to lose in the business.
        </p>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex">
          <button className="bg-primary-color text-white py-[10px] px-5 cursor-pointer rounded-sm">
            Buy
          </button>
          <button className="bg-white text-primary-color py-[10px] px-5 cursor-pointer rounded-sm active">
            Rent
          </button>
        </div>
        <div className="flex items-center gap-6 flex-wrap bg-white w-[70%] py-[10px] px-5 rounded-sm">
          {/* Custom Select for Location */}
          <div className="relative flex items-center gap-2">
            <label className="mr-[10px]">Location</label>
            <div
              className="select-selected w-[100px] bg-primary-color text-white px-4 py-2 cursor-pointer relative"
              onClick={() =>
                setDropdownOpen((prev) => ({
                  ...prev,
                  location: !prev.location,
                }))
              }
            >
              {selectedLocation}
              <span className="absolute top-1/2 right-3 -translate-y-1/2">
                ▼
              </span>
            </div>
            {dropdownOpen.location && (
              <div className="absolute bg-primary-color text-white mt-2 w-[100px] left-[80px] top-[36px] border border-border-color shadow-lg z-10">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className="px-4 py-2 hover:bg-white hover:text-primary-color cursor-pointer"
                    onClick={() => {
                      setSelectedLocation(loc);
                      setDropdownOpen((prev) => ({
                        ...prev,
                        location: false,
                      }));
                    }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Custom Select for Property Type */}
          <div className="relative flex items-center gap-2">
            <label className="mr-[10px]">Property Type</label>
            <div
              className="select-selected w-[180px] bg-primary-color text-white px-4 py-2 cursor-pointer relative"
              onClick={() =>
                setDropdownOpen((prev) => ({
                  ...prev,
                  propertyType: !prev.propertyType,
                }))
              }
            >
              {selectedPropertyType}
              <span className="absolute top-1/2 right-3 -translate-y-1/2">
                ▼
              </span>
            </div>
            {dropdownOpen.propertyType && (
              <div className="absolute bg-primary-color text-white mt-2 left-[115px] top-[36px] w-[180px] border border-border-color shadow-lg z-10">
                {propertyTypes.map((type) => (
                  <div
                    key={type}
                    className="px-4 py-2 hover:bg-white hover:text-primary-color cursor-pointer"
                    onClick={() => {
                      setSelectedPropertyType(type);
                      setDropdownOpen((prev) => ({
                        ...prev,
                        propertyType: false,
                      }));
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Custom Select for Price */}
          <div className="relative flex items-center gap-2">
            <label className="mr-[10px]">Price</label>
            <div
              className="select-selected w-[100px] bg-primary-color text-white px-4 py-2 cursor-pointer relative"
              onClick={() =>
                setDropdownOpen((prev) => ({
                  ...prev,
                  price: !prev.price,
                }))
              }
            >
              {selectedPrice}
              <span className="absolute top-1/2 right-3 -translate-y-1/2">
                ▼
              </span>
            </div>
            {dropdownOpen.price && (
              <div className="absolute bg-primary-color text-white mt-2 w-[100px] left-[54px] top-[35px] border border-border-color shadow-lg z-10">
                {prices.map((price) => (
                  <div
                    key={price}
                    className="px-4 py-2 hover:bg-white hover:text-primary-color cursor-pointer"
                    onClick={() => {
                      setSelectedPrice(price);
                      setDropdownOpen((prev) => ({
                        ...prev,
                        price: false,
                      }));
                    }}
                  >
                    {price}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="bg-primary-color text-white py-[8px] px-5 rounded-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
