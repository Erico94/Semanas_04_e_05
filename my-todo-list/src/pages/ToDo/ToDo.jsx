import React, { useEffect, useState } from 'react'
import { FormComponent } from '../../components/form/FormComponent'
import { useParams } from 'react-router-dom'
import { MockUtils } from '../../utils/mock';


export const ToDo = () => {
  const {id} = useParams();
  const [todo, setTodo] = useState();

  useEffect ( () =>{
      if (id){
        setTodo(MockUtils.todos.find(item=>item.id === Number(id)));
      }
  },[])

  return (
    <div className='TodoFormContainer'>
      <FormComponent todo={todo}/>
    </div>
  )
}
