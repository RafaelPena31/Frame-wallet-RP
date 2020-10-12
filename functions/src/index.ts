import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import express = require("express");

const app: express.Application = express();

admin.initializeApp();
const db = admin.firestore();
/* Users */
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

app.put("/users", (request, response) => {
  db.collection("/users")
    .doc(request.body.uid)
    .update({
      walletId: request.body.walletId,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});
/* Wallets */
app.post("/wallet", (request, response) => {
  db.collection("wallets")
    .doc(request.body.uid)
    .set({
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
app.put("/walletAdd", (request, response) => {
  db.collection("/wallets")
    .doc(request.body.uid)
    .update({
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
app.put("/walletSell", (request, response) => {
  db.collection("wallet");

  db.collection("/wallets")
    .doc(request.body.uid)
    .update({
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

export const api = functions.https.onRequest(app);
