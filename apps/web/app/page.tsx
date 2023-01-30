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
    <div className="w-full max-[1240px]">
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
      <div className="flex flex-row justify-center ">
        <div className="flex flex-col my-4 w-full max-w-[1240px]">
          <div className="flex flex-row justify-between w-full gap-4">
            <div>
              <Image
                unoptimized
                width={688}
                height={440}
                className={"rounded-md"}
                alt=""
                src={
                  "https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_card1_1208x515_DT"
                }
              />
              <p
                className={`pb-2 leading-tight align-middle text-center mt-2  font-bold `}
              >
                Shop all Dog Dental Care
              </p>
            </div>

            <div>
              <Image
                unoptimized
                width={688}
                height={440}
                className={"rounded-md"}
                alt=""
                src={
                  "https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_card2_1208x515_DT"
                }
              />
              <p
                className={`pb-2  leading-tight align-middle text-center mt-2   font-bold `}
              >
                Shop all Cat Dental Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
