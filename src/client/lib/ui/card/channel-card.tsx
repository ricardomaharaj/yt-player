import { Avatar, Card, CardActionArea } from "@mui/material"
import { useAtom } from "jotai"
import { channelIdAtom } from "~/client/lib/state/channel-id"
import { homeTabAtom } from "~/client/lib/state/home-tab"
import { HomeTab } from "~/client/type/home-tab"
import { GQL_API } from "~/type/graphql-api"

type Props = {
	channel: GQL_API.SearchResult
}

export function ChannelCard({ channel }: Props) {
	const [channelId, setChannelId] = useAtom(channelIdAtom)
	const [homeTab, setHomeTab] = useAtom(homeTabAtom)

	return (
		<>
			<Card>
				<CardActionArea
					onClick={() => {
						setChannelId(channel.channelId!)
						setHomeTab(HomeTab.Channel)
					}}
				>
					<div className="row gap-2 p-2 items-center">
						<Avatar src={channel.thumbnailUrl} />

						<div className="text-xs line-clamp-1" title={channel.channelTitle}>
							{channel.channelTitle}
						</div>
					</div>
				</CardActionArea>
			</Card>
		</>
	)
}
