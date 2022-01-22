import { useState } from "react"


export const useForm = (initalState = {}) => {
    const [value, setValue] = useState(initalState);

    // Resetea el formulario === form.reset()
    const reset = () => setValue(initalState);

    // Nos permite cargar el formulario
    const handleChange = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value
        });
    };

    return [value, handleChange, reset];
}