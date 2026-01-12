import { builder } from "~/server/gql/builder"

builder.objectType("Video", {
	fields: (t) => ({
		// SNIPPET
		categoryId: t.exposeString("categoryId"),
		channelId: t.exposeString("channelId"),
		channelTitle: t.exposeString("channelTitle"),
		defaultAudioLanguage: t.exposeString("defaultAudioLanguage"),
		defaultLanguage: t.exposeString("defaultLanguage"),
		description: t.exposeString("description"),
		liveBroadcastContent: t.exposeString("liveBroadcastContent"),
		publishedAt: t.exposeString("publishedAt"),
		tags: t.exposeStringList("tags"),
		thumbnailUrl: t.exposeString("thumbnailUrl"),
		title: t.exposeString("title"),

		// CONTENT DETAILS
		caption: t.exposeString("caption"),
		definition: t.exposeString("definition"),
		dimension: t.exposeString("dimension"),
		duration: t.exposeString("duration"),
		hasCustomThumbnail: t.exposeBoolean("hasCustomThumbnail"),
		licensedContent: t.exposeBoolean("licensedContent"),
		projection: t.exposeString("projection"),

		// STATISTICS
		commentCount: t.exposeString("commentCount"),
		dislikeCount: t.exposeString("dislikeCount"),
		favoriteCount: t.exposeString("favoriteCount"),
		likeCount: t.exposeString("likeCount"),
		viewCount: t.exposeString("viewCount"),
	}),
})
