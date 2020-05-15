const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sara.cruz@secret-source.eu',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Le me know how you get along with the app.`
    })
}

const goodByeEmail = (email, name) => {
    sgMail.send({
       to: email,
       from: "sara.cruz@secret-source.eu",
       subject: "Hope to see you soon!",
       text: `Goodbye ${name}! Is anything we could have done to kept you on-board?`,
    })
}

module.exports = {
    sendWelcomeEmail,
    goodByeEmail
}