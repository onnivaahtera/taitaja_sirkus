import React from "react";
import menu from "../img/menu_large.png";
import close from "../img/close.png";

function Moblie() {
  function openNav() {
    const btn = document.getElementById("nav") as HTMLButtonElement;
    btn.style.width = "100%";
  }

  function closeNav() {
    const btn = document.getElementById("nav") as HTMLButtonElement;
    btn.style.width = "0%";
  }

  return (
    <>
      <div className="block md:hidden">
        <div className="absolute right-0 m-2">
          <button onClick={openNav}>
            <img src={menu} alt="" />
          </button>
        </div>

        <div
          id="nav"
          className="h-full w-0 fixed z-10 left-0 top-0 overflow-x-auto transition-all bg-overlay"
        >
          <div className="absolute top-0 right-0">
            <button onClick={closeNav}>
              <img src={close} alt="" />
            </button>
          </div>

          <div className="relative top-5 w-full text-center mt-8">
            <div>
              <a href="/">Etusivu</a>
            </div>
            <div>
              <a href="/about">Sirkunnan toimintaa</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moblie;
