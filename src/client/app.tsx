import { CssBaseline, ThemeProvider } from "@mui/material"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { BrowserRouter, Route, Routes } from "react-router"
import { muiTheme } from "~/client/lib/ui/mui-theme"
import { Urql } from "~/client/lib/urql"
import { HomePage } from "~/client/pages/home/home-page"

dayjs.extend(relativeTime)

export function App() {
	return (
		<>
			<Urql>
				<ThemeProvider theme={muiTheme}>
					<CssBaseline />
					<div className="col gap-2">
						<BrowserRouter>
							<Routes>
								<Route path="/" element={<HomePage />} />
							</Routes>
						</BrowserRouter>
					</div>
				</ThemeProvider>
			</Urql>
		</>
	)
}
