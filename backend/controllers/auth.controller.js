import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req,res) {
    try {
        const {email, password, username} = req.body;

        if(!email || !password || !username) {
            return res.status(400).json({message:"All fields are required!"})
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

        if(!emailRegex.test(email)) {
            return res.status(400).json({message:"Invalid email!"})
        }

        if(password.length < 6){
            return res.status(400).json({message:"Password must be at least 6 characters"})
        }

        const existingUserByEmail = await User.findOne({email:email})

        if (existingUserByEmail) {
            return res.status(400).json({message:"Email already exists"})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const existingUsername = await User.findOne({username:username})

        if (existingUsername) {
            return res.status(400).json({message:"Username already exists"})
        }

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new User({
            email,
            password: hashedPassword,
            username,
            image
        });

        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({message:"Created User",
            user: {
                ...newUser._doc,
                password:""
            }
        })



    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function login(req,res) {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message:"All fields are required"});
        }

        const user = await User.findOne({email: email});
        if(!user) {
            return res.status(404).json({message:"Invalid email or password"});
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({message:"Invalid email or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            success: true,
            user: {
                ...user._doc,
                password:""
            }
        })
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function logout(req,res) {
    try {
        res.clearCookie("jwt-netflix");
        res.status(200).json({message: "Logout out successfuly"})
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function authCheck(req,res) {
    try {
        console.log("req.user:", req.user);
        res.status(200).json({user: req.user});
    } catch (error) {
        console.log("Error in authCheck controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
