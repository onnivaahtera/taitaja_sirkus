import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

const Form: FC = () => {
  const { slug } = useParams();

  useEffect(() => {
    fetch("http://localhost/sirkus/php/api/read.php");
  });

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Form;
