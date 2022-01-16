import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Post_emotion } from '../../entity/Post_emotion'

export default class CreatePostEmotion implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Post_emotion)
      .values([
        {
          post: 1,
          emotion: 1,
        },
        {
          post: 1,
          emotion: 2,
        },
        {
          post: 2,
          emotion: 1,
        },
        {
          post: 2,
          emotion: 2,
        },
        {
          post: 2,
          emotion: 3,
        },
        {
          post: 3,
          emotion: 2,
        },
        {
          post: 3,
          emotion: 3,
        },
        {
          post: 4,
          emotion: 3,
        },
        {
          post: 4,
          emotion: 4,
        },
        {
          post: 4,
          emotion: 5,
        },
        {
          post: 5,
          emotion: 5,
        },
        {
          post: 6,
          emotion: 5,
        },
        {
          post: 7,
          emotion: 3,
        },
        {
          post: 7,
          emotion: 5,
        },
        {
          post: 7,
          emotion: 4,
        },
        {
          post: 8,
          emotion: 1,
        },
        {
          post: 8,
          emotion: 3,
        },
        {
          post: 9,
          emotion: 4,
        },
        {
          post: 10,
          emotion: 1,
        },
        {
          post: 11,
          emotion: 2,
        },
        {
          post: 11,
          emotion: 3,
        },
        {
          post: 11,
          emotion: 5,
        },
        {
          post: 12,
          emotion: 5,
        },
        {
          post: 13,
          emotion: 1,
        },
        {
          post: 13,
          emotion: 5,
        },
        {
          post: 14,
          emotion: 1,
        },
      ])
      .execute()
  }
}
