import Image from "next/image";
import { ctaIcons } from "./ImportImages";

const CTA = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-6 md:py-[100px]">
      <div className="flex flex-col mb-8 md:mb-0 md:ml-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Download App on:
          </h2>
          <p className="text-base md:text-xl mb-8 w-[80%]">
            Download our Android app or iOS app to get quick access to property
            on 9jaPropertyHub from your mobile phone.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <button className="bg-black-color border-none text-white py-2 px-4 rounded-lg w-full md:w-[180px] flex items-center justify-center mb-4 md:mb-0">
            <Image
              src={ctaIcons.cta1}
              alt="playstore icon"
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] mr-2"
            />
            GET IT ON Google Play
          </button>
          <button className="bg-black-color border-none text-white py-2 px-4 rounded-lg w-full md:w-[180px] flex items-center justify-center">
            <Image
              src={ctaIcons.cta2}
              alt="apple icon"
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] mr-2"
            />
            Download on the App Store
          </button>
        </div>
      </div>
      <div>
        <Image src={ctaIcons.iphone} alt="iphone" className="w-full" />
      </div>
    </section>
  );
};

export default CTA;
