const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");


//[Section] Router Instance
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');
const forTeachersRoutes = require('./routes/forteachers');
const aboutUsRoutes = require('./routes/aboutus');
const forSchoolsRoutes = require('./routes/forschools');


const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect('mongodb+srv://vitaledglobal:Mekraphone1333@vitaleddb.qhgnlda.mongodb.net/VitalEdCollection?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));


//[Section] routes

app.use("/home", homeRoutes);
app.use("/users", userRoutes);
app.use("/aboutus", aboutUsRoutes);
app.use("/forschools", forSchoolsRoutes);
app.use("/forteachers", forTeachersRoutes);


if(require.main === module){
	app.listen(process.env.PORT || port, () => {
		console.log(`API is now online on port ${ process.env.PORT || port}`)
	})
}

module.exports = {app, mongoose};