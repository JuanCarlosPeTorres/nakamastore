import { Footer } from "flowbite-react";
import { BsDribbble, BsTiktok, BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";
import { footerTheme } from "../utils/theme";

export const FooterItem = () => {
  return (
    <Footer container theme={footerTheme}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="/funkos/logo/01.jpeg"
              alt="NakamaStore Logo"
              name="NakamaStore"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="text-orange-500" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-400 hover:text-orange-500">Flowbite</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-orange-500">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" className="text-orange-500" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-400 hover:text-orange-500">Github</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-orange-500">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-orange-500" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-gray-400 hover:text-orange-500">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-orange-500">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="NakamaStore" year={2024}/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.instagram.com/nakamastore.pe" icon={BsInstagram} className="text-orange-500" target="_blank" />
            <Footer.Icon href="https://www.tiktok.com/@nakamastore.oficial" icon={BsTiktok} className="text-orange-500" target="_blank" />
            <Footer.Icon href="./" icon={BsWhatsapp} className="text-orange-500" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
