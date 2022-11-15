import React, { useReducer } from "react";

const initialAmount = { amount: 0 };

const amountreducer = (state, action) => {
  if (action.type === "reset") {
    return { amount: action.value };
  }

  if (action.type === "add") {
    const newAmount = state.amount + action.value;
    return { amount: newAmount };
  }

  if (action.type === "reduce") {
    const newAmount = state.amount - action.value;
    return { amount: newAmount };
  }
  return initialAmount;
};

const MealsCounter = (props) => {
  const [amountState, dispatchAmount] = useReducer(
    amountreducer,
    initialAmount
  );

  const addAmountHandler = () => {
    dispatchAmount({ type: "add", value: 1 });
  };

  const reduceAmountHandler = () => {
    dispatchAmount({ type: "reduce", value: 1 });
  };

  const amountSubmitHandler = (event) => {
    event.preventDefault();
    if (amountState.amount > 0) {
      const itemAmount = amountState.amount;
      props.onItemAmount(itemAmount);
      dispatchAmount({ type: "reset", value: 1 });
    }
    return;
  };

  return (
    <React.Fragment>
      <form onSubmit={amountSubmitHandler}>
        <button
          className={`col-12 btn btn-outline-primary btn-sm mt-2`}
          type="submit"
        >
          افزودن
        </button>
      </form>
        <div
          className={`col-12 d-flex justify-content-evenly mt-2`}
        >
          <button
            className="col-3 btn btn-primary btn-sm p-0"
            onClick={addAmountHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
          <div className="col-3 border border-secondary rounded text-center">
            {amountState.amount}
          </div>
          <button
            className="col-3 btn btn-primary btn-sm p-0"
            onClick={reduceAmountHandler}
          >
            {amountState.amount === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            )}
          </button>
        </div>
    </React.Fragment>
  );
};

export default MealsCounter;
