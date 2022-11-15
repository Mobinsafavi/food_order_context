import React , { useContext} from "react";
import MealsCounter from "./MealsCounter";
import CartContext from "../../store/cart-context";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext)
 
  const amountHandler = (amount) => {
    cartCtx.addItem({id : props.Id, name : props.Name , amount : amount , price : props.Price})
    if (amount === '') {
      cartCtx.removeItem(props.Id)
    }
  };

  return (
    <React.Fragment>
      <div className="col-12 d-flex my-3">
        <div className="col-8 d-flex flex-column">
          <h5 className="font-3 fw-bold">{props.Name}</h5>
          <p className="font-1 text-secondary">{props.Description}</p>
          <span className="font-3 mt-auto">{props.Price}</span>
        </div>
        <div className="col-4">
          <img className="img-fluid rounded " src={props.Src} alt="" />
          <MealsCounter onItemAmount={amountHandler}/>
        </div>
      </div>
      <hr></hr>
    </React.Fragment> 
  );
};

export default MealsItem;
