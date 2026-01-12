export namespace YouTube_API {
	/* THUMBNAILS */
	export type Thumbnail = {
		url: string
	}

	export type Thumbnails = {
		default: YouTube_API.Thumbnail
		medium: YouTube_API.Thumbnail
		high: YouTube_API.Thumbnail
		standard: YouTube_API.Thumbnail
		maxres: YouTube_API.Thumbnail
	}

	/* SEARCH */
	export type SearchResult = {
		kind: "youtube#searchResult"
		id: {
			channelId: string
			kind: string
			playlistId: string
			videoId: string
		}
		snippet: {
			channelId: string
			channelTitle: string
			description: string
			liveBroadcastContent: string
			publishedAt: string
			thumbnails: YouTube_API.Thumbnails
			title: string
		}
	}

	export type SearchListResponse = {
		kind: "youtube#searchListResponse"
		items: YouTube_API.SearchResult[]
	}

	/* COMMENT */
	export type Comment = {
		kind: "youtube#comment"
		id: string
		snippet: {
			authorChannelId: { value: string }
			authorChannelUrl: string
			authorDisplayName: string
			authorProfileImageUrl: string
			canRate: boolean
			channelId: string
			likeCount: number
			moderationStatus: string
			parentId: string
			publishedAt: string
			textDisplay: string
			textOriginal: string
			updatedAt: string
			viewerRating: string
		}
	}

	export type CommentThread = {
		kind: "youtube#commentThread"
		id: string
		snippet: {
			canReply: boolean
			channelId: string
			isPublic: boolean
			topLevelComment: YouTube_API.Comment
			totalReplyCount: number
			videoId: string
		}
	}

	export type CommentThreadListResponse = {
		kind: "youtube#commentThreadListResponse"
		nextPageToken: string
		pageInfo: {
			resultsPerPage: number
			totalResults: number
		}
		items: YouTube_API.CommentThread[]
	}

	/* VIDEO */
	export type Video = {
		kind: "youtube#video"
		id: string
		snippet: {
			categoryId: string
			channelId: string
			channelTitle: string
			defaultAudioLanguage: string
			defaultLanguage: string
			description: string
			liveBroadcastContent: string
			publishedAt: string
			tags: string[]
			thumbnails: YouTube_API.Thumbnails
			title: string
		}
		contentDetails: {
			caption: string
			definition: string
			dimension: string
			duration: string
			hasCustomThumbnail: boolean
			licensedContent: boolean
			projection: string
		}
		statistics: {
			commentCount: string
			dislikeCount: string
			favoriteCount: string
			likeCount: string
			viewCount: string
		}
	}

	export type VideoListResponse = {
		kind: "youtube#videoListResponse"
		nextPageToken: string
		prevPageToken: string
		pageInfo: {
			totalResults: number
			resultsPerPage: number
		}
		items: YouTube_API.Video[]
	}

	/* CHANNEL */
	export type Channel = {
		kind: "youtube#channel"
		id: string
		snippet: {
			country: string
			customUrl: string
			defaultLanguage: string
			description: string
			publishedAt: string
			thumbnails: YouTube_API.Thumbnails
			title: string
		}
		contentDetails: {
			relatedPlaylists: {
				favorites: string
				likes: string
				uploads: string
			}
		}
		statistics: {
			hiddenSubscriberCount: boolean
			subscriberCount: number
			videoCount: number
			viewCount: number
		}
	}

	export type ChannelListResponse = {
		kind: "youtube#channelListResponse"
		nextPageToken: string
		prevPageToken: string
		pageInfo: {
			totalResults: number
			resultsPerPage: number
		}
		items: YouTube_API.Channel[]
	}

	/* PLAYLIST */
	export type PlaylistItem = {
		kind: "youtube#playlistItem"
		id: string
		snippet: {
			channelId: string
			channelTitle: string
			description: string
			playlistId: string
			position: number
			publishedAt: string
			thumbnails: YouTube_API.Thumbnails
			title: string
			videoOwnerChannelId: string
			videoOwnerChannelTitle: string
			resourceId: {
				kind: string
				videoId: string
			}
		}
	}

	export type PlaylistItemListResponse = {
		kind: "youtube#playlistItemListResponse"
		nextPageToken: string
		prevPageToken: string
		pageInfo: {
			totalResults: number
			resultsPerPage: number
		}
		items: YouTube_API.PlaylistItem[]
	}
}
