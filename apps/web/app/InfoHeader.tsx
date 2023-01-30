import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";

async function InfoHeader() {
  // initialize returns a promise which always resolves
  const headersList = headers();
  const ip = headersList.get("x-real-ip");
  console.log(headersList.get("x-vercel-ip-country"));

  const shouldShowHeader = await get("shouldShowBanner");
  if (!shouldShowHeader) return <div className="h-4"></div>;
  return (
    <div className="flex flex-col justify-center h-[48px] text-xl text-[#c8102e] bg-white px-11">
      <p className="font-semibold text-center">
        IN-STORE & CURBSIDE PICKUP: shop online & pick up in store for free!
        Shop now
      </p>
    </div>
  );
}

export default InfoHeader;
