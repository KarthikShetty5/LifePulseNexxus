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

        res.send({ status: 'Ok', data: "User Created along with token", code: 200 })
    } catch (error) {
        res.send({ status: "error", data: error, code: 400 })
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.send({ status: 'error', message: 'User not found', code: 401, token: null });
        }
        if (password != user.password) {
            return res.send({ status: 'error', message: 'Incorrect password', code: 401, token: null });
        }
        const token = await Token.findOne({ email });
        res.send({ status: 'Ok', data: user, code: 200, token: token });
    } catch (error) {
        res.send({ status: 'error', message: 'Internal server error', code: 400 });
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


app.post('/getHistory', async (req, res) => {
    const { token } = req.body;
    try {
        const history = await History.findOne({ token: token });
        if (!history) {
            return res.send({ status: 'error', message: 'History not found for the given token', code: 401 });
        }
        res.send({ status: 'Ok', data: history, code: 200 });
    } catch (error) {
        res.send({ status: "error", data: error, code: 400 })
    }
});

app.listen(5001, () => {
    console.log('listening on port 5001')
})