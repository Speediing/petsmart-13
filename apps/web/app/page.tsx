import Image from "next/image";
import { Button } from "ui";
import ButtonArray from "./ButtonArray";
import InfoHeader from "./InfoHeader";
import left from "./leftimg.png";
import right from "./rightimg.png";
import { Karla } from "@next/font/google";
export const runtime = "experimental-edge";
export const revalidate = 0;
const roboto = Karla({
  weight: ["400", "500", "700", "600", "800"],
  subsets: ["latin"],
  variable: "--font-Karla",
});
export default function Page() {
  return (
    <div className={`w-full max-[1240px] ${roboto.className}`}>
      {/* @ts-expect-error Server Component */}
      <InfoHeader />
      <div className="flex flex-row justify-center ">
        <div className="relative h-full  max-h-[400px] w-full max-w-[1240px]">
          <Image
            alt=""
            src="https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_slider_1240x400_DT"
            layout={"fill"}
            className="max-w-[1240px]"
          />
          <div className="relative flex flex-row justify-center h-[400px] text-white w-full h-full text-center  ">
            <div className="flex flex-col justify-center max-w-[400px]">
              <h2 className={`pb-2  leading-tight text-[40px]  font-black `}>
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
      <div className="flex flex-row justify-center text-black">
        <div className="flex flex-col my-4 w-full max-w-[1240px]">
          <div className="flex flex-row justify-between w-full gap-4">
            <div>
              <Image
                width={688}
                height={440}
                className={"rounded-md"}
                alt=""
                src={
                  "https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_card1_1208x515_DT"
                }
              />
              <p
                className={`pb-2 leading-tight align-middle text-center mt-1 text-[17px]  `}
              >
                Shop all Dog Dental Care
              </p>
            </div>

            <div>
              <Image
                width={688}
                height={440}
                className={"rounded-md"}
                alt=""
                src={
                  "https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_card2_1208x515_DT"
                }
              />
              <p
                className={`pb-2  leading-tight align-middle text-center mt-1  text-[17px]`}
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
