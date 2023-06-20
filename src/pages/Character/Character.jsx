import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharQuery } from '../../hooks/QueryHooks'

function Character() {
  const {id} = useParams()
  const {data, loading, error} = useCharQuery(id)

  if (loading) {return <p>loading</p>}
  if (error) {return <p>something went wrong</p>}

  console.log(data)

  return (
    <div>
      <img src={data.character.image} alt="" />
      <h1>{data.character.name}</h1>
      <h3>{data.character.gender}</h3>
      {data.character.episode.map((episode, index) => (
        <p key={index}>{episode.name} - <b>{episode.episode}</b></p>
      ))}
    </div>
  )
}

export default Character
