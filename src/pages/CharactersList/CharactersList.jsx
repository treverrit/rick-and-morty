import React from 'react'
import { useCharListQuery } from '../../hooks/QueryHooks'
import './charactersList.css'
import { Link } from 'react-router-dom'


function CharacterCard({character}) {
  return (
    <div className="character-card">
      <Link to={`/${character.id}`} className='character-link'>
        <img src={character.image} alt="" className='image'/>
        <h2 className='name'>{character.name}</h2>
      </Link>
    </div>
  )
}

function CharactersList() {
  const {error, loading, data} = useCharListQuery()

  if (loading) {return <p>spinner</p>}
  if (error) {return <p>Something went wrong</p>}

  return (
    <div className='characters'>
      {data.characters.results.map((character, index) => (
        <CharacterCard character={character} key={index} />
      ))}
    </div>
  )
}

export default CharactersList
