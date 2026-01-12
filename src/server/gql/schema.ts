import { builder } from "./builder"

import "./type/channel"
import "./type/comment"
import "./type/playlist-item"
import "./type/search-result"
import "./type/video"

import "./query/channel"
import "./query/comment"
import "./query/playlist"
import "./query/search"
import "./query/video"

export const schema = builder.toSchema()
