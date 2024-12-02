import Image from "next/image";
import { footerIcons } from "./ImportImages";

const Footer = () => {
  return (
    <footer className="border-t border-border-color text-text-color text-base">
      <div className="p-6 md:p-[100px] flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="max-w-full md:max-w-[350px]">
          <h2 className="text-xl md:text-2xl">About Us</h2>
          <p className="text-sm md:text-base">
            This platform also helps real estate managers in placing good
            tenants in their real estate property so as not to lose in the
            business.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image src={footerIcons.facebook} alt="facebook" />
            <Image src={footerIcons.twitter} alt="twitter" />
            <Image src={footerIcons.instagram} alt="instagram" />
            <Image src={footerIcons.linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-xl md:text-2xl">Links</h2>
          <p className="text-sm md:text-base">Terms of Use</p>
          <p className="text-sm md:text-base">Privacy Policy</p>
          <p className="text-sm md:text-base">Cookie</p>
          <p className="text-sm md:text-base">Blog</p>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-xl md:text-2xl">Companies</h2>
          <p className="text-sm md:text-base">Agent</p>
          <p className="text-sm md:text-base">Developer</p>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-xl md:text-2xl">Property Listed Areas</h2>
          <p className="text-sm md:text-base">Lagos State</p>
          <p className="text-sm md:text-base">Oyo State</p>
          <p className="text-sm md:text-base">Akwa-Ibom</p>
          <p className="text-sm md:text-base">Rivers State</p>
        </div>
      </div>
      <div className="text-center text-sm md:text-lg border-t border-border-color">
        <p className="mt-3 text-text-color">&copy; | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
