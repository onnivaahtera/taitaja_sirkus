import { FC } from "react";
import Moblie from "./mobile";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="bg-header h-auto flex">
          <div className="p-5">
            <a href="/">Etusivu</a>
          </div>
          <div className="p-5">
            <a href="/about">Sirkunnan toimintaa</a>
          </div>
        </div>
      </div>

      <Moblie />
    </>
  );
};
export default Header;
