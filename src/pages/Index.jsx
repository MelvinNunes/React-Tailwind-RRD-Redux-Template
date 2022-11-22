import { Footer } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
