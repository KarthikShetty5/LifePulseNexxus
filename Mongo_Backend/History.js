const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    token: String,
    histories: [{
        disease: String,
        hospital: String,
        desc: String,
        amount: Number
    }]
}, {
    collection: "HistoryInfo",
}
);

mongoose.model("HistoryInfo", HistorySchema)