// connect mongoose to the db
// later when we use mongoose somewhere else, it will already be connected

const mongoose = require('mongoose');

let connectionString = `mongodb+srv://renethedeveloper:${process.env.MONGO_PASS}@cluster0.xyl9n2y.mongodb.net/Food?retryWrites=true&w=majority`
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to DATABASE');
})
.catch((error) => {
    console.error('Connection to DATABASE failed:', error);
});
