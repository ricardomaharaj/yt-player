import { useQuery } from "urql"
import { COMMENT_QUERY } from "~/client/gql/query/comment"
import { CommentCard } from "./comment-card"

type Props = {
	videoId: string
}

export function CommentsPane(props: Props) {
	const [res] = useQuery({
		query: COMMENT_QUERY,
		variables: { videoId: props.videoId },
	})

	const comments = res.data?.comment

	return (
		<>
			<div className="col gap-2 max-h-[900px] overflow-scroll">
				{comments?.map((x) => (
					<CommentCard comment={x} />
				))}
			</div>
		</>
	)
}
