import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    
      <div className="flex flex-col items-center gap-3">
        <ShoppingCart />
        <Link to="/login">
        <Button variant={"neon"} className="flex items-center gap-2 px-6 py-4">
          <span>Go basket</span>
        </Button>
        </Link>

      </div>
    </div>
  );
};

export default Landing;
