import React from "react";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderForm from "../../components/order";

export function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Form: FC = () => {
  const [show, setShow] = useState<any[]>([]);
  let query = useQuery();

  useEffect(() => {
    fetch(`http://localhost/sirkus/php/api/readone.php/?id=${query.get("id")}`)
      .then((res) => res.json())
      .then((data) => setShow(data.body));
  }, []);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen">
      <div>
        {show.map((value, key) => (
          <div key={key} className="text-green-500">
            <div>Esityksen teema: {value.theme}</div>
            <div>Esityspaikka: {value.area}</div>
            <div>Kaupunki: {value.city}</div>
            <div>Päivämäärä: {value.date}</div>
            <div>Paikkoja vapaana: {value.freeSeats}</div>
          </div>
        ))}
      </div>
      <OrderForm />
    </div>
  );
};

export default Form;
