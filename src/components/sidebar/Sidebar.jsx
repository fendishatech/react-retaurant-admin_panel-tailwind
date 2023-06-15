import { GiHamburger } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="p-4 bg-sideMenuBg relative h-[100%] basis-20 text-white">
      {/* Logo */}
      <div className="logo mt-4 gap-2 m-auto flex items-center justify-center">
        <GiHamburger className="text-[20px]" />
        <h1 className="text-[20px] items-center justify-center font-black">
          Foodie
        </h1>
      </div>
      {/* User div */}
      <div className="flex-col mt-[2rem] flex items-center justify-center text-white  admin">
        <img
          className="h-[80px] w-[80px] rounded-full object-cover border-[4px] border-red-200"
          src="https://images.pexels.com/photos/14634926/pexels-photo-14634926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span className="opacity-70 mt-2 text-gray-400">Welcome,</span>
        <h3 className="font-bold text-textColor">Anna Lindsay</h3>
      </div>
      {/* Menu */}
      <div className="m-auto grid justify-start mt-4">
        {[0, 1, 2, 3, 4].map((item) => (
          <li
            key={item}
            className="flex items-center pt-3 pb-3 pl-3 hover:opacity-100"
          >
            <a className="flex items-center gap-2" href="#">
              <AiFillHome />
              Home
            </a>
          </li>
        ))}
      </div>
      {/* map section */}
      <div className="mt-5 h-[14rem] w-full rounded-xl overflow-hidden">
        <img
          className="object-cover h-[100%]"
          src={
            "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Map Image"
        />
      </div>
    </div>
  );
};

export default Sidebar;
