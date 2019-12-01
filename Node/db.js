const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/CrudDB',{ useNewUrlParser: true }, (err)=> {
    if(!err)
        console.log('MongoDb connection succeeded.');
    else
        console.log('Error in DB connection : '+ JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;