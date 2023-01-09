import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-50 px-4 py-2 text-[#F0ECCF] bg-[#3C6255] md:px-8 md:py-4 lg:px-12 lg:py-6">
      <div className="flex justify-between">
        <h2 className="font-bold cursor-pointer">Sparkosol Assessment</h2>
        <div>
          <nav
            onClick={() => navigate("/")}
            className="flex space-x-4 md:space-x-6 lg:space-x-8 cursor-pointer"
          >
            <p className="font-semibold">Enter New User</p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
