import React from "react";
import ButtonComponent from "../button/ButtonComponent";
import { MdEdit, MdDelete, MdAutorenew } from "react-icons/md";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as Styled from './CardComponent.style'
import { StyleUtils } from "../../utils/style";

export const CardComponent = ({ todo }) => {
  const { id, title, description, status } = todo;
  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/todo/${id}`);
  };
  const handleDelete = () => {

  };
  const handleStatus = () => {

  };


  return (
    <Styled.CardContainer $status={status}> 
      <Styled.Title> {title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>

      <Styled.Actions>
        <ButtonComponent onClick={handleEdit}>
          <MdEdit />
        </ButtonComponent>
        <ButtonComponent onClick={handleDelete}>
          <MdDelete />
        </ButtonComponent>
        <ButtonComponent onClick={handleStatus}>
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
