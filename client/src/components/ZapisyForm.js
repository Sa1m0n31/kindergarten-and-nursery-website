import React, { useState } from 'react'

import * as Yup from 'yup';
import {Form, Formik, Field } from 'formik';
import axios from 'axios';

const ZapisyForm = ({oddzial}) => {
    let [send, setSend] = useState(false);

    const zapisySchema = Yup.object().shape({
        childName: Yup.string()
            .min(2, 'Podaj imię dziecka')
            .required('Pole wymagane'),
        childSurname: Yup.string()
            .min(2, 'Podaj nazwisko dziecka')
            .required('Pole wymagane'),
        dateOfBirth: Yup.string()
            .min(4, "Podaj date urodzenia dziecka")
            .required("Pole wymagane"),
        placeOfBirth: Yup.string()
            .min(2, "Podaj miejsce urodzenia dziecka")
            .required("Pole wymagane"),
        pesel: Yup.string()
            .min(11, "Podaj poprawny numer pesel")
            .max(11, "Podaj poprawny numer pesel")
            .required("Pole wymagane"),
        billingAddress: Yup.string()
            .required("Pole wymagane"),
        livingAddress: Yup.string()
            .required("Pole wymagane"),
        motherName: Yup.string()
            .min(2, "Podaj imie matki")
            .required("Pole wymagane"),
        motherSurname: Yup.string()
            .required("Pole wymagane"),
        motherPhoneNumber: Yup.string()
            .required("Pole wymagane"),
        motherAddress: Yup.string()
            .required("Pole wymagane"),
        motherWorkplace: Yup.string()
            .required("Pole wymagane"),
        motherPesel: Yup.string()
            .min(11, "Podaj poprawny numer pesel matki")
            .max(11, "Podaj poprawny numer pesel matki")
            .required("Pole wymagane"),
        fatherName: Yup.string()
            .min(2, "Podaj imie matki")
            .required("Pole wymagane"),
        fatherSurname: Yup.string()
            .required("Pole wymagane"),
        fatherPhoneNumber: Yup.string()
            .required("Pole wymagane"),
        fatherAddress: Yup.string()
            .required("Pole wymagane"),
        fatherWorkplace: Yup.string()
            .required("Pole wymagane"),
        checkbox2: Yup.boolean()
            .oneOf([true])
    });

    return <div className="zapisyInner">
        <h4 className="zapisyInner__header">
            Karta zapisu dziecka do grupy przedszkolnej na rok szkolny 2021/2022.
        </h4>

        <div className="zapisyForm">
        <Formik initialValues={{
            oddzial: oddzial,

            childName: "",
            childSurname: "",
            dateOfBirth: "",
            placeOfBirth: "",
            pesel: "",

            billingAddress: "",
            livingAddress: "",

            motherName: "",
            motherSurname: "",
            motherPhoneNumber: "",
            motherEmail: "",
            motherAddress: "",
            motherWorkplace: "",
            motherPesel: "",

            fatherName: "",
            fatherSurname: "",
            fatherPhoneNumber: "",
            fatherEmail: "",
            fatherAddress: "",
            fatherWorkplace: "",

            checkbox2: false
        }}
                validationSchema={zapisySchema}
                onSubmit={(values, {resetForm}) => {
                    setSend(true);
                    setTimeout(() => {
                        setSend(false);
                    }, 3000);
                    axios.post("https://przedszkoleswarzedz.pl/send", {
                        form: values
                    })
                        .then(() => {
                            console.log("Formularz wyslany")
                        })
                        .catch(err => {
                            console.log("Cos poszlo nie tak...");
                        });
                    resetForm();
                }}
        >
                {/*Dane dziecka*/}
            {({errors, touched}) => (
                <Form>
                    <h5 className="formHeader">
                        Dane osobowe dziecka
                    </h5>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.childName && errors.childName ? "borderRed" : ""}
                               name="childName"
                               placeholder="Imię (imiona)"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.childSurname && errors.dateOfBirth ? "borderRed" : ""}
                               name="childSurname"
                               placeholder="Nazwisko"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.dateOfBirth && errors.dateOfBirth ? "borderRed" : ""}
                               name="dateOfBirth"
                               placeholder="Data urodzenia"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.placeOfBirth && errors.placeOfBirth ? "borderRed" : ""}
                               name="placeOfBirth"
                               placeholder="Miejsce urodzenia"
                               type="text" />
                    </label>
                    <label>
                        <Field className="formInput"
                               id={touched.pesel && errors.pesel ? "borderRed" : ""}
                               name="pesel"
                               placeholder="Pesel"
                               type="text" />
                    </label>

                    {/*Dane adresowe*/}
                    <h5 className="formHeader">
                        Dane adresowe
                    </h5>
                    <label>
                        <Field className="formInput"
                               id={touched.billingAddress && errors.billingAddress ? "borderRed" : ""}
                               name="billingAddress"
                               placeholder="Adres zamieszkania (do korespondencji)"
                               type="text" />
                    </label>
                    <label>
                        <Field className="formInput"
                               id={touched.livingAddress && errors.livingAddress ? "borderRed" : ""}
                               name="livingAddress"
                               placeholder="Adres zameldowania"
                               type="text" />
                    </label>

                    {/*Dane matki*/}
                    <h5 className="formHeader">
                        Dane matki/Opiekuna prawnego
                    </h5>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.motherName && errors.motherName ? "borderRed" : ""}
                               name="motherName"
                               placeholder="Imię (imiona)"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.motherSurname && errors.motherSurname ? "borderRed" : ""}
                               name="motherSurname"
                               placeholder="Nazwisko"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.motherPhoneNumber && errors.motherPhoneNumber ? "borderRed" : ""}
                               name="motherPhoneNumber"
                               placeholder="Numer telefonu"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               name="motherEmail"
                               placeholder="Adres email (opcjonalnie)"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.motherWorkplace && errors.motherWorkplace ? "borderRed" : ""}
                               name="motherWorkplace"
                               placeholder="Aktualne miejsce pracy"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.motherPesel && errors.motherPesel ? "borderRed" : ""}
                               name="motherPesel"
                               placeholder="Pesel"
                               type="text" />
                    </label>
                    <label>
                        <Field className="formInput"
                               id={touched.motherAddress && errors.motherAddress ? "borderRed" : ""}
                               name="motherAddress"
                               placeholder="Adres zamieszkania"
                               type="text" />
                    </label>


                    {/*Dane ojca*/}
                    <h5 className="formHeader">
                        Dane ojca/Opiekuna prawnego
                    </h5>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.fatherName && errors.fatherName ? "borderRed" : ""}
                               name="fatherName"
                               placeholder="Imię (imiona)"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.fatherSurname && errors.fatherSurname ? "borderRed" : ""}
                               name="fatherSurname"
                               placeholder="Nazwisko"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               id={touched.fatherPhoneNumber && errors.fatherPhoneNumber ? "borderRed" : ""}
                               name="fatherPhoneNumber"
                               placeholder="Numer telefonu"
                               type="text" />
                    </label>
                    <label className="label--half">
                        <Field className="formInput"
                               name="fatherEmail"
                               placeholder="Adres email (opcjonalnie)"
                               type="text" />
                    </label>
                    <label>
                        <Field className="formInput"
                               id={touched.fatherAddress && errors.fatherAddress ? "borderRed" : ""}
                               name="fatherAddress"
                               placeholder="Adres zamieszkania"
                               type="text" />
                    </label>
                    <label>
                        <Field className="formInput"
                               id={touched.fatherWorkplace && errors.fatherWorkplace ? "borderRed" : ""}
                               name="fatherWorkplace"
                               placeholder="Aktualne miejsce pracy"
                               type="text" />
                    </label>

                    <label className="label--checkbox">
                        <Field type="checkbox" name="checkbox2" className="formInputCheckbox" />
                        Wyrażam/y zgodę na przetwarzanie moich/naszych danych osobowych oraz dziecka w trybie art. 6 ust. 1 ut. a), b), c), e) I f) oraz
                        art. 4 ust. 2 Rozporządzenia Parlamentu Europejskiego I Rady (UE) z dnia 27 kwietnia 2016 r. 2016/6719 w sprawie ochrony osób
                        fizycznych w związku z przetwarzaniem danych osobowych I w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
                        45/46/WE (ogólne rozporządzenie o ochronie danych Dz. U. UE. L. 2016.113.1 z dnia 5 maja 2016 r.).
                        <br/><br/>

                        Na podstawie art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego I Rady (UE) z dnia 27 kwietnia 2016 r. 2016/6741 w sprawie
                        ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawe swobodnego przepływu takich danych oraz uchylenia
                        dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych Dz. U. UE. L. 2016.119.1 z dnia u maja 2016 r.) informuję Pana/ Panią, iż:
                        <br/><br/>1. Administratorem danych jest Przedszkole i Żłobek 123
                        Nauki i Sztuki w Swarzędzu, które przetwarza podane dane
                        osobowe zgodnie z art. 6 ust. 1 Ut. a), b), c), e) 1 f) oraz art. ust. 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE)
                        z dnia 27 kwietnia 2016 r. 2016/679.
                        <br/>2. Podanie danych jest dobrowolne, ale niezbędne w celu zapisania dziecka, zawarcia i realizacji Umowy o Świadczenie usług w w/w
                        Przedszkolu.
                        <br/>3. Posiada Pan/ Pani prawo dostępu do treści swoich danych i ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo do
                        cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania
                        <br/>4. Cofnięcie zgody na przetwarzanie danych osobowych będzie miało konsekwencje w braku dalszej możliwości realizacji Umowy.
                        <br/>5. Dane mogą być udostępniane przez Administratora podmiotom upoważnionym do uzyskania informacji na podstawie przepisów powszechnie obowiązującego prawa.
                        <br/>6. Podane dane nie podlegają zautomatyzowanemu podejmowaniu decyzji.
                        <br/>7. Dane osobowe będą przechowywane do czasu obowiązywania Umowy, w uzasadnionych przypadkach i zakresie przez okres niezbędny dla
                        ochrony prawnie uzasadnionych interesów Administratora, realizacji obowiązków podatkowych i rachunkowych. Administrator
                        zaprzestanie przetwarzania danych osobowych, o ile z obowiązujących przepisów prawa nie wynika konieczność ich dalszego
                        przetwarzania.
                        <br/>8. Osoba, której dane dotyczą ma prawo wniesienia skargi do organu nadzorczego, gdy uzna, iż przetwarzanie danych osobowych jej
                        dotyczących narusza przepisy ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r.
                    </label>

                    {!send ? <button type="submit" className="purpleHeader purpleHeader--btn">
                        Wyślij formularz
                    </button> : <h1 className="afterSend">Dziękujemy za zgłoszenie! :)</h1>}
                </Form>
            )}
        </Formik>
        </div>
    </div>
}

export default ZapisyForm;