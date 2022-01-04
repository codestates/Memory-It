import { Router } from 'express'
import postsGet from './get/index'
import postsPost from './post/index'
import postDelete from './delete/index'
import imageUploader from './post/multer'

const posts = Router()

posts.get('/', postsGet.getPosts)

posts.get('/:postId', postsGet.selectPost)

posts.post('/', imageUploader, postsPost.posting)

posts.delete('/:postId', postDelete.deletePost)

export default posts
