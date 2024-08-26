import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import "dotenv/config"


import User from "../models/userModel.js";


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://gitinsight-server.onrender.com/api/auth/github/callback"
  },
   function(accessToken, refreshToken, profile, done) {
    
    process.nextTick(async function () {

      let user = await User.findOne({username:profile.username});
      //signup
      if(!user){
        user = new User ({
          username:profile.username,
          name:profile.displayName,
          profileUrl:profile.profileUrl,
          avatarUrl:profile._json.avatar_url,
          likedBy:[],
          likedProfiles:[],
        })
        await user.save();
      }
      console.log(user)
      return done(null, user);
    });
  }
));