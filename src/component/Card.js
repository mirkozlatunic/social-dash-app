import { IoLogoFacebook } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";

function CardLarge() {
  return (
    <div className=" flex flex-col max-h-54 max-w-64 px-16 pt-8 pb-6 bg-slate-100 rounded items-center">
      <div className="flex items-center mb-7">
        <IoLogoFacebook className="mr-2 size-6 text-blue-500" />
        <p className="text-gray-600 text-xs">@nathanf</p>
      </div>
      <div className="flex flex-col items-center mb-6">
        <p className="font-extrabold text-5xl">1987</p>
        <p>FOLLOWERS</p>
      </div>
      <div className="flex items-center">
        <TiArrowSortedUp />
        <p>12 Today</p>
      </div>
    </div>
  );
}

function CardSmall() {}

export { CardLarge, CardSmall };
