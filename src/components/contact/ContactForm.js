import styles from "./ContactForm.module.scss";
import {Formik} from "formik";
import * as Yup from 'yup';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Imię jest wymagane!'),
    surname: Yup.string().required('Imię jest wymagane!'),
    email: Yup.string().required('Email jest wymagany!').email('Podaj parwidłowy adres email!'),
    phone: Yup.number().required('Numeru telefonu jest wymagany!'),
    text: Yup.string().required("Podanie treści jest wymagane!").min(20, 'Minimalna długość tekstu to 20 znaków!').max(300, 'Maksymalna liczba znaków to 300')
})

const ContactForm = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const FormConfig = [
        {
            label: 'Imię',
            type: 'text',
            placeholder: 'Podaj swoje imię...',
            key: 'name'
        },
        {
            label: 'Nazwisko',
            type: 'text',
            placeholder: 'Podaj swoje nazwisko...',
            key: 'surname'
        },
        {
            label: 'Numer telefonu',
            type: 'tel',
            placeholder: 'Podaj swój numer telefonu...',
            key: 'phone'
        },
        {
            label: 'Email',
            type: 'email',
            placeholder: 'Podaj swój email...',
            key: 'email'
        },
    ]

    const initialData = {
        name: '',
        surname: '',
        phone: '',
        email: '',
        text: ""
    }

    const handleSubmit = (values) => {
        setLoading(true)
        const formData = new FormData
        for(const prop in values){
            formData.append(prop, values[prop])
        }
        console.log(formData)
        fetch('https://hallux.clinic/contact-hallux.php', {
            method: 'POST',
            body: formData,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.text())
            .then(res => {
                if(res.status === '200'){
                    setLoading(false)
                    navigate('/kontakt/sukces')
                }
                else{
                    setLoading(false)
                    navigate('/kontakt/blad')
                }
            })
            .catch(() => {
                setLoading(false)
                navigate('/kontakt/blad')
            })
    }

    return(
        <>
            <Formik
                initialValues={initialData}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                {({
                      errors,
                      touched,
                      handleSubmit,
                      values,
                      handleChange,
                      handleBlur
                  }) => (
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.inputWrapper}>
                            {FormConfig.map(item => {
                                return(
                                    <div className={styles.item}>
                                        <label className={styles.label}>{item.label}</label>
                                        <input name={item.key} onChange={handleChange} onBlur={handleBlur} value={values[item.key]} className={styles.input} placeholder={item.placeholder} type={item.type} />
                                        {errors[item.key] && touched[item.key] ? (
                                            <p className={styles.errorMessage}>{errors[item.key]}</p>
                                        ) : null}
                                    </div>
                                )
                            })}
                            <div className={styles.item}>
                                <label className={styles.label}>Treść</label>
                                <textarea className={styles.textarea} placeholder="Podaj treść..." name="text" value={values.text} onBlur={handleBlur} onChange={handleChange}  id="w3review" rows="4" cols="50" />
                                {errors.text && touched.text ? (
                                    <p className={styles.errorMessage}>{errors.text}</p>
                                ) : null}
                            </div>
                        </div>
                        <label>
                            <input type="checkbox"/>
                            <span>Wyrażam zgodę</span>
                        </label>

                        <button className={styles.submitButton} type="submit" disabled={loading ? true : false}>{loading ? 'Wysyłanie' : 'Wyślij formularz'}</button>
                        <p className={styles.information}>Wizyty odbywają się po wcześniejszej rezerwacji telefonicznej!</p>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ContactForm