import React from "react";
import { CardComponent } from "../../components/card/CardComponent";
import { MockUtils } from "../../utils/mock";



export const HomePage = () => {
  
  return (
    <div className="homeContainer">
      HomePage
      <div className="cardsContainer">
        {MockUtils.todos.map(toDo => 
          <CardComponent todo={toDo} key={toDo.id} />
        )}
      </div>
    </div>
  );
};
