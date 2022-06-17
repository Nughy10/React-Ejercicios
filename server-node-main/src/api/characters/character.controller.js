const Character = require('./character.model');

//Obtenemos todos los caracteres
const getAllCharacters = async (req, res, next) => {
    try {
        const characters = await Character.find().populate('race');
        return res.status(200).json(characters);
    } catch (error) {
        return next(error);
    }
}

//obtenemos un caracter por id
const getCharacter = async (req, res, next) => {
    try {
        const {id} = req.params;
        const character = await Character.findById(id).populate('race');  //Populamos por raza para recibir los atributos de la raza
        if(!character){
            const error = new Error("No character found by this id");
            error.status = 404;
            return next(error);       
        }
        return res.status(200).json(character);
    } catch (error) {
        return next(error);
    }
}

//Creamos un nuevo caracter
const postNewCharacter = async (req, res, next) => {
    try {
        const newCharacter = new Character(req.body);   //Req.body coge los elementos del cuerpo del mensaje
        // newCharacter.name = req.body.name;
        // newCharacter.race = req.body.race;
        // newCharacter.weapon = req.body.weapon;
        // newCharacter.image = req.body.image;

        const characterDB = await newCharacter.save();  //Guardamos el nuevo character en BBDD
        return res.status(201).json(characterDB);
    } catch (error) {
        return next(error);
    }
}

//Actualizamos un caracter
const putCharacter = async (req, res, next) => {
    try {
        const {id} = req.params;
        const putCharacter = new Character(req.body);
        putCharacter._id = id;
        const characterDB = await Character.findByIdAndUpdate(id, putCharacter);
        if(!characterDB){
            const error = new Error("No character found by this id");
            error.status = 404;
            return next(error);  
        }
        return res.status(200).json(characterDB);
    } catch (error) {
        return next(error);
    }

}

//Borramos un caracter
const deleteCharacter = async (req, res, next) => {
    try {
        const {id} = req.params;
        const characterDB = await Character.findByIdAndDelete(id);
        if(!characterDB){
            const error = new Error("No character found by this id");
            error.status = 404;
            return next(error);  
        }
        return res.status(200).json(characterDB);
    } catch (error) {
        return next(error);
    }
}


module.exports = {
    getAllCharacters,
    getCharacter,
    postNewCharacter,
    putCharacter,
    deleteCharacter
}