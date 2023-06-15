import { AiOutlineSearch, AiOutlineAppstoreAdd } from "react-icons/ai";
import PrimaryButton from "../buttons/PrimaryButton";

const Body = () => {
  return (
    <div className="bg-bodyBg h-[100%] basis-80 p-8">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center border-b-2 pb-2 basis-1/2 gap-2">
          <AiOutlineSearch className="text-hoverColor text-[20px] cursor-pointer" />
          <input
            type="text"
            className="border-none w-full outline-none placeholder:text-sm focus:outline-none"
            placeholder="Search your favourite"
          />
        </div>

        <div className="flex gap-4 items-center">
          <AiOutlineAppstoreAdd className="text-hoverColor cursor-pointer text-[25px] hover:text-[20px] transition-all" />
          <PrimaryButton text="Go Premium" />
        </div>
      </div>
      {/* Title Div */}
      <div className="flex items-center justify-between mt-8">
        <div className="title">
          <h1 className="text-[35px] text-titleColor tracking-[1px] font-black">
            {" "}
            Find the Best place
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Body;
