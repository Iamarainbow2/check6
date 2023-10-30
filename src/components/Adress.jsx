import { useState, useEffect } from 'react'
import React from 'react'


export default function Adress(){

    const [people, setPeople] = useState('')

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => setPeople(data))
    } , [])

    return (
        <div>
            {people.id}
        </div>
    )
}