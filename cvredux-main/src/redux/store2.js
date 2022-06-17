import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./education/education.reducer";
import experienceReducer from "./experience/experience.reducer";


const store2 = configureStore({
    reducer:{
        education: educationReducer,
        experience: experienceReducer
    }
})

export default store2;
