import React from "react";
import ButtonComponent from "../button/ButtonComponent";
import { MdEdit, MdDelete, MdAutorenew } from "react-icons/md";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const CardComponent = ({ todo }) => {
  const { id, title, description } = todo;
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/todo/${id}`);
  };
  const handleDelete = () => {

  };
  const handleStatus = () => {

  };




  return (
    <div className="cardContainer">
      <h3 className="title"> Titulo da tarefa</h3>
      <p className="Description">Descrição</p>

      <div className="ActionsContainer">
        <ButtonComponent onClick={handleEdit}>
          <MdEdit />
        </ButtonComponent>
        <ButtonComponent onClick={handleDelete}>
          <MdDelete />
        </ButtonComponent>
        <ButtonComponent onClick={handleStatus}>
          <MdAutorenew />
        </ButtonComponent>
      </div>
    </div>
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
