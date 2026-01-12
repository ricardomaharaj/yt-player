import { builder } from "~/server/gql/builder"

builder.objectType("SearchResult", {
	fields: (t) => ({
		// ID
		channelId: t.exposeString("channelId"),
		playlistId: t.exposeString("playlistId"),
		videoId: t.exposeString("videoId"),

		// SNIPPET
		channelTitle: t.exposeString("channelTitle"),
		description: t.exposeString("description"),
		liveBroadcastContent: t.exposeString("liveBroadcastContent"),
		publishedAt: t.exposeString("publishedAt"),
		thumbnailUrl: t.exposeString("thumbnailUrl"),
		title: t.exposeString("title"),
	}),
})
