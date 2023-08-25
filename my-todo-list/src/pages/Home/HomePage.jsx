import React from "react";
import { CardComponent } from "../../components/card/CardComponent";
import { MockUtils } from "../../utils/mock";
import * as Styled  from  './HomePage.style'



export const HomePage = () => {
  
  return (
    <Styled.HomeContainer>
      <Styled.CardsContainer>
        {MockUtils.todos.map(toDo => 
          <CardComponent todo={toDo} key={toDo.id} />
        )}
      </Styled.CardsContainer>
    </Styled.HomeContainer>
  );
};
