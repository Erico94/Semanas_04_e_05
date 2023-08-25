import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { HeaderComponent } from "../components/header/HeaderComponent";
import ButtonComponent from "../components/button/ButtonComponent";
import * as Styled from './Layout.style'


export const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () =>{
    const route = location.pathname.includes('/todo') ? '/' : '/todo';
    navigate(route)
  }


  return (
    <Styled.Layout>
      <HeaderComponent/>

      <Styled.Main>
        <Styled.ActionsContainer>
          <ButtonComponent onClick={handleClick}>
            {location.pathname.includes('/todo') ? 'Ver tarefas' : 'Nova tarefa'}
            </ButtonComponent>
        </Styled.ActionsContainer>
        <Styled.MainContainer>
          <Outlet />
        </Styled.MainContainer>
      </Styled.Main>
    </Styled.Layout>
  );
};
