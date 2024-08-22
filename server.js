import express from "express"
import cookieParser from "cookie-parser";
import 'dotenv/config'
import cors from "cors"

import userRoutes from "./routes/userRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import { connectToDB } from "./db/db.config.js";

import "./Passport/githubAuth.js"
import session from "express-session";
import passport from "passport";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With'],
    credentials: true,
    sameSite: 'none',
  }));
  

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);
app.use("/api/auth",authRoutes)


app.listen(5000,()=>{
    console.log(`server running on port ${5000}` )
    connectToDB()
})