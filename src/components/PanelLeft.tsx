import React from "react";
import { Drawer, Sidebar } from "flowbite-react";
import { HiChartPie, HiLogin, HiPencil, HiShoppingBag, HiUsers } from "react-icons/hi";
import { BsTiktok, BsWhatsapp, BsInstagram } from "react-icons/bs";

interface PanelLeftProps {
  menuOpen: boolean;
  onClose: () => void;
}

export const PanelLeft: React.FC<PanelLeftProps> = ({ menuOpen, onClose }) => {
  return (
    <Drawer open={menuOpen} onClose={onClose}>
      <Drawer.Items>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="[&>div]:bg-transparent [&>div]:p-0"
        >
          <div className="flex h-full flex-col justify-between py-2">
            <div>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="/" icon={HiChartPie}>
                    Home
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/e-commerce/products"
                    icon={HiShoppingBag}
                  >
                    About
                  </Sidebar.Item>
                  <Sidebar.Item href="/users/list" icon={HiUsers}>
                    Services
                  </Sidebar.Item>
                  <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                    Pricing
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/authentication/sign-up"
                    icon={HiPencil}
                  >
                    Contact
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item
                    href="https://www.instagram.com/nakamastore.pe"
                    icon={BsInstagram}
                    target="_blank"
                  >
                    Instagram
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="https://www.tiktok.com/@nakamastore.oficial"
                    icon={BsTiktok}
                    target="_blank"
                  >
                    Tiktok
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={BsWhatsapp}>
                    WhatsApp
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </div>
          </div>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
};
