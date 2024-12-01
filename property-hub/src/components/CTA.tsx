import Image from "next/image";
import { ctaIcons } from "./ImportImages";

const CTA = () => {
  return (
    <section className="flex items-center">
      <div className="p-[100px] flex flex-col">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Download App on:</h2>
          <p className="text-xl mb-8">
            Download our Android app or iOS app to get quick access to property
            on 9jaPropertyHub from your mobile phone.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <button className="bg-black-color border-none text-white py-1 px-2 rounded-lg w-[150px] flex items-center justify-center">
            <Image
              src={ctaIcons.cta1}
              alt="playstore icon"
              className="w-[40px] h-[40px]"
            />
            GET IT ON Google Play
          </button>
          <button className="bg-black-color border-none text-white py-1 px-2 rounded-lg w-[180px] flex items-center justify-center">
            <Image
              src={ctaIcons.cta2}
              alt="apple icon"
              className="w-[40px] h-[40px]"
            />
            Download on the App Store
          </button>
        </div>
      </div>
      <div className="py-[100px]">
        <Image src={ctaIcons.iphone} alt="iphone" />
      </div>
    </section>
  );
};

export default CTA;
