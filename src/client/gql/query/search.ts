import { gql } from "urql"
import { GQL_API } from "~/type/graphql-api"

type Data = {
	search: GQL_API.SearchResult[]
}

type Vars = {
	channelId?: string
	q: string
	type?: string
}

export const SEARCH_QUERY = gql<Data, Vars>`
  query ($q: String!, $channelId: String, $type: String) {
    search(q: $q, channelId: $channelId, type: $type) {
      channelId
      channelTitle
      description
      playlistId
      publishedAt
      thumbnailUrl
      title
      videoId
    }
  }
`
