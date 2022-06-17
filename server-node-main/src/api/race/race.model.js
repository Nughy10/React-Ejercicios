const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const raceSchema = new Schema({
    name: {type: String, required: true, trim: true},
    environment: {type: String, required: false, trim: true}
},
{
    timestamps:true
})

const Race = mongoose.model('race', raceSchema);
module.exports = Race;