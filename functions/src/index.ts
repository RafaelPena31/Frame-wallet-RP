import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import express = require("express");

const app: express.Application = express();

admin.initializeApp();
const db = admin.firestore();

app.post("/wallets", (request, response) => {
  db.collection("wallets")
    .add({
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
  db.collection("users")
    .doc(request.body.uid)
    .set({
      email: request.body.email,
      id: request.body.uid,
      name: request.body.name,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});

export const api = functions.https.onRequest(app);
