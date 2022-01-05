// ? routes/posts/get/index.ts
export type BoardType = 'diary' | 'map'
export const DIARY: BoardType = 'diary'
export const MAP: BoardType = 'map'

// ? routes/posts/post/dataValidator.ts
export const CONTENT = 'content'

// ? response messages
// 200:posts
export const POSTS_INFO = 'posts info'
export const POST_DETAILS = 'post details'
export const POST_DELETED = 'post deleted'
// 201:posts
export const POST_ADDED = 'post added'
// 400:posts
export const CHECK_YOUR_REQUEST = 'check your request'
export const CHECK_YOUR_REQUIRES = 'check your requires'

// 200:users
export const SUCCESSFULLY_LOGGED_OUT = 'successfully logged out'
export const SUCCESSFULLY_LOGGED_IN = 'successfully logged in'
export const SUCCESSFULLY_FIXED = 'successfully fixed'
export const SUCCESSFULLY_DELETED_USERINFO = 'successfully deleted userinfo'
// 201:users
export const WELCOME_MEMORY_IT = 'welcome memory it'
// 400:users
export const CHECK_YOUR_ID_OR_PASSWORD = 'check your id or password'
export const CHECK_YOUR_REQUIREMENTS = 'check your requirements'
export const ITS_A_MEMBER_WHO_ALREADY_EXISTS = 'its a member who already exists'

// 401:common
export const UNAUTHORIZED_USER = 'unauthorized user'
// 404:common
export const NOT_FOUND = 'Not Found'
// 500:common
export const SERVER_ERROR = 'server error'

// ? token name
export const ACCESS_TOKEN = 'accessToken'
export const REFRESH_TOKEN = 'refreshToken'
