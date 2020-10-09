import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import express = require("express");

const app: express.Application = express();

admin.initializeApp();
const db = admin.firestore().collection("wallets");

app.post("/wallets", (request, response) => {
  db.add({
    id: request.body.uid,
    coins: request.body.coins,
    totalValue: request.body.totalValue,
  })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});

app.post("/users", (request, response) => {
  db.add({
    email: request.body.email,
    id: request.body.id,
    name: request.body.name,
    walletId: request.body.walletId,
  })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});

export const api = functions.https.onRequest(app);
