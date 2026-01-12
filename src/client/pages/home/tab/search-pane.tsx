import {
	Paper,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material"
import { useAtom } from "jotai"
import { useRef, useState } from "react"
import { useQuery } from "urql"
import { SEARCH_QUERY } from "~/client/gql/query/search"
import { searchQueryAtom } from "~/client/lib/state/search-query"
import { ChannelCard } from "~/client/lib/ui/card/channel-card"
import { VideoCard } from "~/client/lib/ui/card/video-card"
import { icon } from "~/client/lib/ui/icon"

enum SearchFilter {
	Channel = "channel",
	Playlist = "playlist",
	Video = "video",
}

const searchFilterIcons: Record<SearchFilter, string> = {
	[SearchFilter.Channel]: icon.account,
	[SearchFilter.Playlist]: icon.playlist,
	[SearchFilter.Video]: icon.video,
}

const searchFilterOrder: SearchFilter[] = [
	SearchFilter.Video,
	SearchFilter.Channel,
	SearchFilter.Playlist,
]

export function SearchPane() {
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
	const [searchTab, setSearchTab] = useState<SearchFilter>(SearchFilter.Video)
	const searchRef = useRef<HTMLInputElement>(null)

	const [res] = useQuery({
		query: SEARCH_QUERY,
		variables: {
			q: searchQuery,
			type: searchTab,
		},
	})

	const searchResults = res.data?.search

	function handleTabChange(tab: SearchFilter) {
		if (tab !== null) {
			setSearchTab(tab)
		}
	}

	function updateSearchQuery() {
		const val = searchRef.current?.value
		if (val) setSearchQuery(val)
	}

	return (
		<>
			<div className="col gap-2">
				<div className="row gap-2">
					<TextField
						variant="outlined"
						placeholder="Search"
						defaultValue={searchQuery}
						fullWidth
						slotProps={{
							input: {
								startAdornment: (
									<i className={`${icon.search} text-2xl mr-2`} />
								),
							},
						}}
						inputRef={searchRef}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								updateSearchQuery()
							}
						}}
					/>

					<ToggleButtonGroup
						exclusive
						size="large"
						value={searchTab}
						onChange={(e, v: SearchFilter) => handleTabChange(v)}
					>
						{searchFilterOrder.map((filter) => (
							<ToggleButton value={filter} title={filter}>
								<i className={`${searchFilterIcons[filter]} text-2xl`} />
							</ToggleButton>
						))}
					</ToggleButtonGroup>
				</div>

				<Paper elevation={0}>
					<div className="grid grid-cols-3 gap-2 max-h-[800px] overflow-scroll">
						{searchTab === SearchFilter.Video && (
							<>
								{searchResults?.map((x) => (
									<VideoCard video={x} />
								))}
							</>
						)}

						{searchTab === SearchFilter.Channel && (
							<>
								{searchResults?.map((x) => (
									<ChannelCard channel={x} />
								))}
							</>
						)}
					</div>
				</Paper>
			</div>
		</>
	)
}
