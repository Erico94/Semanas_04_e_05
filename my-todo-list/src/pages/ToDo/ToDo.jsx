import React, { useEffect, useState } from "react";
import { FormComponent } from "../../components/form/FormComponent";
import { useParams } from "react-router-dom";
import { MockUtils } from "../../utils/mock";
import { ApiService } from "../../services/ApiService";

export const ToDo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState();
  const taskService = new ApiService("tasks");

  const ObterTask = async () => {
    await taskService.ReadId(id).then((response) => {
      setTodo(response);
    });
  };

  useEffect(() => {
    if (id) {
      ObterTask();
    }
  }, []);

  return (
    <div className="TodoFormContainer">
      <FormComponent todo={todo} />
    </div>
  );
};
