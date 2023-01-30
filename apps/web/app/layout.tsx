import "../styles/globals.css";
import { Arimo, Halant } from "@next/font/google";
import { footerItems } from "ui";
import { AnalyticsWrapper } from "./Analytics";

import { headers } from "next/headers";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
const roboto = Arimo({
  weight: ["400", "500", "700", "600"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: any) {
  const headersList = headers();
  const ip = headersList.get("x-real-ip");
  return (
    <html lang="en">
      <head />
      <body className={`${roboto.className} text-[#102641]`}>
        <div className="flex flex-row justify-center px-52 border-b border-b-[#dee1ec]">
          <div className="flex flex-row justify-between  min-h-[24px]  w-full max-w-4xl">
            <div className="flex flex-row justify-between gap-4">
              <div className="flex flex-col justify-center cursor-pointer text-[#007db1]">
                enable accessibility
              </div>
              <div className="flex flex-col justify-center = cursor-pointer">
                |
              </div>
              <div className="flex flex-col justify-center cursor-pointer text-[#007db1]">
                gift card
              </div>
              <div className="flex flex-col justify-center = cursor-pointer">
                |
              </div>
              <div className="flex flex-col justify-center cursor-pointer text-[#007db1]">
                flyer
              </div>
              <div className="flex flex-col justify-center= cursor-pointer">
                |
              </div>
              <div className="flex flex-col justify-center cursor-pointer text-[#007db1]">
                track your order
              </div>
            </div>
            <p>sign up, earn points, get treats</p>
          </div>
        </div>
        <header className="font-light border-b border-gray-200 h-[76px] bg-white flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between  h-full text-sm text-[#102641] w-full max-w-6xl ">
            <div className="flex flex-col justify-center h-full align-middle">
              <Image
                unoptimized
                src="https://www.petsmart.ca/on/demandware.static/Sites-PetSmart_CA-Site/-/default/dw0e91e254/images/petsmart-logo.png"
                height={40}
                width={160}
                alt=""
              />
            </div>
            <div>
              <div className="relative h-full py-4 rounded-sm shadow-sm">
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  className="block w-[496px] placeholder-[#007db1] h-full pr-10 border-[#007db1]  rounded-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <MagnifyingGlassIcon
                    className="w-5 h-5 text-[#007db1]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col justify-center">
                <Image
                  className="w-[45px] h-[30px]"
                  alt={""}
                  unoptimized
                  width={45}
                  height={30}
                  src={
                    "https://www.petsmart.ca/on/demandware.static/Sites-PetSmart_CA-Site/-/default/dwa57de4c1/images/loyalty-icon.png"
                  }
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row gap-2 font-bold">
                  <p className="text-lg font-bold">sign-in</p>
                  <div className="flex flex-col justify-center">
                    <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-sm">Treats & Account</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-center">
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-row  justify-center min-h-[54px] px-10 gap-14  text-xl text-white font-normal bg-[#007db1]">
          <div className="flex flex-col justify-center cursor-pointer">
            shop by brand
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            shop by pet
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            pet services
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            sale
          </div>
          <div className="flex flex-col justify-center -mr-4 cursor-pointer">
            featured
          </div>
          <div className="flex flex-col justify-center cursor-pointer">|</div>
          <div className="flex flex-col justify-center -ml-4 cursor-pointer">
            help
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            my store
          </div>
        </div>
        <AnalyticsWrapper />
        <div>{children}</div>
        <footer className="py-20 bg-[#f4f5f8] px-32  text-black">
          <img
            src="https://www.petsmart.ca/on/demandware.static/Sites-PetSmart_CA-Site/-/default/dw0e91e254/images/petsmart-logo.png"
            width="164"
            height="37"
            alt="intuit"
            loading="lazy"
          />
          <p className="pb-4 border-b pt-11 border-b-gray-600">
            Need help? Call us at 855.559.1455
          </p>
          <div className="flex flex-row justify-start gap-3 mt-8 text-sm font-light">
            {footerItems.map((x: any, i: any) => {
              if (i % 2 === 1) return <p className="text-gray-500">{x}</p>;
              return <p className="text-black cursor-pointer">{x}</p>;
            })}
          </div>
        </footer>
      </body>
    </html>
  );
}
