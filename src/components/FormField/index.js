import React from "react";

function FormField({label,type, name, value, onChange}) {
    return (
        <div>
            <label>
                {label} :
                <input
                    type={type}
                    name={name}
                    value={value} // ou values['nome'] chamando objeto como array
                    onChange={onChange}
                />
            </label>
        </div>
    )

}

export default FormField;