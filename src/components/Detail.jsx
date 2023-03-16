import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        const URL = "https://be-a-rym.up.railway.app/api"
        const KEY = "d662fbd831aa.d15e2628b0121dcce1e5"

        axios(`${URL}/character/${detailId}?key=${KEY}`)
        .then((response) => setCharacter(response.data))
        
    }, [])

    return(
        <div>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src = {character.image} alt= "No pudimos cargar la imagen."/>
        </div>
    )
}

export default Detail;
        

