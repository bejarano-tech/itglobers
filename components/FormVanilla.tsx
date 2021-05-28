import { useState } from "react"
import Form from './Form'
import Ligthbox from './Ligthbox';
export default function FormVanilla({initialValues, validate}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    // On Change handler
    const handleChange = (event: { target: { name: any; value: any; type: any; }; }) => {
        const {name, value: newValue, type} = event.target;

        const value = type === 'number' ? + newValue : newValue;

        setValues({
            ...values,
            [name]: value,
        });

        setTouched({
            ...touched,
            [name]: true,
        })
    }

    // On Blur handler
    const handleBlur = (event: { target: { name: any; value: any }; }) => {
        const {name, value} = event.target;

        const { [name]: removedError, ...rest } = errors;

        const error = validate[name](value);
        setErrors({
            ...rest,
            ...(error && { [name]: touched[name] && error })
        });
    }

    // On Submit Handler
    const handleSubmit = event => {
        event.preventDefault();

        const formValidation = Object.keys(values).reduce(
            (acc, key) => {
                const newError = validate[key](values[key]);
                const newTouched = { [key]: true };
                return {
                    errors: {
                        ...acc.errors,
                        ...(newError && { [key]: newError}),
                    },
                    touched: {
                        ...acc.touched,
                        ...newTouched,
                    },
                };
            },
            {
                errors: { ...errors },
                touched: {...touched }
            },
        );
        setErrors(formValidation.errors);
        setTouched(formValidation.touched);
        if (
            !Object.values(formValidation.errors).length &&
            Object.values(formValidation.touched).length ===
                Object.values(values).length &&
                Object.values(formValidation.touched).every(t => t === true)
        ) {
            console.log("Hola, lo que el usuario ingresó fue:");
            showModal(5);
            console.log(JSON.stringify(values, null, 2));
        }
    };

    const showModal = (timeout: number) => {
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
        }, timeout * 1000);
      };

    return (
        <>
            <Form
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                touched={touched}
                values={values}
            />
            {modalOpen && <Ligthbox message="Tu información fue enviada con éxito, estaremos en contacto contigo ;)"/>}
        </>
    )
}