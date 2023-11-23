import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout (){
    return (
        <div className="flex justify-between">
          <Header />
          <Outlet />
        </div>
    );
}