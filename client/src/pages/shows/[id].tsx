import React from "react";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderForm from "../../components/order";

function useQuery() {
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
    <div>
      <div>
        {show.map((value, key) => (
          <div key={key} className="text-green-700">
            <div>{value.theme}</div>
            <div>{value.area}</div>
            <div>{value.city}</div>
            <div>{value.date}</div>
            <div>{value.freeSeats}</div>
          </div>
        ))}
      </div>
      <OrderForm />
    </div>
  );
};

export default Form;
