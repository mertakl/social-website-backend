const functions = require("firebase-functions");
const app = require("express")();
const {getAllScreams, postOneScream} = require('./handlers/screams');
const {signUp, signIn} = require('./handlers/users');
const FBAuth = require('./util/fbAuth');


// Scream Routes
app.get("/screams", FBAuth, getAllScreams);
app.post("/scream", FBAuth, postOneScream);

// User Routes
app.post("/signup", signUp);
app.post("/signin", signIn);

exports.api = functions.region("europe-west1").https.onRequest(app);
