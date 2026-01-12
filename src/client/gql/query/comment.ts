import { gql } from "urql"
import { GQL_API } from "~/type/graphql-api"

type Data = {
	comment: GQL_API.Comment[]
}

type Vars = {
	videoId: string
}

export const COMMENT_QUERY = gql<Data, Vars>`
  query ($videoId: String!) {
    comment(videoId: $videoId) {
      authorChannelId
      authorChannelUrl
      authorDisplayName
      authorProfileImageUrl
      channelId
      likeCount
      publishedAt
      textDisplay
    }
  }
`
