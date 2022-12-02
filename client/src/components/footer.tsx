import React from "react";

function Footer() {
  return (
    <div className="left-0 mt-20 w-full bottom-0">
      <div className="text-center bg-footer">
        <h2 className="text-2xl p-2">Yheystiedot</h2>
        <br />
        <div className="flex justify-center items-center">
          <div className="m-2 p-2">
            <span>Sirkuskoulu Sirikus</span>
            <br />
            <span>Kivenlahdentie 7</span>
            <br />
            <span>02320 Espoo</span>
            <br />
            <span>sirikus@sirikus.fi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
