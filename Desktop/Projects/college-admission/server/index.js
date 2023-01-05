import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import applyRouter from "./routes/applies.js";


const app = express();

app.use(morgan("dev"));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: "true"}));
app.use(cors());
app.use(cookieParser());

app.use("/users", userRouter); // http://localhost:5000/users/signup

app.use("/applies", applyRouter); // http://localhost:5000/applies


const MONGODB_URL = "mongodb+srv://demo:Demo_123@cluster0.goiqzan.mongodb.net/college_db?retryWrites=true&w=majority"

const port = 5000;

mongoose
    .set('strictQuery', true)
    .connect(MONGODB_URL)
    .then(() => {
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
