import { useState, useEffect } from 'react'

export default function Personal(){

    const [people, setPeople] = useState('')

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => setPeople(data))
    } , [])

    return (
        <div>

        </div>
    )
}