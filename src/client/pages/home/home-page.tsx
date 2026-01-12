import { Paper, Tab, Tabs } from "@mui/material"
import { useAtom } from "jotai"
import { channelIdAtom } from "~/client/lib/state/channel-id"
import { homeTabAtom } from "~/client/lib/state/home-tab"
import { playlistIdAtom } from "~/client/lib/state/playlist-id"
import { videoIdAtom } from "~/client/lib/state/video-id"
import { icon } from "~/client/lib/ui/icon"
import { HomeTab } from "~/client/type/home-tab"
import { ChannelPane } from "./tab/channel-pane"
import { CommentsPane } from "./tab/comment-pane"
import { DescriptionPane } from "./tab/description-pane"
import { InfoPane } from "./tab/info-pane"
import { PlaylistPane } from "./tab/playlist-pane"
import { SearchPane } from "./tab/search-pane"
import { YTPlayer } from "./yt-player"

const homeTabIcons: Record<HomeTab, string> = {
	[HomeTab.Channel]: icon.account,
	[HomeTab.Comments]: icon.comment,
	[HomeTab.Description]: icon.description,
	[HomeTab.Playlist]: icon.playlist,
	[HomeTab.Search]: icon.search,
}

const homeTabOrder: HomeTab[] = [
	HomeTab.Description,
	HomeTab.Comments,
	HomeTab.Playlist,
	HomeTab.Channel,
	HomeTab.Search,
]

export function HomePage() {
	const [homeTab, setHomeTab] = useAtom(homeTabAtom)
	const [videoId, setVideoId] = useAtom(videoIdAtom)
	const [channelId, setChannelId] = useAtom(channelIdAtom)
	const [playlistId, setPlaylistId] = useAtom(playlistIdAtom)

	function handleTabChange(tab: HomeTab) {
		setHomeTab(tab)
	}

	return (
		<>
			<div className="row gap-2 w-full">
				<div className="col gap-2 w-2/3 min-w-[1280px]">
					<YTPlayer videoId={videoId} />
					<InfoPane videoId={videoId} />
				</div>

				<div className="col gap-2 w-1/3">
					<Paper elevation={1}>
						<Tabs
							variant="fullWidth"
							value={homeTab}
							onChange={(e, v: HomeTab) => handleTabChange(v)}
						>
							{homeTabOrder.map((tab) => (
								<Tab
									value={tab}
									title={tab}
									icon={<i className={`${homeTabIcons[tab]} text-2xl`} />}
								/>
							))}
						</Tabs>
					</Paper>

					{/* TABS */}
					{homeTab === HomeTab.Description && videoId && (
						<DescriptionPane videoId={videoId} />
					)}
					{homeTab === HomeTab.Comments && videoId && (
						<CommentsPane videoId={videoId} />
					)}
					{homeTab === HomeTab.Playlist && playlistId && (
						<PlaylistPane playlistId={playlistId} />
					)}
					{homeTab === HomeTab.Channel && channelId && (
						<ChannelPane channelId={channelId} />
					)}
					{homeTab === HomeTab.Search && <SearchPane />}
				</div>
			</div>
		</>
	)
}
