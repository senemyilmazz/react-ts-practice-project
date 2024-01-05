import { ErrorMessage, Field } from 'formik'
import React from 'react'

type Props = {
    label : string,
    name : string,
    type ?: string
}

export const FormikInput = (props: Props) => {
    return (
        <div className="mb-3">
            <label  className="form-label">{props.label}</label>
            <Field 
                name={props.name} 
                type={props.type || "text"} 
                className="form-control"
            />
            <ErrorMessage name={props.name}>
                {(message) => <p className="text-danger">HATA: {message}</p>}
            </ErrorMessage>
        </div>
    )
}