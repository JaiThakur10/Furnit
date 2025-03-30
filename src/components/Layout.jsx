import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section (full width) - Place your hero content here */}
      <section className="w-full">
        {/* Your full-width hero content with video background */}
        {/* Example: */}
        <div className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/urban-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      </section>

      {/* Navbar (matches content width) */}
      <Header />

      {/* Main content area (matches navbar width) */}
      <main className="flex-1 w-[90%] max-w-6xl mx-auto">
        <div className="py-8">
          <Outlet /> {/* This renders your page content */}
        </div>
      </main>

      {/* Footer (matches navbar width) */}
      <footer className="w-[90%] max-w-6xl mx-auto py-6 border-t border-gray-200">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Urban. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
