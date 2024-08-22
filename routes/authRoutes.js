import { Router } from "express"
import passport from "passport";
import { ensureAuthenticated } from "../utils/ensureAuthenticated.js"

const router = Router();

  router.get("/github",passport.authenticate('github', { scope: [ 'user:email' ] }));

  router.get("/github/callback", passport.authenticate('github', { failureRedirect: process.env.CLIENT_URL+'/login' }),
    function(req, res) {
      res.redirect(process.env.CLIENT_URL);
    });

  router.get("/check", (req, res) => {
    if (req.isAuthenticated()) {
      res.send({ user: req.user });
    } else {
      res.send({ user: null });
    }
  });
    
  router.get("/logout",async (req, res) => {
    
    req.session.destroy((err) => {
      res.clearCookie('connect.sid');
      // Don't redirect, just print text
      res.json({message:'Logged out'});
    });
    });
     
        


export default router;

