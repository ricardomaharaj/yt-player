import { builder } from "~/server/gql/builder"

builder.objectType("PlaylistItem", {
	fields: (t) => ({
		// SNIPPET
		channelId: t.exposeString("channelId"),
		channelTitle: t.exposeString("channelTitle"),
		description: t.exposeString("description"),
		playlistId: t.exposeString("playlistId"),
		position: t.exposeFloat("position"),
		publishedAt: t.exposeString("publishedAt"),
		thumbnailUrl: t.exposeString("thumbnailUrl"),
		title: t.exposeString("title"),
		videoOwnerChannelId: t.exposeString("videoOwnerChannelId"),
		videoOwnerChannelTitle: t.exposeString("videoOwnerChannelTitle"),

		videoId: t.exposeString("videoId"),
	}),
})
