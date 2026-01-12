import { gql } from "urql"
import { GQL_API } from "~/type/graphql-api"

type Data = {
	channel: GQL_API.Channel
}

type Vars = {
	channelId: string
}

export const CHANNEL_QUERY = gql<Data, Vars>`
  query ($channelId: String!) {
    channel(channelId: $channelId) {
      subscriberCount
      thumbnailUrl
      title
      uploadsPlaylist
      videoCount
      viewCount
    }
  }
`
