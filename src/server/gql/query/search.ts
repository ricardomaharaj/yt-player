import { builder } from "~/server/gql/builder"
import { ytFetch } from "~/server/util/yt-fetch"
import { GQL_API } from "~/type/graphql-api"
import { YouTube_API } from "~/type/youtube-api"

builder.queryFields((t) => ({
	search: t.field({
		type: ["SearchResult"],
		args: {
			q: t.arg.string({ required: true }),
			channelId: t.arg.string(),
			type: t.arg.string({
				description: "channel|playlist|video",
				defaultValue: "video",
			}),
		},
		resolve: async (_, args) => {
			if (!args.q) return []

			const params = new URLSearchParams({
				q: args.q,
				part: "snippet",
				maxResults: "24",
				type: args.type || "video",
			})

			if (args.channelId) params.append("channelId", args.channelId)

			const res = await ytFetch<YouTube_API.SearchListResponse>(
				"/search",
				params,
			)

			const data: GQL_API.SearchResult[] = res.items.map((x) => ({
				// ID
				playlistId: x.id.playlistId,
				videoId: x.id.videoId,

				// SNIPPET
				channelId: x.snippet.channelId,
				channelTitle: x.snippet.channelTitle,
				description: x.snippet.description,
				liveBroadcastContent: x.snippet.liveBroadcastContent,
				publishedAt: x.snippet.publishedAt,
				thumbnailUrl: x.snippet.thumbnails.medium.url,
				title: x.snippet.title,
			}))

			return data
		},
	}),
}))
