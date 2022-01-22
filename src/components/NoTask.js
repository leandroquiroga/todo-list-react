import React from 'react';
import task from './../assets/todo_icon.svg'

export const NoTask = () => {
    return (
        <div>
            <img 
                src={task}
                alt='Todo icon'
                className='d-flex justify-content-center align-items-center img-fluid p-2'
            />
            <p className='App-text--noTask text-center'>No hay tareas disponibles</p>
        </div>
    );
};
