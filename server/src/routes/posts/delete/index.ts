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
    console.log('이거불러온 포스트임ㅎㅎ', post)
    /*
    const postImageFiles = await entityManager.find(Images, { post: postId })
    console.log('삭제될이미지', postImageFiles)

이런식으로 불러와짐...쓸수가 없네...
 [
  Images { id: 17, address: 'download (1)1641540763818.jpeg' },
  Images { id: 18, address: 'images1641540763820.jpeg' }
]
*/
    const addressList01 = []
    const postImageFiles = (await entityManager.find(Images, { post: postId })).map(
      ele => {
        return addressList01.push(ele.address)
      }
    )
    console.log('삭제될이미지지지롱~~', addressList01)

    const imageFile = await entityManager.query(
      `select * from images where postId=${postId}`
    )
    const addressList = []
    const results = imageFile.map(ele => {
      return addressList.push(ele.address)
    })
    console.log('#########', addressList)
    // console.log('쿼리로불러온삭제될이미지', postImageFiles)

    // const imageStorage = fs.unlink()
    // const imageFile = await entityManager
    //   .createQueryBuilder()
    //   .select('address')
    //   .from(Images, 'image')
    //   .where('image.post=:post', { post: postId })
    //   .getMany()

    // await getManager()
    // .createQueryBuilder()
    // .delete()
    // .from(Posts)
    // .where('id=:id', { id: postId })
    // .execute()

    //const result = await entityManager.save(imageFile)
    console.log('EEEEEEE', imageFile)

    if (!post) {
      res.status(404).send(NOT_FOUND)
    } else {
      const deleteimage = addressList.map(image => {
        const deletion = fs.unlink(`dummy/uploads/${image}`, err => {
          console.log(err)
        })
        return
      })
      await entityManager.delete(Posts, postId)

      res.send(POST_DELETED)
    }
  },
}
