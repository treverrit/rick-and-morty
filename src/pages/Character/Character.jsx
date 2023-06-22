import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharQuery } from '../../hooks/QueryHooks'
import './character.css'

function Character() {
  const {id} = useParams()
  const {data, loading, error} = useCharQuery(id)

  if (loading) {return <p>loading</p>}
  if (error) {return <p>something went wrong</p>}

  console.log(data)

  return (
    <div className='character'>
      <div className="characteristics">
        <img src={data.character.image} alt="" className='char-image'/>
        <h1 className='char-name'>{data.character.name}</h1>
        <div className="char-stats">
          <p className='char-stat'>Gender: <b>{data.character.gender}</b></p>
          <p className='char-stat'>Location: <b>{data.character.location.name}</b></p>
          <p className='char-stat'>Origin: <b>{data.character.origin.name}</b></p>
        </div>
      </div>
      <div className="episodes">
        {data.character.episode.map((episode, index) => (
          <p key={index} className='episode'>{episode.name} - <b>{episode.episode}</b></p>
        ))}
      </div>
    </div>
  )
}

export default Character
