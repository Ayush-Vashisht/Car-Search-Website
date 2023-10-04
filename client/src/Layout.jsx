import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <div className="min-h-screen flex flex-col p-4 bg-gray-300 gap-4">
        <Header />
        <Outlet />
      </div>
    );
}
