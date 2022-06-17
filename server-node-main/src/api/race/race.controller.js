const Race = require('./race.model');

// Obtenemos todos los races
const getAllRaces = async (req, res, next) => {
    try {
        const races = await Race.find();
        return res.status(200).json(races);
    } catch (error) {
        return next(error);
    }
}

//obtenemos un race por id
const getRace = async (req, res, next) => {
    try {
        const {id} = req.params;
        const race = await Race.findById(id);
        if(!race){
            const error = new Error("No race found by this id");
            error.status = 404;
            return next(error);       
        }
        return res.status(200).json(race);
    } catch (error) {
        return next(error);
    }
}


//Creamos un nuevo race
const postNewRace = async (req, res, next) => {
    try {
        const newRace = new Race(req.body);   //Req.body coge los elementos del cuerpo del mensaje
        const raceDB = await newRace.save();  //Guardamos el nuevo race en BBDD
        return res.status(201).json(raceDB);
    } catch (error) {
        return next(error);
    }
}

//Actualizamos un race
const putRace = async (req, res, next) => {
    try {
        const {id} = req.params;
        const putRace = new Race(req.body);
        putRace._id = id;
        const raceDB = await Race.findByIdAndUpdate(id, putRace);
        if(!raceDB){
            const error = new Error("No race found by this id");
            error.status = 404;
            return next(error);  
        }
        return res.status(200).json(raceDB);
    } catch (error) {
        return next(error);
    }

}

//Borramos un race
const deleteRace = async (req, res, next) => {
    try {
        const {id} = req.params;
        const raceDB = await Race.findByIdAndDelete(id);
        if(!raceDB){
            const error = new Error("No race found by this id");
            error.status = 404;
            return next(error);  
        }
        return res.status(200).json(raceDB);
    } catch (error) {
        return next(error);
    }
}


module.exports = {
    getAllRaces,
    getRace,
    postNewRace,
    putRace,
    deleteRace
}