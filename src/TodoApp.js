import React, { useEffect, useReducer } from 'react';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { todoReducer } from './helpers/index';
import { TodoContext } from './components/TodoContext';
import { useForm } from './hooks/useForm';
import { TodoList } from './components/TodoList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// Retorna los datos de localStorage parseados en caso de que exista
const init = () => JSON.parse(localStorage.getItem('todo')) || [];

export const TodoApp = () => {

  const [state ,dispatch] = useReducer(todoReducer, [], init);
  const [{tarea}, setValue, reset] = useForm({
    tarea: ''
  });

  // Cada vez que se note un cambio en el state, se guarda en el localStorage
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(state))
  }, [state])
  
  return (
    <section className='container py-5 d-flex justify-content-center bg-grey'>
      <TodoContext.Provider value={{
        state,
        dispatch
      }} >
        
      <article className='card shadow-lg rounded App-card' >
        <Title
            title="Lista de tareas"
            mount={state.length}
        />
        <Form
          tarea={tarea}
          setValue={setValue}
          reset={reset}
        />
        
        <TodoList />    
      </article>

    </TodoContext.Provider>
    </section>
  )
};
