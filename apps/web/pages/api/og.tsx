import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};
const font = fetch(
  new URL("../../assets/Roboto-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const roboBold = fetch(
  new URL("../../assets/Roboto-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function OG() {
  const fontData = await font;
  const roboBoldData = await roboBold;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto",
          backgroundColor: "white",
        }}
      >
        <div tw="bg-white flex w-full h-full flex flex-col justify-center">
          <div tw="flex justify-center text-center flex-col w-full py-4 px-4 items-center justify-between p-8">
            <div tw="flex flex-row justify-between gap-24">
              <div tw="mt-22 flex">
                <svg
                  height={65}
                  viewBox="0 0 75 65"
                  fill="black"
                  style={{ margin: "0 0" }}
                >
                  <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
              </div>
              <div tw="flex flex-col justify-center h-full">
                <h2 tw="text-3xl font-thin mt-24 ml-12 mr-8">+</h2>
              </div>
              <img
                tw="w-[90px] h-[90px] mt-22"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2JyBdJOBxJHZlq18AQIx50X-Y9pqGYYZrQ&usqp=CAU"
              />
            </div>
            <h2 tw="text-3xl  font-thin">PetSmart</h2>
            <h2 style={{ fontFamily: "RobotoBold" }} tw=" text-6xl font-bold">
              It’s Dental Wellness Month!
            </h2>
            <h2 tw="text-3xl font-thin">Shop our monthlong dental offers</h2>
          </div>
          <div tw="flex flex-row justify-between  mb-[-150px]">
            <img
              tw="w-[100%] "
              src="https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_card1_1208x515_DT"
            />
            {/* <img
              tw="w-[50%] "
              src="https://s7d2.scene7.com/is/image/PetSmart/WEB-23-1658608-CA_February_WELLNESS_DENTAL_card2_1208x515_DT"
            /> */}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: fontData,
          style: "normal",
        },
        {
          name: "RobotoBold",
          data: roboBoldData,
          style: "normal",
        },
      ],
    }
  );
}
