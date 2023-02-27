import './App.css';
import React from "react";
import Logo from "./components/Logo";
import Food from "./components/Food";
import Total from "./components/Total";
import { Provider } from "./Context";
import FoodData from "./data";

function App() {
  return (
    <Provider>
    <div className="menu">
      
      
      <aside className="aside">
      <h1 className="title">驪屋日式拉麵菜單</h1>
        <Food type="pork" name="豚骨" items={FoodData.pork} />
        <Food type="miso" name="味噌" items={FoodData.miso} />
        <Food type="soysauce" name="醬油" items={FoodData.soysauce} />
        <Food type="spicy" name="地獄谷" items={FoodData.spicy} />
        <Food type="curry" name="咖哩" items={FoodData.curry} />
        <Food type="donburi" name="蓋飯" items={FoodData.donburi} />
        <Food type="sides" name="單點" items={FoodData.sides} />
      </aside>
      <Total />
    </div>
  </Provider>
  );
}

export default App;
