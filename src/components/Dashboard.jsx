import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-[85vw] h-[90vh] my-8 m-auto rounded-xl flex justify-center items-center overflow-scroll">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Dashboard;
