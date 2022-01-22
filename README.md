# Todo List (React + Custom Hooks + useContext + useReducer + localStorage) 📝

Es todo se realizo con React + Boostrap para los estilos. Un simple todo pero integrando hooks clasicos de React.js y los custom hooks. 

Este todo te pide ingresar un tarea en caso de enviar el campo vacio no sucede nada, sino aparecera en nuestra pantalla una tarea que contiene un checkbox para ir tildando la tarea completa o no, si la tarea se la marca completa aparecera como tachada y aparecera un button para eliminarlo. Al refrescar la pantalla la informacion permanecera disponible ya que se usa el localStorage. 


https://user-images.githubusercontent.com/80013958/150655998-13367161-feef-44b6-980e-7d7525f07d60.mp4


# Construido con 🛠️
* React.js
* Boostrap
* Custom Hooks
* useContext
* useReducer 
* Prop-types

# Funcionalidades ⚙️
## Validacion del formulario
Es requerido colocar una tarea en nuestro formulario ya que en caso no se coloque nada no vamos ninguna iteraccion con nuestra aplicacion. 

## Crea y eliminar un Todo
Si creamos una tarea esta se aloja en nuestro localStorage para llevar un contro de nuestras tareas. Al tildar como completada nuestra tarea la tarea aparecera como tachada ya que le indicamos que esta completada y queda disponible para eliminarla de nuestra aplicacion. 

## Contador de tareas 
Cada vez que creamos una nueva tarea aparecera en nuestro header un contador que se actualiza por cada todo creado o eliminado. 

## Custom Hooks
Se ha creado un custom hooks para el formulario este custom hooks no permite escribir, ingresar nuevos todo y tiene un funcion que nos permite resetear nuestro formulario. 

## useContext 
He decidido utilizar este hooks para poder como variables globales de nuestro objeto que contiene toda la informacion necesaria y nuestro funcion del useReducer.

## useReducer 
Aplique el useRedecer en este proyecto ya que nos permite utilizar el localStorage de una manera simplificada, tambien podemos ir manipulando los requerimientos del usuario si quiere agregar, editar su estado o asi mismo eliminarla. 

## Prop-Types
Esta libreria la uso para validar que a los componentes se les pase correctamente los props que requieren para su funcionamientos.  

# Deploy 👨‍💻
[![Netlify Status](https://api.netlify.com/api/v1/badges/6371f9c9-268c-4405-997d-3629b55434a6/deploy-status)](https://todocontrol.netlify.app/)

# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);

