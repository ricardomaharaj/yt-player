import { gql } from "urql"
import { GQL_API } from "~/type/graphql-api"

type Data = {
	playlist: GQL_API.PlaylistItem[]
}

type Vars = {
	playlistId: string
}

export const PLAYLIST_QUERY = gql<Data, Vars>`
  query ($playlistId: String!) {
    playlist(playlistId: $playlistId) {
      channelId
      channelTitle
      position
      publishedAt
      thumbnailUrl
      title
      videoId
      videoOwnerChannelId
      videoOwnerChannelTitle
    }
  }
`
