import { FC, FormEvent } from "react";

const OrderForm: FC = () => {
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
        <button type="submit" onClick={submit}>
          Osta
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
