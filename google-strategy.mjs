import google from "passport-google-oauth2";

const {Strategy} = google;

export default function googleStrategy({clientID, clientSecret, callbackURL}) {
    if (callbackURL instanceof URL) callbackURL = String(callbackURL);

    return new Strategy({clientID, clientSecret, callbackURL}, verify);

    function verify(token, refresh, profile, done) {
        const user = {google: profile._json};
        done(null, user);
    }
}
