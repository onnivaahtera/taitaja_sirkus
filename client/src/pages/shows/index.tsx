import React, { useEffect, useState } from "react";

function Shows() {
  const [show, setShow] = useState<any[]>([]);

  // fetch shows from api endpoint
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
              onClick={() =>
                (window.location.href = `/shows/show?id=${item.id}`)
              }
              key={key}
              className="m-3 p-3 bg-header w-fit"
            >
              <p>Teema: {item.theme}</p>
              <p>Paikkoja: {item.seats}</p>
              <p>Vapaita paikkoja: {item.freeSeats}</p>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shows;
