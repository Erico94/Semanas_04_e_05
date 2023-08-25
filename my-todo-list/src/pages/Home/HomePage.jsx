import React, { useEffect, useState } from "react";
import { CardComponent } from "../../components/card/CardComponent";
import { MockUtils } from "../../utils/mock";
import * as Styled from "./HomePage.style";
import { ApiService } from "../../services/ApiService"

export const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const service = new ApiService('tasks');

  const getTasks = async () =>{
    await service.Read().then((response)=>{
      setTasks(response);
    })
  }

  useEffect ( () =>{
    getTasks();
  },[])

  return (
    <Styled.HomeContainer>
      <Styled.CardsContainer>
        {tasks.map((toDo) => (
          <CardComponent todo={toDo} key={toDo.id} />
        ))}
      </Styled.CardsContainer>
    </Styled.HomeContainer>
  );
};
