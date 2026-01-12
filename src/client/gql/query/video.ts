import { gql } from "urql"
import { GQL_API } from "~/type/graphql-api"

type Data = {
	video: GQL_API.Video
}

type Vars = {
	videoId: string
}

export const VIDEO_QUERY = gql<Data, Vars>`
  query ($videoId: String!) {
    video(videoId: $videoId) {
      channelId
      channelTitle
      description
      likeCount
      publishedAt
      thumbnailUrl
      title
      viewCount
    }
  }
`
