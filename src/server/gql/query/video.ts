import { builder } from "~/server/gql/builder"
import { ytFetch } from "~/server/util/yt-fetch"
import { GQL_API } from "~/type/graphql-api"
import { YouTube_API } from "~/type/youtube-api"

builder.queryFields((t) => ({
	video: t.field({
		type: "Video",
		args: {
			videoId: t.arg.string({ required: true }),
		},
		resolve: async (_, args) => {
			if (!args.videoId) return {}

			const params = new URLSearchParams({
				part: "snippet,contentDetails,statistics",
				id: args.videoId,
			})

			const res = await ytFetch<YouTube_API.VideoListResponse>(
				`/videos`,
				params,
			)
			const item = res.items.at(0)!

			const data: GQL_API.Video = {
				// SNIPPET
				categoryId: item.snippet.categoryId,
				channelId: item.snippet.channelId,
				channelTitle: item.snippet.channelTitle,
				defaultAudioLanguage: item.snippet.defaultAudioLanguage,
				defaultLanguage: item.snippet.defaultLanguage,
				description: item.snippet.description,
				liveBroadcastContent: item.snippet.liveBroadcastContent,
				publishedAt: item.snippet.publishedAt,
				tags: item.snippet.tags,
				thumbnailUrl: item.snippet.thumbnails.medium.url,
				title: item.snippet.title,

				// CONTENT DETAILS
				caption: item.contentDetails.caption,
				definition: item.contentDetails.definition,
				dimension: item.contentDetails.dimension,
				duration: item.contentDetails.duration,
				hasCustomThumbnail: item.contentDetails.hasCustomThumbnail,
				licensedContent: item.contentDetails.licensedContent,
				projection: item.contentDetails.projection,

				// STATISTICS
				commentCount: item.statistics.commentCount,
				dislikeCount: item.statistics.dislikeCount,
				favoriteCount: item.statistics.favoriteCount,
				likeCount: item.statistics.likeCount,
				viewCount: item.statistics.viewCount,
			}

			return data
		},
	}),
}))
