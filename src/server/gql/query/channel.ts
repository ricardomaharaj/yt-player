import { builder } from "~/server/gql/builder"
import { ytFetch } from "~/server/util/yt-fetch"
import { GQL_API } from "~/type/graphql-api"
import { YouTube_API } from "~/type/youtube-api"

builder.queryFields((t) => ({
	channel: t.field({
		type: "Channel",
		args: {
			channelId: t.arg.string({ required: true }),
		},
		resolve: async (_, args) => {
			if (!args.channelId) return {}

			const params = new URLSearchParams({
				part: "snippet,contentDetails,statistics",
				id: args.channelId,
			})

			const res = await ytFetch<YouTube_API.ChannelListResponse>(
				`/channels`,
				params,
			)
			const item = res.items.at(0)!

			const data: GQL_API.Channel = {
				// SNIPPET
				country: item.snippet.country,
				customUrl: item.snippet.customUrl,
				defaultLanguage: item.snippet.defaultLanguage,
				description: item.snippet.description,
				publishedAt: item.snippet.publishedAt,
				thumbnailUrl: item.snippet.thumbnails.medium.url,
				title: item.snippet.title,

				// CONTENT DETAILS
				uploadsPlaylist: item.contentDetails.relatedPlaylists.uploads,

				// STATISTICS
				hiddenSubscriberCount: item.statistics.hiddenSubscriberCount,
				subscriberCount: item.statistics.subscriberCount,
				videoCount: item.statistics.videoCount,
				viewCount: item.statistics.viewCount,
			}

			return data
		},
	}),
}))
