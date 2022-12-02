import axios from "axios";
import { FC, FormEvent, ChangeEvent, useState } from "react";
import { useQuery } from "../pages/shows/[id]";

const OrderForm: FC = () => {
  const [order, setOrder] = useState({ email: "", phone: "", tickets: "" });
  const [message, setMessage] = useState<any>();

  let query = useQuery();

  // Send order to php endpoint
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://localhost/sirkus/php/api/get.php/?id=${query.get("id")}`,
      data: {
        order,
      },
    });
  };
  const getMessage = () => {
    axios
      .get(`http://localhost/sirkus/php/api/get.php/?id=${query.get("id")}`)
      .then((response) => setMessage(response));
  };
  // Sets order state from inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setOrder((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="mx-auto w-4/5 rounded-md md:w-96">
      <form id="registerFrom" method="POST" onSubmit={submitForm}>
        <div className="">
          <div className="px-4 pt-1">
            <label
              className="block w-fit p-2 hover:cursor-text"
              htmlFor="email"
            >
              Sähköposti:
            </label>
            <input
              className="block w-full rounded border-2 border-gray-800 bg-inherit p-2 text-sm hover:border-cyan-500"
              type="email"
              name="email"
              value={order.email}
              onChange={handleChange}
            />
          </div>
          <div className="px-4 pt-1">
            <label
              className="block w-fit p-2 hover:cursor-text"
              htmlFor="email"
            >
              Puhelinnumero:
            </label>
            <input
              className="block w-full rounded border-2 border-gray-800 bg-inherit p-2 text-sm hover:border-cyan-500"
              type="text"
              name="phone"
              value={order.phone}
              onChange={handleChange}
            />
          </div>
          <div className="px-4 pt-1">
            <label
              className="block w-fit p-2 hover:cursor-text"
              htmlFor="tickets"
            >
              Lippujen määrä:
            </label>
            <input
              className="block w-full rounded border-2 border-gray-800 bg-inherit p-2 text-sm hover:border-cyan-500"
              type="text"
              name="tickets"
              value={order.tickets}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="m-4 h-10 w-40 rounded-lg border-2 border-gray-800 bg-inherit hover:border-cyan-500"
            >
              Osta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
