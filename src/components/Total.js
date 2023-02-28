import React, { useContext } from "react";
import { Context } from "../Context";
import data from "../data";

export default function Total() {
    const [items] = useContext(Context);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    
    const totalPrice = Object.keys(items).reduce((acc, curr) => {
        const [group, item] = curr.split("-");
        const amount = items[curr] * data[group].menu[item].price;
        if(day==="Tuesday" && group==="miso"){
            return acc+(amount*0.8);
        }
        else if(day==="Wednesday" && group==="pork"){
            return acc+(amount*0.8);
        }
        else if(day==="Thursday" && group==="soysauce"){
            return acc+(amount*0.8);
        }
        else if(day==="Friday" && group==="spicy"){
            return acc+(amount*0.8);
        }
        return acc+amount;
    }, 0);

  return (
    <div className="total">
      <span className="total-title">合計:</span>
      <span className="total-price">${totalPrice}</span>
    </div>
  );
}