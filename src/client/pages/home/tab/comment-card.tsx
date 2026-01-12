import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
} from "@mui/material"
import dayjs from "dayjs"
import { icon } from "~/client/lib/ui/icon"
import { GQL_API } from "~/type/graphql-api"

type Props = {
	comment: GQL_API.Comment
}

export function CommentCard({ comment }: Props) {
	const timestamp = dayjs(comment.publishedAt)

	return (
		<>
			<Accordion>
				<AccordionSummary>
					<div className="col w-full gap-2">
						<div className="row justify-between">
							<div className="row gap-2 items-center">
								<Avatar
									src={comment.authorProfileImageUrl}
									className="icon-24"
								/>
								<div title={comment.authorDisplayName} className="text-xs">
									{comment.authorDisplayName}
								</div>
							</div>

							<div className="col gap-1 items-end">
								<div className="text-xs" title={timestamp.toString()}>
									{timestamp.fromNow()}
								</div>

								<div className="row gap-2 items-center">
									<div>{comment.likeCount}</div>
									<i className={`${icon.thumbsUp} text-base`} />
								</div>
							</div>
						</div>

						<div className="line-clamp-2 whitespace-break-spaces">
							{comment.textDisplay}
						</div>
					</div>
				</AccordionSummary>

				<AccordionDetails>
					<div className="whitespace-break-spaces">{comment.textDisplay}</div>
				</AccordionDetails>
			</Accordion>
		</>
	)
}
