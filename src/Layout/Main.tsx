import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footbar from "../components/Shared/Footbar/Footbar";

const Main = () => {
  return (
    <div className="lg:w-3/4 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footbar></Footbar>
    </div>
  );
};

export default Main;
