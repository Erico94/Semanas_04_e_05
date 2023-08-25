import React, { useContext } from "react";
import ButtonComponent from "../button/ButtonComponent";
import { MdEdit, MdDelete, MdAutorenew } from "react-icons/md";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as Styled from './CardComponent.style'
import { StyleUtils } from "../../utils/style";
import { ApiService } from "../../services/ApiService";
import { TodosContext } from "../../contexts/TodosContext";

export const CardComponent = ({ todo }) => {
  const { id, title, description, status } = todo;
  const navigate = useNavigate();
  const taskService = new ApiService('tasks');
  const {todos, setTodos} = useContext(TodosContext);

  const getTasks = async () =>{
    await taskService.Read().then((response)=>{
      setTodos(response);
    })
  }
  
  const handleEdit = () => {
    navigate(`/todo/${id}`);
  };

  const handleDelete = async () => {
    const confirma = confirm("Deseja mesmo excluir a tarefa?");
    if(confirma){
    await taskService.Delete(id).then((response)=>console.log(response));
    }
    getTasks();
  };

  const handleStatus = async () => {
    const confirma = confirm("Deseja atualizar o estado da tarefa?");
    if(confirma){
      const statusData = {
        status : !status
      }
      await taskService.Update(statusData, id).then((response)=>{
        console.log(`${response.title} atualizado.`)
      })
    }
    getTasks();
  };


  return (
    <Styled.CardContainer $status={status}> 
      <Styled.Title> {title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>

      <Styled.Actions>
        <ButtonComponent onClick={handleEdit} simetric={true} color={StyleUtils.Colors.primary} bg='#FFF'>
          <MdEdit />
        </ButtonComponent>
        <ButtonComponent onClick={handleDelete} simetric={true} color={StyleUtils.Colors.danger} bg='#FFF'>
          <MdDelete />
        </ButtonComponent>
        <ButtonComponent onClick={handleStatus} simetric={true} color={StyleUtils.Colors.success} bg='#FFF'>
          <MdAutorenew />
        </ButtonComponent>
      </Styled.Actions>
    </Styled.CardContainer>
  );
};

CardComponent.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.bool,
  }).isRequired,
};
