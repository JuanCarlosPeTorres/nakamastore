import type { CustomFlowbiteTheme } from "flowbite-react";

export const paginationTheme: CustomFlowbiteTheme["pagination"] = {
  base: "flex items-center justify-center space-x-2",
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-nakama-white bg-nakama-black px-3 py-2 leading-tight text-nakama-white enabled:hover:bg-nakama-orange enabled:hover:text-nakama-white",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-r-lg border border-nakama-white bg-nakama-black px-3 py-2 leading-tight text-nakama-white enabled:hover:bg-nakama-orange enabled:hover:text-nakama-white",
      icon: "h-5 w-5",
    },
    selector: {
      base: "w-12 border border-nakama-white bg-nakama-black py-2 leading-tight text-nakama-white enabled:hover:bg-nakama-orange enabled:hover:text-nakama-white",
      active: "bg-nakama-orange text-nakama-white",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};

export const buttonTheme: CustomFlowbiteTheme["button"] = {
  base: "inline-flex items-center justify-center rounded-lg border border-nakama-white bg-nakama-black px-3 py-2 leading-tight text-nakama-white enabled:hover:bg-nakama-orange enabled:hover:text-nakama-white",
};

export const footerTheme: CustomFlowbiteTheme["footer"] = {
  root: {
    base: "bg-nakama-black",
  },
  brand: {
    base: "flex items-center bg-red-500",
    img: "mr-3 h-8",
    span: "self-center text-xl font-semibold whitespace-nowrap text-white",
  },
  groupLink: {
    base: "flex flex-col space-y-4 bg-red-500",
    link: {
      base: "text-gray-400 hover:text-orange-500",
    },
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-orange-500 bg-red-500",
  },
  divider: {
    base: "my-6 border-t border-gray-700 bg-red-500",
  },
  copyright: {
    base: "text-sm text-gray-400 sm:text-center text-orange-500 bg-red-500",
    href: "text-gray-400 hover:text-orange-500",
    span: "text-gray-400 hover:text-orange-500",
  },
  icon: {
    base: "text-gray-400 hover:text-orange-500 bg-red-500",
    size: "h-5 w-5",
  },
};

