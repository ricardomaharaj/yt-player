import { builder } from "~/server/gql/builder"
import { ytFetch } from "~/server/util/yt-fetch"
import { GQL_API } from "~/type/graphql-api"
import { YouTube_API } from "~/type/youtube-api"

builder.queryFields((t) => ({
	playlist: t.field({
		type: ["PlaylistItem"],
		args: {
			playlistId: t.arg.string({ required: true }),
		},
		resolve: async (_, args) => {
			if (!args.playlistId) return []

			const params = new URLSearchParams({
				part: "snippet",
				playlistId: args.playlistId,
				maxResults: "24",
			})

			const res = await ytFetch<YouTube_API.PlaylistItemListResponse>(
				`/playlistItems`,
				params,
			)

			const data: GQL_API.PlaylistItem[] = res.items.map((x) => ({
				// SNIPPET
				channelId: x.snippet.channelId,
				channelTitle: x.snippet.channelTitle,
				description: x.snippet.description,
				playlistId: x.snippet.playlistId,
				position: x.snippet.position,
				publishedAt: x.snippet.publishedAt,
				thumbnailUrl: x.snippet.thumbnails.medium.url,
				title: x.snippet.title,
				videoOwnerChannelId: x.snippet.videoOwnerChannelId,
				videoOwnerChannelTitle: x.snippet.videoOwnerChannelTitle,

				videoId: x.snippet.resourceId.videoId,
			}))

			return data
		},
	}),
}))
