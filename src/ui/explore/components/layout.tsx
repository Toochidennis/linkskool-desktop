// import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Always Fixed on the Left */}
      <aside className="w-64 bg-gray-900 text-white h-full fixed left-0 top-0 p-4">
       <Sidebar />
      </aside>

      {/* Content Area - Moves Right */}
      <main className="ml-64 p-6 flex-1">
        {children}
      </main>
    </div>
  );
}