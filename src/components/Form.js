import React, { useContext } from 'react';
import { Buttons } from './Buttons';
import { TodoContext } from './TodoContext';

import PropTypes from 'prop-types';

export const Form = (props) => {
    const { dispatch } = useContext(TodoContext);
    const { tarea, setValue, reset } = props;
 
    // Procesa la informacion una vez realizado el submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // valida el input si el campo no viene vacio
        if (tarea.trim().length < 1) {
            
            return
        }

        // Carga los valores a la variable global   
        const todo = {
                id: Date.now().toString(36).substring(2),
                tarea,
                done: false,
            }
   
        // dispara la accion para que el reducer se ejecute segun el type
        const action = {
            type: 'addTodo',
            payload: todo
        }

        dispatch(action);

        // es una funcion que proviene del useForm
        reset();
    }
    return (
        <form
            className='form-control p-3 d-flex flex-row justify-content-between'
            onSubmit={handleSubmit}
        >
            <input 
                autoFocus={true}
                autoComplete="false"
                className='border-0 border-bottom App-input'
                type='text'
                name='tarea'
                value={tarea}
                placeholder='Ingrese una tarea... '
                onChange={setValue}
            />
            <Buttons
                styles='App-button btn btn-danger'
                value='Guardar tarea'
                type='submit'
            /> 
        </form>
    );
};

Form.prototype = {
    tarea: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}