import React, { useEffect, useState } from "react";

function Shows() {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    fetch("http://localhost/taitaja_sirkus/php/api/read.php")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return <div>Shows</div>;
}

export default Shows;
