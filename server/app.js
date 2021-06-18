const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors");
const md5 = require("md5");
const app = express();

/* Enable cors */
app.use(cors());

/* Enable body in http request */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /* Redirect http to https */
app.enable('trust proxy');
app.use (function (req, res, next) {
    if (req.secure) {
        // request was via https, so do no special handling
        next();
    } else {
        // request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
    }
});

/* Serve static React page */
app.use(express.static(path.join(__dirname, '../client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* Send form */
app.post("/send", async (req, res) => {
    const form = req.body.form;

    /* Nodemailer */
    let transporter = nodemailer.createTransport(smtpTransport ({
        auth: {
            user: 'klient@speed1979.atthost24.pl',   //email of sender
            pass: 'Prenier123'    //password of sender
        },
        host: 'speed1979.atthost24.pl',    //my email host
        secureConnection: true,
        port: 587,
        tls: {
            rejectUnauthorized: false
        },
    }));

    /* Convert msg to string */
    let msg = JSON.stringify(form).replace(/,/g, '</tr><tr>').replace(/"/g, ' ')
        .replace(/ :/g, ":")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace("childName", "<td>Imię dziecka</td>")
        .replace("childSurname", "<td>Nazwisko dziecka</td>")
        .replace("dateOfBirth", "<td>Data urodzenia dziecka</td>")
        .replace("placeOfBirth", "<td>Miejsce urodzenia dziecka</td>")
        .replace("billingAddress", "<td>Adres do korespondencji</td>")
        .replace("livingAddress", "<td>Adres zamieszkania</td>")
        .replace("motherName", "<td>Imię matki</td>")
        .replace("motherSurname", "<td>Nazwisko matki</td>")
        .replace("motherPhoneNumber", "<td>Nr telefonu matki</td>")
        .replace("motherEmail", "<td>Adres email matki</td>")
        .replace("motherAddress", "<td>Miejsce zamieszkania matki</td>")
        .replace("motherWorkplace", "<td>Miejsce pracy matki</td>")
        .replace("fatherName", "<td>Imię ojca</td>")
        .replace("fatherSurname", "<td>Nazwisko ojca</td>")
        .replace("fatherPhoneNumber", "<td>Nr telefonu ojca</td>")
        .replace("fatherEmail", "<td>Adres email ojca</td>")
        .replace("fatherAddress", "<td>Miejsce zamieszkania ojca</td>")
        .replace("fatherWorkplace", "<td>Miejsce pracy ojca</td>")
        .replace("nameAndSurname", "<td>Imie i nazwisko</td>")
        .replace("phoneNumber", "<td>Numer telefonu</td>")
        .replace("msg", "<td>Wiadomość</td>")
        .replace("matherPesel", "<td>Numer pesel matki</td>")
        .replace("checkbox", "<td>Zgoda RODO</td>");

    let mailOptions = {
        from: 'klient@speed1979.atthost24.pl',
        to: 'speed1979@interia.eu',
        subject: 'Zgłoszenie do przedszkola/żłobka',
        html: `
            <table style="border: 1px solid black; border-collapse: collapse">
            <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Oddział
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.oddzial}
</td>
</tr>
            <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Imię dziecka
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.childName}
</td>
</tr>
       <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Nazwisko dziecka
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.childSurname}
</td>
</tr>
       <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Data urodzenia
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.dateOfBirth}
</td>
</tr>
       <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Miejsce urodzenia
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.placeOfBirth}
</td>
</tr>
       <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Pesel dziecka
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.pesel}
</td>
</tr>
       <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Adres do korespondencji
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.billingAddress}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Adres zameldowania
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.livingAddress}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Imię matki
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.motherName}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Nazwisko matki
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.motherSurname}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Numer telefonu matki
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.motherPhoneNumber}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Adres email matki
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.motherEmail}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Miejsce pracy matki
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.motherWorkplace}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Pesel matki
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.motherPesel}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Adres zamieszkania matki
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.motherAddress}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Imię ojca
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.fatherName}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Nazwisko ojca
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.fatherSurname}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Numer telefonu ojca
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.fatherPhoneNumber}
</td>
</tr><tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Adres email ojca
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.fatherEmail}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Adres zamieszkania ojca
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.fatherAddress}
</td>
</tr>
<tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Miejsce pracy ojca
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.fatherWorkplace}
</td>
</tr>

</table>
        `
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log("success");
        }
    });
});

/* Send contact form */
app.post("/contact-form", async (req, res) => {
    const form = req.body.form;

    console.log("Wysylam...");
    console.log(form);

    /* Nodemailer */
    let transporter = nodemailer.createTransport(smtpTransport ({
        auth: {
            user: 'klient@speed1979.atthost24.pl',   //email of sender
            pass: 'Prenier123'    //password of sender
        },
        host: 'speed1979.atthost24.pl',    //my email host
        secureConnection: true,
        port: 587,
        tls: {
            rejectUnauthorized: false
        },
    }));

    let mailOptions = {
        from: 'klient@speed1979.atthost24.pl',
        to: 'speed1979@interia.eu',
        subject: 'Wiadomość z formularza kontaktowego',
        html: `
            <table style="border: 1px solid black; border-collapse: collapse">
            <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Imię i nazwisko
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.nameAndSurname}
</td>
</tr>
            <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Adres email
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.email}
</td>
</tr>
       <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Numer telefonu
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.phoneNumber}
</td>
</tr>
       <tr>
            <td style="border: 1px solid black; padding: 7px 20px">
            Wiadomość
</td>
<td style="border: 1px solid black; padding: 7px 20px">
            ${form.msg}
</td>

</table>
        `
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        }else{
            console.log("success");
        }
    });
});

app.post("/payment", async (req, res) => {
    /* Generate md5 checksum */
    const date = new Date();
    const merchantId = "33491";
    const amount = "350.00";
    const code = "2GNP16Yrsn0v6Y1e";
    const crc = date.getMilliseconds().toString() + date.getDay().toString() + date.getSeconds().toString(); /* Generate unique crc */
    const myMd5 = md5(merchantId + amount + crc + code);

    res.send({
        link: `https://secure.tpay.com?id=${merchantId}&kwota=${amount}&opis=Zadatek%20na%20poczet%20oplat&crc=${crc}&md5sum=${myMd5}`
    });
});

/* Run the app */
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});