import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  return (
    <div className="min-h-screen text-black">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}