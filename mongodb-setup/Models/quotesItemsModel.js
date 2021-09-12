const mongoose = require("mongoose");

const quotesItemsSchema = new mongoose.Schema(
    {
        quote: String,
        author: String,
    },
    {
        collection: "quotesItemsCollection",
    }
);

const quotesItemsModel = mongoose.model("quotesItems", quotesItemsSchema);
module.exports = quotesItemsModel;