require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const hostelRoutes = require('./routes/hostels')
const userRoutes = require('./routes/user')
const bookingRoutes = require('./routes/bookingRoutes')
const custodianRoutes = require('./routes/custodian')
const cors = require('cors');  

const corsOpts = {
    origin: 'https://muafs-frontend.vercel.app',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};

app.use(cors(corsOpts));

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//routes
app.use('/api/hostels', hostelRoutes)
app.use('/api/user', userRoutes)
app.use('/:_id/booking', bookingRoutes);
app.use('/api/custodian', custodianRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port ',process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })