import { ErrorMessage, Field } from 'formik'
import React from 'react'

type Props = {
    label: String
    choises: String[];
}

export const FormikSelectBox = (props: Props) => {
    return (
        <div className="mb-4">
            <label  className="form-label">{props.label}</label>
            <Field as="select" name="colorId" className="form-select">
                {props.choises.map((choise, i) => {
                    return (
                        <option key={i} value={i}>{choise}</option>
                        )
                    })}
            </Field>
            <ErrorMessage name="colorId">
                {(message) => <p className="text-danger">HATA: {message}</p>}
            </ErrorMessage>
        </div>
    )
}