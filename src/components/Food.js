import React from 'react';
import Input from './Input';

export default function Food({type,name,items}){
    return(
    <section className="food">
        <div className="food-header-grid">
            <h2 className="food-heading">{name} {items.english_translate}</h2>
            <h4 className="food-heading discount">{items.discount}</h4>  
        </div>
      
      {items.menu.map((item, index) => (
          /*
        <article className="menu-item" key={index}>
          <div className="food-name">{item.name}</div>
          <div className="food-name-english">{item.english_translate}</div>
          <Input type={type} name={item.name} index={index} />
          <strong className="food-price">${item.price}</strong>
        </article>
        */
       <div className="food-grid" key={index}>
            <div className="food-name">{item.name}</div>
            <div className="food-name-english">{item.english_translate}</div>
            <Input type={type} name={item.name} index={index} />
            <strong className="food-price">${item.price}</strong>
            <div className="food-description">{item.description}</div>
       </div>
      ))}
    </section>
    );
}