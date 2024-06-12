import { Footer } from "flowbite-react";
import { BsDribbble, BsTiktok, BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";

export const FooterItem = () => {
  return (
    <Footer container className="mt-10">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="../../funkos/logo/01.jpeg"
              alt="NakamaStore Logo"
              name="NakamaStore"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NakamaStore" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.instagram.com/nakamastore.pe" icon={BsInstagram} />
            <Footer.Icon href="https://www.tiktok.com/@nakamastore.oficial" icon={BsTiktok} />
            <Footer.Icon href="#" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
