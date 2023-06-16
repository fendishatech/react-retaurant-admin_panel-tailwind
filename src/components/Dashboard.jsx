import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-full h-full m-auto flex justify-center items-center overflow-hidden">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Dashboard;
