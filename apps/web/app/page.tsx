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
    <div>
      {/* @ts-expect-error Server Component */}
      <InfoHeader />

      <div className="relative">
        <Image
          unoptimized
          alt=""
          src="https://s7d9.scene7.com/is/content/NewellRubbermaid/2023_Crock-Pot_January_ContentCalendar_HPBanner1_Desktop_3840x1200?fmt=gif&amp;wid=2880"
          layout="fill"
          objectFit="cover"
        />
        <div className="relative flex flex-row justify-center text-black h-[500px] ">
          <div className="grid grid-cols-2  w-[1080px]">
            <div />
            <div className="flex flex-col justify-center">
              <h2 className={`pb-2  leading-tight text-5xl  font-bold `}>
                It’s National Slow Cooking Month!
              </h2>
              <h3 className="text-xl font-normal">
                Ease into the New Year with classic, comforting slow-cooked
                meals you and your family will love.
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
