import { IoLogoFacebook } from "react-icons/io";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const contentLarge = [
  {
    border: "border-t-blue-500",
    icon: <IoLogoFacebook className="mr-2 size-6 text-blue-500" />,
    followers: "1987",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "12 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-sky-500",
    icon: <FaTwitter className="mr-2 size-6 text-sky-500" />,
    followers: "1044",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "99 Today",
    arrow: "text-green-500",
  },
  {
    border: "gradient-border",
    icon: (
      <FaInstagram className="mr-2 size-6 text-gradient-to-tr from-amber-200 via-ember-500 to-pink-500" />
    ),
    followers: "11k",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "1099 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-red-500",
    icon: <FaYoutube className="mr-2 size-6 text-red-500" />,
    followers: "8234",
    status: <TiArrowSortedDown className="mr-1 text-red-500" />,
    number: "144 Today",
    arrow: "text-red-500",
  },
];

const renderedCardLarge = contentLarge.map((content) => {
  return (
    <div className="flex gap-x-7">
      <div
        className={`flex flex-col max-h-54 max-w-64 px-16 pt-8 pb-6 bg-slate-100 rounded items-center ${content.border} border-t-4 dark:bg-blue-950/30`}
      >
        <div className="flex items-center mb-7">
          {content.icon}
          <p className="text-gray-500 text-xs">@nathanf</p>
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

function CardSmall() {}

export { CardLarge, CardSmall };
