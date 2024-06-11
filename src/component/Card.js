import { contentLarge, contentSmall } from "../constants/constants";
import { IoLogoFacebook } from "react-icons/io";

const renderedCardLarge = contentLarge.map((content) => {
  return (
    <div className="flex gap-x-7">
      <div
        className={`flex flex-col max-h-54 w-64 px-16 pt-8 pb-6 bg-slate-100 rounded items-center ${content.border} border-t-4 dark:bg-blue-950/30 cursor-pointer hover:dark:bg-blue-900/50 hover:bg-slate-200`}
      >
        <div className="flex items-center mb-7">
          {content.icon}
          <p className="text-gray-500 text-xs">{content.user}</p>
        </div>
        <div className="flex flex-col items-center mb-6">
          <p className="font-extrabold text-5xl">{content.followers}</p>
          <p className="tracking-widest text-gray-500">FOLLOWERS</p>
        </div>
        <div className="flex items-center">
          {content.status}
          <p className={`${content.arrow}`}>{content.number}</p>
        </div>
      </div>
    </div>
  );
});

function CardLarge() {
  return <div className="flex gap-x-7">{renderedCardLarge}</div>;
}

function CardSmall() {
  return (
    <div>
      <div className="flex rounded dark:bg-blue-950/30 bg-slate-100 cursor-pointer hover:dark:bg-blue-900/50 hover:bg-slate-200 w-64">
        <div className="grid grid-cols-2 p-6 gap-10">
          <div className="text-gray-500 text-xs">Page Reviews</div>
          <IoLogoFacebook className="size-6 text-blue-500" />
          <div classNem="font-extrabold text-2xl">text</div>
          <div className="text-right">text</div>
        </div>
      </div>
    </div>
  );
}

export { CardLarge, CardSmall };
