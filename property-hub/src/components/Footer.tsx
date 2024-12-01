import Image from "next/image";
import { footerIcons } from "./ImportImages";

const Footer = () => {
  return (
    <footer className="border-t border-border-color text-text-color text-base">
      <div className="p-[100px] flex items-start justify-between">
        <div className=" max-w-[350px]">
          <h2 className="text-2xl">About Us</h2>
          <p>
            This platform also help real estate managers in placing good tenants
            in their real estate property so as not to loose in the business.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image src={footerIcons.facebook} alt="facebook" />
            <Image src={footerIcons.twitter} alt="twitter" />
            <Image src={footerIcons.instagram} alt="instagram" />
            <Image src={footerIcons.linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h2>Links</h2>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h2>Companies</h2>
          <p>Agent</p>
          <p>Developer</p>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h2>Property Listed Areas</h2>
          <p>Lagos State</p>
          <p>Oyo State</p>
          <p>Akwa-Ibom</p>
          <p>Rivers State</p>
        </div>
      </div>
      <div className="text-center text-lg border-t border-border-color">
        <p className="mt-3 text-text-color">&copy; | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
