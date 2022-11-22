import React, { useEffect, useState } from "react";

function Shows() {
  const [show, setShow] = useState();

  useEffect(() => {
    fetch("http://localhost/taitaja_sirkus/php/api/read.php")
      .then((res) => res.json())
      .then((data) => setShow(data?.body));
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default Shows;
