import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            className={`h-10 text-bold cursor-pointer p-0 my-0 ${
              pathMatchRoute("/") && "text-black border-b-red-500"
            }`}
            src="https://thumbs.dreamstime.com/z/real-estate-logo-design-simple-172869139.jpg width=300 height=300"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-10 ">
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/buy") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/buy")}
            >
              Buy
            </li>
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sell") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sell")}
            >
              Sell
            </li>
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/rent") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/rent")}
            >
              Rent
            </li>
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/mortgage") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/mortgage")}
            >
              Mortgage
            </li>
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/myHome") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/myHome")}
            >
              My Home
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
