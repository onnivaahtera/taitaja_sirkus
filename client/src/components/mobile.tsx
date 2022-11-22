import React from "react";
import menu from "../img/menu_large.png";
import close from "../img/close.png";

function Moblie() {
  function Nav() {
    const btn = document.getElementById("nav") as HTMLButtonElement;
    if (btn.style.height === "100%") {
      btn.style.height = "0%";
    } else {
      btn.style.height = "100%";
    }
  }

  return (
    <>
      <div className="block md:hidden">
        <div className="absolute right-0 m-2 z-50">
          <button onClick={Nav}>
            <img src={menu} alt="" />
          </button>
        </div>

        <div
          id="nav"
          className="h-0 w-full fixed z-10 left-0 top-0 overflow-x-auto duration-300 bg-overlay"
        >
          <div className="relative text-2xl top-5 w-full text-center mt-8">
            <div className="p-2">
              <a href="/">Etusivu</a>
            </div>
            <div className="p-2">
              <a href="/about">Sirkunnan toimintaa</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moblie;
