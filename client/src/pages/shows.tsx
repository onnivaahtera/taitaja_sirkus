import React, { useEffect, useState } from "react";

type show = {
  id: number;
  teema: string;
  esityspaikka: string;
  kaupunki: string;
  pvm: Date;
  paikata: number;
  vapaitapaikkoja: number;
};

function Shows() {
  const [show, setShow] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost/sirkus/php/api/read.php")
      .then((res) => res.json())
      .then((data) => setShow(data?.body));
  }, []);

  if (!show) return <div>No shows</div>;

  return (
    <div>
      <div>
        <ul>
          {show.map((item, key) => (
            <button
              disabled={item.freeSeats <= 0}
              onClick={() => (window.location.href = "/")}
              key={key}
              className="m-3 p-3 bg-header w-fit"
            >
              <li>Teema: {item.theme}</li>
              <li>Paikkoja{item.seats}</li>
              <li>Vapaita paikkoja: {item.freeSeats}</li>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shows;
