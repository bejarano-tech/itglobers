import styles from './Form.module.css'

export default function Form({errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values}) {

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
                <label className={styles.label_form} htmlFor="name">
                    <input 
                        id="name"
                        className={styles.input_form}
                        placeholder="Ingrese su Nombre"
                        value={values.name || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="name"
                        type="text"
                        required />
                    <p className={styles.error_form}>{touched.name && errors.name}</p>
                </label>
                <label className={styles.label_form} htmlFor="email">
                    <input 
                        id="email"
                        className={styles.input_form}
                        placeholder="Ingrese su Email"
                        value={values.email || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        type="text"
                        required />
                    <p className={styles.error_form}>{touched.email && errors.email}</p>
                </label>
                <label className={styles.label_form} htmlFor="cellphone">
                    <input 
                        id="cellphone"
                        className={styles.input_form}
                        placeholder="Ingrese su Celular"
                        value={values.cellphone || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="cellphone"
                        type="text"
                        required />
                    <p className={styles.error_form}>{touched.cellphone && errors.cellphone}</p>
                </label>
                <label className={styles.label_form} htmlFor="age">
                    <input 
                        id="age"
                        className={styles.input_form}
                        placeholder="Ingrese su Edad"
                        value={values.age || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="age"
                        type="text"
                        required />
                    <p className={styles.error_form}>{touched.age && errors.age}</p>
                </label>
                <button type="submit" className={styles.button_form}>
                    Enviar
                </button>
        </form>
    )
    
}