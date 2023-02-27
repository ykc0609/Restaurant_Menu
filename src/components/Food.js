import React from 'react';
import Input from './Input';

export default function Food({type,name,items}){
    return(
    <section className="food">
      <h2 className="food-heading">{name}</h2>
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          <div className="food-name">{item.name}</div>
          <Input type={type} name={item.name} index={index} />
          <strong className="food-price">${item.price}</strong>
        </article>
      ))}
    </section>
    );
}