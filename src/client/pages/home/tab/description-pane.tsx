import { Paper } from "@mui/material"
import { useQuery } from "urql"
import { VIDEO_QUERY } from "~/client/gql/query/video"

type Props = {
	videoId: string
}

export function DescriptionPane(props: Props) {
	const [res] = useQuery({
		query: VIDEO_QUERY,
		variables: { videoId: props.videoId },
	})

	const vid = res.data?.video

	return (
		<>
			<Paper>
				<div className="col p-4">
					<div className="max-h-[800px] overflow-scroll whitespace-break-spaces">
						{vid?.description}
					</div>
				</div>
			</Paper>
		</>
	)
}
