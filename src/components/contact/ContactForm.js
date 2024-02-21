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

        fetch('https://hallux.clinic/contact-hallux.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    return response.text().then(text => {
                        console.log('Sukces:', text);
                        navigate('/kontakt/sukces');
                        return text;
                    });
                } else {
                    // Obsługa odpowiedzi z kodem błędu
                    console.error('Błąd serwera:', response.status);
                    navigate('/kontakt/blad');
                    throw new Error('Błąd serwera');
                }
            })
            .catch(error => {
                console.error('Błąd:', error);
                setLoading(false);
                navigate('/kontakt/blad');
            });
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
                        <p className={styles.adminInfromation}>
                            Administratorem Pani/Pana danych osobowych jest Monika Juczyńska Hallux Clinic z siedzibą w Łodzi
                            przy ul. Armii Krajowej 44/13, 94-046 Łódź NIP7261496883
                            Wszelkie pytania dotyczące przetwarzania Pani/Pana danych osobowych należy kierować na adres
                            mjuczynska@interia.pl lub na podany powyżej adres poczty tradycyjnej.
                            Pani/Pana dane będą przetwarzane w celu obsługi Pani/Pana zapytania przez okres niezbędny dla
                            realizacji tego celu.
                            Przetwarzanie Pani/Pana danych osobowych będzie odbywać się na podstawie art. 6 pkt 1 lit. f)
                            Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                            ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                            przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
                            danych) (Dz. Urz. UE L nr 119 str. 1) („RODO”) w prawnie usprawiedliwionym interesie
                            Administratora Danych jakim jest obsługa Pani/Pana zapytania zgodnie z wybranym tematem oraz
                            ochrona przed ewentualnymi roszczeniami na drodze cywilnej związanymi z realizacją Pani/Pana
                            zapytania.
                            Dane będą przechowywane nie dłużej niż jest to konieczne do udzielenia odpowiedzi, a po tym czasie
                            mogą być przetwarzane do czasu upływu przedawnienia ewentualnych roszczeń.
                            Administrator nie stosuje zautomatyzowanego podejmowania decyzji, w tym profilowania.
                            Przysługuje Pani/Panu prawo dostępu do treści swoich danych oraz prawo ich poprawiania,
                            sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo do
                            wniesienia sprzeciwu wobec przetwarzania danych.
                            Ponadto ma Pani/Pan prawo do wniesienia skargi do organu nadzorczego, którym jest Prezes Urzędu
                            Ochrony Danych Osobowych, gdy uzna Pani/Pan, iż przetwarzanie danych osobowych dotyczących
                            Pani/Pana narusza przepisy RODO.
                            Podanie danych osobowych jest dobrowolne ale niezbędne do przetworzenia Pani/Pana zapytania i
                            udzielenia odpowiedzi.
                        </p>

                        <button className={styles.submitButton} type="submit" disabled={loading ? true : false}>{loading ? 'Wysyłanie' : 'Wyślij formularz'}</button>
                        <p className={styles.information}>Wizyty odbywają się po wcześniejszej rezerwacji telefonicznej!</p>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ContactForm