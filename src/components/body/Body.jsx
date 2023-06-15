import { AiOutlineSearch, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import PrimaryButton from "../buttons/PrimaryButton";

const Body = () => {
  return (
    <div className="w-full bg-bodyBg h-[100%] basis-80 p-8">
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
        {/* title */}
        <div className="title">
          <h1 className="text-[35px] text-titleColor tracking-[1px] font-black">
            {" "}
            Find the Best place
          </h1>
          <span className="text-[16px] opacity-70">
            <strong>249 Restaurants,</strong> choose yours
          </span>
        </div>
        {/* stats */}
        <div className="flex items-center justify-between">
          {/* Specials */}
          <div className="px-2 text-center border-r-2">
            <h3 className="text-[20px] font-bold text-titleColor">93</h3>
            <small className="text-[16px] opacity-70">Specials</small>
          </div>
          {/* Deliveries */}
          <div className="px-2 text-center">
            <h3 className="text-[20px] font-bold text-titleColor">93</h3>
            <small className="text-[16px] opacity-70">Deliveries</small>
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="w-full flex items-center gap-10 mt-8 overflow-scroll">
        {/* italian */}
        <div className="grid items-center justify-between text-center">
          <div className="w-[40px] h-[40px] m-auto p-1 flex items-center justify-center bg-[#f4f5f4] rounded-full">
            <img
              className="w-[70%] flex items-center m-auto object-cover"
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pizza"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-[50] pt-2 text-center">
            Italian
          </span>
        </div>
        {/* asian */}
        <div className="grid items-center justify-between text-center">
          <div className="w-[40px] h-[40px] m-auto p-1 flex items-center justify-center bg-[#f4f5f4] rounded-full">
            <img
              className="w-[70%] flex items-center m-auto object-cover"
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pizza"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-[50] pt-2 text-center">
            Asian
          </span>
        </div>
        {/* the rest */}
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="grid items-center justify-between text-center"
          >
            <div className="w-[40px] h-[40px] m-auto p-1 flex items-center justify-center bg-[#f4f5f4] rounded-full">
              <img
                className="w-[70%] flex items-center m-auto object-cover"
                src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pizza"
              />
            </div>
            <span className="uppercase text-[12px] font-medium opacity-[50] pt-2 text-center">
              Italian
            </span>
          </div>
        ))}
        {/* more */}
        <div className="grid items-center justify-between text-center cursor-pointer ">
          <div className="w-[40px] h-[40px] m-auto p-1 flex items-center justify-center bg-[#f4f5f4] rounded-full hover:bg-sideMenuBg hover:text-white">
            <BsPlus />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-[50] pt-2 text-center">
            More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Body;
