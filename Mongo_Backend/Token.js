const mongoose = require('mongoose')

const TokenSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    token: String
}, {
    collection: "TokenInfo",
}
);

mongoose.model("TokenInfo", TokenSchema)