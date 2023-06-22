import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
query {
  characters {
    results {
      id
      name
      image
    }
  }
}
`
const GET_CHARACTER = gql`
query GetCharacter($id: ID!) {
  character(id: $id) {
    name
    id
    image
    gender
    episode {
      name
      episode
    }
    location {
      name
    }
    origin {
      name
    }
  }
}
`

const useCharListQuery = () => {
    const {data, loading, error} = useQuery(GET_CHARACTERS)

    return {data, loading, error}
}

const useCharQuery = (id) => {
    const {data, loading, error} = useQuery(GET_CHARACTER, {variables: {id}})

    return {data, loading, error}
}

export {useCharListQuery, useCharQuery}