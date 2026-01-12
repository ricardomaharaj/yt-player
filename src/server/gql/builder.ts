import Builder from "@pothos/core"
import { GQL_API } from "~/type/graphql-api"

type TBuilder = {
	Objects: {
		Channel: GQL_API.Channel
		Comment: GQL_API.Comment
		PlaylistItem: GQL_API.PlaylistItem
		SearchResult: GQL_API.SearchResult
		Video: GQL_API.Video
	}
}

export const builder = new Builder<TBuilder>({})

builder.queryType({})
