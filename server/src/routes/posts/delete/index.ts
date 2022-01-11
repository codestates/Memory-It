import { Request, Response, NextFunction } from 'express'
import { NOT_FOUND, POST_DELETED } from '../../../hardWord'
import { getManager, createQueryBuilder } from 'typeorm'
import { Posts } from '../../../entity/Posts'
import { Post_emotion } from '../../../entity/Post_emotion'
import { Images } from '../../../entity/Images'
import { Emotions } from '../../../entity/Emotions'
import { Users } from '../../../entity/Users'
import fs from 'fs'
export default {
  async deletePost(req: Request, res: Response, next: NextFunction) {
    const postIdQs: number = parseInt(req.params.postId)
    const postId: number = isNaN(postIdQs) ? -999 : postIdQs

    const entityManager = getManager()
    const post = await entityManager.findOne(Posts, postId)

    const imageFile = await entityManager.query(
      `select * from images where postId=${postId}`
    )
    const addressList = []
    const results = imageFile.map(ele => {
      return addressList.push(ele.address)
    })

    if (!post) {
      res.status(404).send(NOT_FOUND)
    } else {
      const deleteimage = addressList.map(image => {
        const deletion = fs.unlink(`src/uploads/${image}`, err => {
          console.log(err)
        })
        return
      })
      await entityManager.delete(Posts, postId)

      res.send(POST_DELETED)
    }
  },
}
