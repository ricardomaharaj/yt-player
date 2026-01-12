import { HTMLAttributes, ReactNode } from "react"

type Props = {
	value?: boolean | string
	children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export function Div(props: Props) {
	const { value, children, ...attr } = props

	if (!value) return <></>

	return <div {...attr}>{children}</div>
}
