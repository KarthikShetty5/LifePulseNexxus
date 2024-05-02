const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
require('./UserDetails')
require('./Token')
require('./History')

const User = mongoose.model("UserInfo")
const Token = mongoose.model("TokenInfo")
const History = mongoose.model("HistoryInfo")

const mongoUrl = "mongodb+srv://karthik:karthiks563@cluster0.maawpue.mongodb.net/LifePulse?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl).then(() => {
    console.log("Connected to MongoDB")
}).catch((e) => {
    console.log(e)
})

app.post('/register', async (req, res) => {
    const { name, email, mobile, password } = req.body;
    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
        return res.send({ data: "User already exists !!" })
    }
    try {
        await User.create({
            name: name,
            email: email,
            mobile: mobile,
            password: password
        });
        await Token.create({
            email: email,
            token: Array.from({ length: 5 }, () => Math.random().toString(36).charAt(2)).join('')
        });

        res.send({ status: 'Ok', data: "User Created along with token" })
    } catch (error) {
        res.send({ status: "error", data: error })
    }
});

app.get('/login', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        res.send({ status: 'Ok', data: user });
    } catch (error) {
        res.send({ status: "error", data: error })
    }
});

app.get('/token', async (req, res) => {
    const { email } = req.body;
    try {
        const token = await Token.findOne({ email: email });
        res.send({ status: 'Ok', data: token });
    } catch (error) {
        res.send({ status: "error", data: error })
    }
});


app.post('/addHistory', async (req, res) => {
    const { token, disease, hospital, desc, amount } = req.body;
    const tok = await Token.findOne({ token: token });
    if (!tok) {
        return res.send({ data: "Invalid token !!" })
    }
    try {
        let user = await History.findOne({ token: token });
        if (!user) {
            user = await History.create({ token: token, histories: [] });
        }
        user.histories.push({ disease: disease, hospital: hospital, desc: desc, amount: amount });
        await user.save();
        res.send({ status: 'Ok', data: "History added" });
    } catch (error) {
        res.send({ status: "error", data: error })
    }
});


app.get('/getHistory', async (req, res) => {
    const { token } = req.body;
    try {
        const history = await History.findOne({ token: token });
        res.send({ status: 'Ok', data: history });
    } catch (error) {
        res.send({ status: "error", data: error })
    }
});

app.listen(5001, () => {
    console.log('listening on port 5001')
})