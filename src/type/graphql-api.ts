export namespace GQL_API {
	export type SearchResult = {
		// ID
		playlistId?: string
		videoId?: string

		// SNIPPET
		channelId?: string
		channelTitle?: string
		description?: string
		liveBroadcastContent?: string
		publishedAt?: string
		thumbnailUrl?: string
		title?: string
	}

	export type Comment = {
		// SNIPPET
		authorChannelId?: string
		authorChannelUrl?: string
		authorDisplayName?: string
		authorProfileImageUrl?: string
		canRate?: boolean
		channelId?: string
		likeCount?: number
		moderationStatus?: string
		parentId?: string
		publishedAt?: string
		textDisplay?: string
		textOriginal?: string
		updatedAt?: string
		viewerRating?: string
	}

	export type Video = {
		// SNIPPET
		categoryId?: string
		channelId?: string
		channelTitle?: string
		defaultAudioLanguage?: string
		defaultLanguage?: string
		description?: string
		liveBroadcastContent?: string
		publishedAt?: string
		tags?: string[]
		thumbnailUrl?: string
		title?: string

		// CONTENT DETAILS
		caption?: string
		definition?: string
		dimension?: string
		duration?: string
		hasCustomThumbnail?: boolean
		licensedContent?: boolean
		projection?: string

		// STATISTICS
		commentCount?: string
		dislikeCount?: string
		favoriteCount?: string
		likeCount?: string
		viewCount?: string
	}

	export type Channel = {
		// SNIPPET
		country?: string
		customUrl?: string
		defaultLanguage?: string
		description?: string
		publishedAt?: string
		thumbnailUrl?: string
		title?: string

		// CONTENT DETAILS
		uploadsPlaylist?: string

		// STATISTICS
		hiddenSubscriberCount?: boolean
		subscriberCount?: number
		videoCount?: number
		viewCount?: number
	}

	export type PlaylistItem = {
		// SNIPPET
		channelId: string
		channelTitle: string
		description: string
		playlistId: string
		position: number
		publishedAt: string
		thumbnailUrl: string
		title: string
		videoOwnerChannelId: string
		videoOwnerChannelTitle: string

		//
		videoId: string
	}
}
