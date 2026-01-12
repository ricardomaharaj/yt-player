import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [tsPaths(), react(), tailwindcss()],
	server: {
		port: 3000,
		proxy: { "/gql": "http://localhost:4000" },
	},
})
