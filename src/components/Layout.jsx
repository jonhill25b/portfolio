import { Outlet } from "react-router-dom"; // <-- Add this import
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-800 to-zinc-950 bg-fixed">
      <div className="bg-grid-white/[0.02] bg-fixed flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Outlet /> 
        </main>
        
        <Footer />
      </div>
    </div>
  );
}