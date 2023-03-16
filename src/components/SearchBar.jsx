import Styled from "styled-components"
import { useState } from "react"

const Bar = Styled.div`
 border: 2px solid black;
`
const AtBar = Styled.input`
 border: 2px solid black;
`
const ButtonBar = Styled.button`
 border: 2px solid black;
`

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };


   return (
      <Bar>
         <AtBar type='search' onChange = {(event) => handleChange(event)} />
      <ButtonBar onClick={() => onSearch(id)}>Agregar</ButtonBar>
      </Bar>
   );
}
