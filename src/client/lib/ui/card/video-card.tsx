import { Card, CardActionArea, CardMedia } from "@mui/material"
import { useAtom } from "jotai"
import { channelIdAtom } from "~/client/lib/state/channel-id"
import { homeTabAtom } from "~/client/lib/state/home-tab"
import { videoIdAtom } from "~/client/lib/state/video-id"
import { HomeTab } from "~/client/type/home-tab"
import { GQL_API } from "~/type/graphql-api"

type Props = {
	video: GQL_API.SearchResult | GQL_API.PlaylistItem
}

export function VideoCard({ video }: Props) {
	const [videoId, setVideoId] = useAtom(videoIdAtom)
	const [channelId, setChannelId] = useAtom(channelIdAtom)
	const [homeTab, setHomeTab] = useAtom(homeTabAtom)

	return (
		<>
			<Card>
				<CardActionArea
					title={video.title}
					onClick={() => setVideoId(video.videoId!)}
				>
					<CardMedia>
						<div className="flex w-[1280px] h-[720px] max-h-[100px]">
							<img src={video.thumbnailUrl} className="" />
						</div>
					</CardMedia>

					<div className="p-2">
						<div className="text-xs line-clamp-1">{video.title}</div>
					</div>
				</CardActionArea>

				{homeTab !== HomeTab.Channel && (
					<>
						<CardActionArea
							title={video.channelTitle}
							onClick={() => {
								setChannelId(video.channelId!)
								setHomeTab(HomeTab.Channel)
							}}
						>
							<div className="row gap-2 p-2 items-center">
								<div className="text-xs line-clamp-1">{video.channelTitle}</div>
							</div>
						</CardActionArea>
					</>
				)}
			</Card>
		</>
	)
}
