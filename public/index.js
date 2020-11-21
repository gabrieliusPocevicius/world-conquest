const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

db.collection("users")
    .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

//add another

db.collection("users")
    .add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

db.collection("users")
    .get()
    .then((querySnapshot) => {
        querySnapshot.foreach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });