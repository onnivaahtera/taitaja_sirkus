import React from "react";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
          <div key={key}>{value.freeSeats}</div>
        ))}
      </div>
    </div>
  );
};

export default Form;
