import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'


function App () {
  const [characters, setcharacters] = useState([]);

  function onSearch(characters) {
    const URL = "https://be-a-rym.up.railway.app/api"
    const KEY = "d662fbd831aa.d15e2628b0121dcce1e5"

    fetch(`${URL}/character/${characters}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
             setcharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }
  
  const onClose = (id) =>{
    setcharacters(characters.filter((people) => people.id !== id))  
  }

  return (
    <div className='App' style={{ padding: "0px", backgroundImage: 'url("https://www.nawpic.com/media/2020/rick-and-morty-nawpic-60.jpg")', backgroundAttachment: "fixed", backgroundSize: "cover", minHeight: "1000px"}}>
     <div><Nav onSearch = {onSearch}></Nav></div>
      <Routes>
        <Route path = "/" element = {<Form />}/> 
        <Route path = "/home" element = {<Cards characters={characters} onClose={onClose}/>}/>
        <Route path = "/about" element = {<About/>}/> 
        <Route path = "detail/:detailId" element = {<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
    


      
  










