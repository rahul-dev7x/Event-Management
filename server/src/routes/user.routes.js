import express from "express";
import { eventOrgLogout, login,  signInWithGoogle,  signUp, userLogout } from "../controller/user.cotroller.js";


const route=express.Router();


route.post("/register",
    signUp)
route.post("/login",login)
route.post("/user-logout",
    userLogout)
route.post("/event-org-logout",
    eventOrgLogout)
route.post("/google",signInWithGoogle)

export default route;