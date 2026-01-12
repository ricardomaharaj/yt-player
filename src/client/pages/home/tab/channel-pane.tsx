import { Avatar, Paper } from "@mui/material"
import { useQuery } from "urql"
import { CHANNEL_QUERY } from "~/client/gql/query/channel"
import { PLAYLIST_QUERY } from "~/client/gql/query/playlist"
import { VideoCard } from "~/client/lib/ui/card/video-card"

type Props = {
	channelId: string
}

export function ChannelPane(props: Props) {
	const [res] = useQuery({
		query: CHANNEL_QUERY,
		variables: { channelId: props.channelId },
	})

	const channel = res.data?.channel

	const [playlistRes] = useQuery({
		query: PLAYLIST_QUERY,
		variables: { playlistId: channel?.uploadsPlaylist || "" },
	})

	const playlist = playlistRes.data?.playlist

	return (
		<>
			<Paper>
				<div className="col gap-2">
					<div className="row gap-4 p-4 items-center">
						<Avatar src={channel?.thumbnailUrl} />
						<div className="text-xl line-clamp-1">{channel?.title}</div>
					</div>
				</div>
			</Paper>

			<Paper elevation={0}>
				<div className="grid grid-cols-3 gap-2 max-h-[800px] overflow-scroll">
					{playlist?.map((x) => (
						<VideoCard video={x} />
					))}
				</div>
			</Paper>
		</>
	)
}
