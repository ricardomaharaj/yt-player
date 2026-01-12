import { ReactNode } from "react"
import { cacheExchange, createClient, fetchExchange, Provider } from "urql"

const client = createClient({
	url: "/gql",
	exchanges: [cacheExchange, fetchExchange],
	preferGetMethod: false,
})

export function Urql(props: { children: ReactNode }) {
	return <Provider value={client}>{props.children}</Provider>
}
