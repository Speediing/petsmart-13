import Image from "next/image";
import { Button } from "ui";
import ButtonArray from "./ButtonArray";
import InfoHeader from "./InfoHeader";
import left from "./leftimg.png";
import right from "./rightimg.png";

export const runtime = "experimental-edge";
export const revalidate = 0;

export default function Page() {
  return (
    <div className="max-[1240px]">
      {/* @ts-expect-error Server Component */}
      <InfoHeader />
      <div className="flex flex-row justify-center ">
        <div className="relative h-full  max-h-[400px] w-full max-w-[1240px]">
          <Image
            unoptimized
            alt=""
            src="https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_slider_1240x400_DT"
            layout={"fill"}
            className="max-w-[1240px]"
          />
          <div className="relative flex flex-row justify-center h-[400px] text-white w-full h-full text-center  ">
            <div className="flex flex-col justify-center max-w-[400px]">
              <h2 className={`pb-2  leading-tight text-[40px]  font-bold `}>
                It’s Dental Wellness Month!
              </h2>
              <h3 className="text-base font-normal">
                Shop our monthlong dental offers
              </h3>
              {/* @ts-expect-error Server Component */}
              <ButtonArray />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-12">
        <h2
          className={`pb-2 leading-tight align-middle text-center text-3xl  font-bold `}
        >
          Find Your Next Crockpot® Product
        </h2>
        <div className="flex flex-row justify-center mx-6">
          <div>
            <Image
              unoptimized
              width={688}
              height={440}
              alt=""
              src={
                "https://s7d9.scene7.com/is/image/NewellRubbermaid/09012022-CrockpotHomepage-02-Slow-01?fmt=jpeg"
              }
            />
            <p
              className={`pb-2 leading-tight align-middle text-center mt-12 ftext-2xl  font-bold `}
            >
              Slow Cookers
            </p>
            <p className="text-center">
              Simmer the flavor into your home-cooked food.
            </p>
            <div className="flex flex-row justify-center mt-6">
              <button className="w-[179px] bg-white h-[50px] rounded-md px-4 border-[#585a5c] text-[#585a5c] border">
                Go Now
              </button>
            </div>
          </div>

          <div>
            <Image
              unoptimized
              width={688}
              height={440}
              alt=""
              src={
                "https://s7d9.scene7.com/is/image/NewellRubbermaid/09012022-CrockpotHomepage-02-LunchCrock-01?fmt=jpeg"
              }
            />
            <p
              className={`pb-2  leading-tight align-middle text-center mt-12  text-2xl  font-bold `}
            >
              Lunch Crock®
            </p>
            <p className="text-center">
              The portable food warmer that makes any spot a lunch spot.
            </p>
            <div className="flex flex-row justify-center mt-6">
              <button className="w-[179px] bg-white h-[50px] rounded-md px-4 border-[#585a5c] text-[#585a5c] border">
                Go Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
