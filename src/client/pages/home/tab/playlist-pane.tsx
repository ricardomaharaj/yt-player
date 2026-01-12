import { Paper } from "@mui/material"
import { useQuery } from "urql"
import { PLAYLIST_QUERY } from "~/client/gql/query/playlist"
import { VideoCard } from "~/client/lib/ui/card/video-card"

type Props = {
	playlistId: string
}

export function PlaylistPane(props: Props) {
	const [res] = useQuery({
		query: PLAYLIST_QUERY,
		variables: { playlistId: props.playlistId },
	})

	const playlist = res.data?.playlist

	return (
		<>
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
