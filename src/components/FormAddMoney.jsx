import { useState } from "react";

const FormAddMoney = ({setCount, setIsValid}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true);
    console.log(input);
  };

  return (
    <div>
      <div className="form-add-money">
        <form onSubmit={handleForm}>
          <p>Agregar Presupuesto</p>
          <input
            type="number"
            placeholder="$300"
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="agregar" />
        </form>
        {error ? <p className="error">Presupuesto invalido</p> : null}
      </div>
    </div>
  );
};

export default FormAddMoney;
