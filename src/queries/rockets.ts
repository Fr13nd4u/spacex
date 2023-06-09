import { gql } from '@apollo/client'

export const getRockets = gql`
query ExampleQuery {
  rockets {
    id
    description
    name
  }
}
`
export interface IRocket {
  id: string
  description: string
  name: string
  photo: string
  isFavourite: boolean
}
