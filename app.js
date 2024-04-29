import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/IST256Solo2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true
}).then(() =>  {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("error connecting to MongoDB",err);

});

app.use('/users',userRouter);

app.listen(port, () => {
    console.log("Server is running");
})
