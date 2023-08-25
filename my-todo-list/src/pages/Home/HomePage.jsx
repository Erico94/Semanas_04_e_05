import React, { useContext, useEffect } from "react";
import { CardComponent } from "../../components/card/CardComponent";
import * as Styled from "./HomePage.style";
import { ApiService } from "../../services/ApiService"
import { TodosContext } from "../../contexts/TodosContext";

export const HomePage = () => {
  const {todos, setTodos} = useContext(TodosContext); 
  const service = new ApiService('tasks');

  const getTasks = async () =>{
    await service.Read().then((response)=>{
      setTodos(response);
    })
  }

  useEffect ( () =>{
    getTasks();
  },[])

  return (
    <Styled.HomeContainer>
      <Styled.CardsContainer>
        {todos.map((toDo) => (
          <CardComponent todo={toDo} key={toDo.id} />
        ))}
      </Styled.CardsContainer>
    </Styled.HomeContainer>
  );
};
