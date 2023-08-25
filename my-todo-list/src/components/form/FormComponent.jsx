import React, { useEffect } from "react";
import ButtonComponent from "../button/ButtonComponent";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export const FormComponent = ({ todo }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (todo) {
      setValue("title", todo.title);
      setValue("description", todo.description);
    }
  }, [todo]);

  return (
    <form className="FormTodo" onSubmit={handleSubmit(onSubmit)}>
      <legend className="FormTitle">
        {!todo ? "Criar nova tarefa" : `Editar tarefa ${todo.title}`}
      </legend>

      <div className="InputContainer">
        <div className="InputGroup">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "*Este campo é obrigatório.",
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className="InputGroup">
          <label htmlFor="description">Descrição</label>
          <textarea
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
          ></textarea>
          <div className="CounterContainer">
            {watch('description')?.length || 0} de 50 caracteres.
          </div>

          {errors.description && <p>{errors.title.message}</p>}
        </div>
      </div>

      <ButtonComponent type="submit">Salvar</ButtonComponent>
    </form>
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
