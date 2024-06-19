// theme.ts
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

export default paginationTheme;
