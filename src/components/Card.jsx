import Styled from "styled-components"
import { Link } from "react-router-dom"

const CharacterCard = Styled.div`
 margin-top: 5rem;
 margin: auto; 
`
const CharacterImage = Styled.img`
 border: 0.5rem solid #d929ef;
 box-shadow: 1rem 1rem 2rem;
 border-radius: 2rem;
 margin-top: 1rem;
`
const XButton = Styled.button`
 border-radius: 2rem;
`
const CharacterName = Styled.h2`
 box-shadow: 1rem 1rem 2rem;
 border-radius: 10rem
 font-style: italic;
 font-size: xx-large;
 margin-top: 0.3rem;
`
const CharacterSpecies = Styled.h2`
 margin-top: 0.3rem;
 font-size: x-large;
 text-shadow: 1.5rem 1.5rem 1rem;
`
const CharacterGender = Styled.h2`
 margin-top: 0.3rem;
 font-size: large;
 text-shadow: 1.5rem 1.5rem 1rem;
`

export default function Card({character, onClose}) {
   return (
      <CharacterCard>
         <XButton onClick = {() => onClose(character.id)}>X</XButton>
         <Link to = {`/detail/${character.id}`}>
         <CharacterName>{character.name}</CharacterName>
         </Link>
         <CharacterSpecies>{character.species}</CharacterSpecies>
         <CharacterGender>{character.gender}</CharacterGender>
         <CharacterImage  src={character.image} alt="No Pudimos Cargar la Imagen." />
      </CharacterCard>
   );
}
         

