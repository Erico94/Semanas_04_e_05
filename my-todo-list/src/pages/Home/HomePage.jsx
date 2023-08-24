import React from "react";
import { CardComponent } from "../../components/card/CardComponent";

const todos = [
  {
    id: 1,
    title: "Tarefa 1",
    description: "Lorem ipsum dolor sit",
    status: false,
  },
  {
    id: 2,
    title: "Tarefa 2",
    description: "Lorem ipsum dolor sit",
    status: true,
  },
];

export const HomePage = () => {
  
  return (
    <div className="homeContainer">
      HomePage
      <div className="cardsContainer">
        {todos.map(toDo => 
          <CardComponent todo={toDo} key={toDo.id} />
        )}
      </div>
    </div>
  );
};
