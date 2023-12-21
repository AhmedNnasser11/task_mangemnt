/** @format */

import { Outlet } from "react-router-dom";
import Footer from "../footer";
import SideBar from "../sideBar";
import Header from "../header";
import { Suspense } from "react";
import Spinner from "@/components/ui/Spinner";

const MainLayout = () => {
  return (
    <>
      <div className="w-full">
        <SideBar />
        <Header />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
