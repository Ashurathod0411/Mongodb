
const express = require("express");
const quotesItemsModel = require("../Models/quotesItemsModel");

const router = express.Router();
router.post("/create", async function (request, response) {
    //console.log("request.body", request.body);
    try {
        const dataBaseCreationResponse = await quotesItemsModel.create(request.body);
        //console.log("dataBaseCreationResponse", dataBaseCreationResponse);
        response.send ({ result : "Success" });
        } catch (error) {
        console.log(" error occured ", err);
      }
    });

    router.get("/getAll", async function (request, response) {
        try {
          const listOfquotesItems = await quotesItemsModel.find({}, { __v: 0, _id: 0 });
          //console.log("data from database", listOfquotesItems);
          response.send({ result: listOfquotesItems });
        } catch (error) {
          console.log("error occured", err);
        }
      });

module.exports = router;
