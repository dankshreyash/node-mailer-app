const nodemailer = require("nodemailer")

const sendEmail = async (to, messagecontent) => {

    try {
        //create transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'shreyashgaikwad27@gmail.com',
                pass: 'okssueaysteuzwnq',
            }
        });
        //message obj
        const message = {
            to: to,
            subject: "new message from nodemailer app",
            html: `<h3> you received message <p>${messagecontent}</p></h3>`
        };
        //send the email
        const info = await transporter.sendMail(message);
        console.log('message sent', info.messageId)


    } catch (error) {
        console.log(error);
        throw new Error('email could not be sent');
    };
}
module.exports = sendEmail; 