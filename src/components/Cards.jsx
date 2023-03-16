import Card from './Card';
import Styled from "styled-components"


const Wallpaper = Styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 flex-wrap: wrap;
`

export default function Cards({characters, onClose}) {
   return (
   <Wallpaper>
      {characters.map((character) => <Card character={character} onClose={onClose}/>)}
   </Wallpaper>
   )

}
