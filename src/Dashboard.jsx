import { useState, useEffect } from 'react'
import React from 'react'
import Adress from './components/Adress'
import Personal from './components/Personal'
import {Link, useNavigate} from 'react-router-dom'


export default function Dashboard(){

    const [people, setPeople] = useState('')

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => setPeople(data))
    } , [])

   const [inputvalue, setInputValue] = useState("")

   function handleChange(e) {
    const {name, value} = e.target;
    setInputValue(value)
   }

    return (
        <div>
            <input name="id" type='number' placeholder='id' onChange={handleChange}/>
            <button >{<Link to={`/personal/${inputvalue}`}>Personal</Link>}</button>
            <button >{<Link to={`/adress/${inputvalue}`}>Adress</Link>}</button>
        </div>
    )
}