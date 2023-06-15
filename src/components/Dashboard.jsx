import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-[85vw] h-[p0vh] my-10 rounded-xl flex justify-center items-center overflow-hidden">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Dashboard;
