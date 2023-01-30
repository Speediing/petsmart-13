import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";

async function ButtonArray() {
  // initialize returns a promise which always resolves
  const headersList = headers();
  const ip = headersList.get("x-real-ip");
  const country = headersList.get("x-vercel-ip-country") || "CA";

  const buttonArrayReversed = await get("buttonArrayReversed");

  return (
    <div className="flex flex-row justify-center gap-4 mt-2">
      {buttonArrayReversed[country] && (
        <button className="bg-white h-[40px] w-[130px] rounded-md text-[#206ef6] px-4">
          Shop Now
        </button>
      )}
      <button className="bg-white h-[40px]  w-[130px] rounded-md text-[#206ef6] px-4">
        Get Brushing
      </button>
      {!buttonArrayReversed[country] && (
        <button className="bg-white h-[40px]  w-[130px] rounded-md text-[#206ef6] px-4">
          Shop Now
        </button>
      )}
    </div>
  );
}

export default ButtonArray;
