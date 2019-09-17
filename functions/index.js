const functions = require("firebase-functions");
const app = require("express")();
const {getAllScreams, postOneScream} = require('./handlers/screams');
const {signUp, signIn, uploadImage} = require('./handlers/users');
const FBAuth = require('./util/fbAuth');


// Scream Routes
app.get("/screams", FBAuth, getAllScreams);
app.post("/scream", FBAuth, postOneScream);

// User Routes
app.post("/signup", signUp);
app.post("/signin", signIn);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);
