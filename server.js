const express = require("express")
const sendEmail = require('./utils/sendemail')

const app = express();

const PORT = process.env.PORT || 5000;

//set engine
app.set("view engine", 'ejs')

//serving static asset
app.use(express.static("public"))

//pass data from form
app.use(express.urlencoded({ extended: false }))


//route to render  email form 
app.get('/', (req, res) => {
    res.render('emailform')

})

//route to send mail
app.post('/send-email', async (req, res) => {
    try {
        const { email, message } = req.body
        await sendEmail(email, message)
        res.render('emailform', {
            status: 'success',
            message: "email sent successfully"
        });
    } catch (error) {
        res.status(500).render('emailform', {
            status: 'error',
            message: "error sending email",
        });
    }

});


app.listen(PORT, console.log('server running'))

//to start app
// http://localhost:5000/send-email
