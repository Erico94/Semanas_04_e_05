import React, { useContext, useEffect } from "react";
import ButtonComponent from "../button/ButtonComponent";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { TodosContext } from "../../contexts/TodosContext";
import { ApiService } from "../../services/ApiService";
import { useNavigate } from "react-router-dom";
import * as Styled from './FormComponent.style';

export const FormComponent = ({ todo }) => {
  const apiService = new ApiService("tasks");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    todo
      ? await apiService
          .Update(data, todo.id)
          .then((response) => alert(`${response.title} atualizado com sucesso`))
      : await apiService.Create(data).then((response) => {
          alert(`${response.title} criada com sucesso.`);
        });
        navigate('/');
  };

  useEffect(() => {
    if (todo) {
      setValue("title", todo.title);
      setValue("description", todo.description);
    }
  }, [todo]);

  return (
    <Styled.FormTodo onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormTitle>
        {!todo ? "Criar nova tarefa" : `Editar tarefa ${todo.title}`}
      </Styled.FormTitle>

      <Styled.InputsContainer>
        <Styled.InputGroup>
          <Styled.Label htmlFor="title">Título</Styled.Label>
          <Styled.Input
            type="text"
            id="title"
            {...register("title", {
              required: "*Este campo é obrigatório.",
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </Styled.InputGroup>

        <Styled.InputGroup>
          <Styled.Label htmlFor="description">Descrição</Styled.Label>
          <Styled.TextArea
            id="description"
            cols="30"
            rows="10"
            {...register("description", {
              required: "* Este campo é obrigatório.",
              maxLength: {
                value: 50,
                message: "Esse campo deve possuir no máximo 50 caracteres.",
              },
            })}
          ></Styled.TextArea>
          <Styled.CounterContainer>
            {watch("description")?.length || 0} de 50 caracteres.
          </Styled.CounterContainer>

          {errors.description && <p>{errors.description.message}</p>}
        </Styled.InputGroup>
      </Styled.InputsContainer>

      <ButtonComponent type="submit">Salvar</ButtonComponent>
    </Styled.FormTodo>
  );
};

FormComponent.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.bool,
  }),
};
