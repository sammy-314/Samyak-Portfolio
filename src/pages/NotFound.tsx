
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#121212] text-white p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">404</h1>
        <p className="text-xl text-white/70 mb-8">Oops! This page does not exist</p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-neon-purple to-neon-teal text-black font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Home size={18} />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
