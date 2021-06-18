import React, {useEffect, useRef, useState} from 'react'
import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import {gsap, ScrollTrigger} from "gsap/all";

const KontaktForm = ({animation}) => {
    let [send, setSend] = useState(false);

    let kontaktMain = useRef(null);

    useEffect(() => {
        if (animation) {
            setTimeout(() => {
                gsap.registerPlugin(ScrollTrigger);
                gsap.to(kontaktMain.current, {
                    x: 0, duration: .5, ease: "ease-in-out", scrollTrigger: {
                        trigger: ".kontaktMain",
                        start: "top 80%"
                    }
                });
            }, 1000);
        } else {
            gsap.set(kontaktMain.current, {x: 0});
        }
    }, []);

    const kontaktSchema = Yup.object().shape({
        nameAndSurname: Yup.string()
            .min(3, 'Podaj imię i nazwisko')
            .required('Pole wymagane'),
        email: Yup.string()
            .email("Niepoprawny adres emial")
            .required('Pole wymagane'),
        phoneNumber: Yup.string()
            .min(9, "Podaj numer telefonu")
            .required("Pole wymagane"),
        checkbox2: Yup.boolean()
            .oneOf([true])
    });

    return <main className="kontaktMain" ref={kontaktMain}>
        <h3 className="kontaktMain__header">
            <b>Masz pytania?</b> Chętnie na nie odpowiemy!
        </h3>

        <Formik initialValues={{
            nameAndSurname: "",
            email: "",
            phoneNumber: "",
            msg: "",
            checkbox2: false
        }}
                validationSchema={kontaktSchema}
                onSubmit={(values, {resetForm}) => {
                    resetForm();
                    setSend(true);
                    setTimeout(() => {
                        setSend(false);
                    }, 3000);
                    axios.post("https://przedszkoleswarzedz.pl/contact-form", {
                        form: values
                    })
                        .then(() => {
                            console.log("Formularz wyslano");
                        })
                        .catch(err => {
                            console.log("Cos poszlo nie tak...");
                        });
                }}
        >
            {({errors, touched}) => (
                <Form className="kontakt__form">
                    <label>
                        <Field className="formInput"
                               id={touched.nameAndSurname && errors.nameAndSurname ? "borderRed" : ""}
                               name="nameAndSurname"
                               placeholder="Imię i nazwisko"
                               type="text"/>
                    </label>
                    <label>
                        <Field className="formInput"
                               id={touched.email && errors.email ? "borderRed" : ""}
                               name="email"
                               placeholder="Adres email"
                               type="text"/>
                    </label>
                    <label>
                        <Field className="formInput"
                               id={touched.phoneNumber && errors.phoneNumber ? "borderRed" : ""}
                               name="phoneNumber"
                               placeholder="Telefon"
                               type="text"/>
                    </label>

                    <Field as="textarea" className="formMsg"
                              name="msg"
                              placeholder="Wiadomość"/>

                    <div className="formCheckboxSection">
                        <label className="label--checkbox">
                            <Field type="checkbox" name="checkbox2" className="formInputCheckbox"/>
                            Wyrażam/y zgodę na przetwarzanie moich/naszych danych osobowych oraz dziecka w trybie art. 6
                            ust. 1 ut. a), b), c), e) I f) oraz
                            art. 4 ust. 2 Rozporządzenia Parlamentu Europejskiego I Rady (UE) z dnia 27 kwietnia 2016 r.
                            2016/6719 w sprawie ochrony osób
                            fizycznych w związku z przetwarzaniem danych osobowych I w sprawie swobodnego przepływu
                            takich danych oraz uchylenia dyrektywy
                            45/46/WE (ogólne rozporządzenie o ochronie danych Dz. U. UE. L. 2016.113.1 z dnia 5 maja 2016
                            r.).
                            <br/><br/>

                            Na podstawie art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego I Rady (UE) z dnia
                            27 kwietnia 2016 r. 2016/6741 w sprawie
                            ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawe swobodnego
                            przepływu takich danych oraz uchylenia
                            dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych Dz. U. UE. L. 2016.119.1 z dnia
                            u maja 2016 r.) informuję Pana/ Panią, iż:
                            <br/><br/>1. Administratorem danych jest Przedszkole i Żłobek 123
                            Nauki i Sztuki w Swarzędzu, które przetwarza podane dane
                            osobowe zgodnie z art. 6 ust. 1 Ut. a), b), c), e) 1 f) oraz art. ust. 2 Rozporządzenia
                            Parlamentu Europejskiego i Rady (UE)
                            z dnia 27 kwietnia 2016 r. 2016/679.
                            <br/>2. Podanie danych jest dobrowolne, ale niezbędne w celu zapisania dziecka, zawarcia i
                            realizacji Umowy o Świadczenie usług w w/w
                            Przedszkolu.
                            <br/>3. Posiada Pan/ Pani prawo dostępu do treści swoich danych i ich sprostowania,
                            usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo do
                            cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania
                            <br/>4. Cofnięcie zgody na przetwarzanie danych osobowych będzie miało konsekwencje w braku
                            dalszej możliwości realizacji Umowy.
                            <br/>5. Dane mogą być udostępniane przez Administratora podmiotom upoważnionym do uzyskania
                            informacji na podstawie przepisów powszechnie obowiązującego prawa.
                            <br/>6. Podane dane nie podlegają zautomatyzowanemu podejmowaniu decyzji.
                            <br/>7. Dane osobowe będą przechowywane do czasu obowiązywania Umowy, w uzasadnionych
                            przypadkach i zakresie przez okres niezbędny dla
                            ochrony prawnie uzasadnionych interesów Administratora, realizacji obowiązków podatkowych i
                            rachunkowych. Administrator
                            zaprzestanie przetwarzania danych osobowych, o ile z obowiązujących przepisów prawa nie
                            wynika konieczność ich dalszego
                            przetwarzania.
                            <br/>8. Osoba, której dane dotyczą ma prawo wniesienia skargi do organu nadzorczego, gdy
                            uzna, iż przetwarzanie danych osobowych jej
                            dotyczących narusza przepisy ogólnego rozporządzenia o ochronie danych osobowych z dnia 27
                            kwietnia 2016 r.
                        </label>
                    </div>

                    {!send ?
                        <button type="submit" className="purpleHeader purpleHeader--btn purpleHeader--btn--kontakt">
                            Wyślij
                        </button> : <h1 className="afterSend">Dziękujemy</h1>}
                </Form>)}
        </Formik>
    </main>
}

export default KontaktForm;
