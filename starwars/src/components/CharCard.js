import React, { useState, useEffect} from "react";
import axios from "axios";
import CharacterList from "./CharacterList";


export default function CharacterNames(){
    const [charName, setName] = useState([]);
    console.log(setName);
    useEffect(() =>{
        axios.get("https://swapi.co/api/people/")
        .then(response =>{
            setName(response.data.results);

        })
        .catch(error =>{
            console.log(error);
        })
    },[])

    return(
        <div>
            {charName.map((character)=>{
                return(
                    <CharacterList
                        name = {character.name}
                        gender = {character.gender}
                        height = {character.height}
                        mass = {character.mass}
                    />
                )}
            )}
        </div>
    );
};

