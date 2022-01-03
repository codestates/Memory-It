import { Router } from 'express'
import { getPosts, selectPost } from './get/index'
import { posting } from './post/index'
import { deletePost } from './delete/index'

const posts = Router()

posts.get('/', getPosts)
posts.get('/:postId', selectPost)
posts.post('/', posting)
posts.delete('/:postId', deletePost)

export default posts
