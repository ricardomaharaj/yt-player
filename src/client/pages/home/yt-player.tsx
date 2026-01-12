type Props = {
	videoId: string
}

export function YTPlayer(props: Props) {
	return (
		<iframe
			className="border-none rounded-xl"
			width="1280"
			height="720"
			src={`https://www.youtube.com/embed/${props.videoId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		/>
	)
}
