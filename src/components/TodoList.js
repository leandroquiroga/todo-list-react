import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { NoTask } from './NoTask';

import trashLogo from './../assets/trash_icon.svg'

export const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);

    // Edita el estado de la tarea
    const handleToggle = (todoID) => {
        dispatch({
            type: 'upDateState',
            payload: todoID
        });
    };


    // Elimina la tarea
    const handleDelete = (todoID) => {
        dispatch({
            type: 'deleteTodo',
            payload: todoID,
        });
    };


    // Este componente retorna una lista con un checkbox, 
    // una tarea creada y un boton que aparece en caso de 
    // que la tarea se completada
    return (
        <div className='App-TodoList p-2'>
            {
                // Si hay datos en el array los muesta, si no muesta el compononte NoTask
                (state.length === 0) ? 
                        
                    <NoTask />
                :   
                    <ul className='list-group'>
                        {(

                            state.map( (state, i) =>(
                                <li
                                    className='list-group-item my-2  d-flex align-items-center'
                                    key={state.id}
                                >   
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckDefault" 
                                            onClick={() => handleToggle(state.id)}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                        >   
                                        </label>
                                    </div>
                                    <div className='d-flex justify-content-between w-100 align-items-center'>
                                        <p className={`${state.done && 'App-todo--complete'} mx-2 my-2`}>
                                            {`${++i}. ${state.tarea}`}
                                        </p> 
                                        {
                                            state.done && 
                                                        <button
                                                            type='button'
                                                            onClick={() => handleDelete(state.id)}
                                                            className='App-button--delete'
                                                        > 
                                            
                                                            <img className='p-1' src={trashLogo} alt='trash' />
                                                        </button> 
                                        }
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
            }   
        </div>
    );
};
