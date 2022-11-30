import { FC, FormEvent, useState } from "react";

const OrderForm: FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticket, setTicket] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" method="post">
        <div className="flex m-2">
          <label htmlFor="email">Sähköposti: </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded text-black"
          />
        </div>
        <div className="flex m-2">
          <label htmlFor="phone">Puhelinnumero: </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="rounded text-black"
          />
        </div>
        <div className="flex m-2">
          <label htmlFor="ticket">Lippuja: </label>
          <input
            type="text"
            name="ticket"
            id="ticket"
            className="rounded text-black"
          />
        </div>
        <button
          type="submit"
          onClick={submit}
          className="bg-green-500 w-20 h-10 rounded text-black"
        >
          Osta
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
