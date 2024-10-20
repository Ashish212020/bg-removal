import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'


// App config
const PORT =process.env.PORT || 4000
const app =express()
await connectDB()

// Intialize Middlewares
app.use(express.json())
app.use(cors())

// api routes
app.get('/',(req,res)=>res.send("API Working fine"))
app.use('/api/user',userRouter)

app.listen(PORT,()=> console.log("Server Running on port" +PORT))
