import { useQuery, gql } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'

const GET_CHARACTER = gql`
query GetCharacter($id: ID!) {
  character(id: $id) {
    name
    id
    image
    episode {
      name
      episode
    }
  }
}
`

function Character() {
  const {id} = useParams()
  const {data, loading, error} = useQuery(GET_CHARACTER, {variables: {id}})

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
