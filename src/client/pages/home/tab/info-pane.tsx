import { Paper } from "@mui/material"
import dayjs from "dayjs"
import { useQuery } from "urql"
import { VIDEO_QUERY } from "~/client/gql/query/video"
import { Div } from "~/client/lib/ui/div"
import { icon } from "~/client/lib/ui/icon"

type Props = {
	videoId: string
}

export function InfoPane(props: Props) {
	const [res] = useQuery({
		query: VIDEO_QUERY,
		variables: { videoId: props.videoId },
	})

	const vid = res.data?.video

	const timestamp = dayjs(vid?.publishedAt)

	return (
		<>
			<Paper>
				<div className="row p-4 justify-between">
					<div className="col gap-2">
						<div className="text-lg font-bold line-clamp-2" title={vid?.title}>
							{vid?.title}
						</div>

						<div className="row gap-2 items-center">
							<div className="text-xs line-clamp-1" title={vid?.channelTitle}>
								{vid?.channelTitle}
							</div>
						</div>
					</div>

					<div className="col items-end">
						<Div value={!!timestamp} className="row gap-1 items-center">
							<i className={`${icon.calClock} text-sm`} />
							<div className="text-sm" title={timestamp.toString()}>
								{timestamp.fromNow()}
							</div>
						</Div>

						<Div value={vid?.viewCount} className="row gap-1 items-center">
							<i className={`${icon.chart} text-sm`} />
							<div className="text-sm" title={`${vid?.viewCount}`}>
								{vid?.viewCount}
							</div>
						</Div>

						<Div value={vid?.likeCount} className="row gap-1 items-center">
							<i className={`${icon.thumbsUp} text-sm`} />
							<div className="text-sm" title={`${vid?.likeCount}`}>
								{vid?.likeCount}
							</div>
						</Div>
					</div>
				</div>
			</Paper>
		</>
	)
}
