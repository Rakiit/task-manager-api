const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ricardoiarced@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how to get along with the app.`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ricardoiarced@gmail.com',
        subject: 'We are sorry to know you are out',
        text: `Is there anything we could have done to have kept you on board ${name}?`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}