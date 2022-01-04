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
          emotion: 3,
        },
        {
          post: 2,
          emotion: 1,
        },
        {
          post: 3,
          emotion: 2,
        },
        {
          post: 3,
          emotion: 4,
        },
        {
          post: 4,
          emotion: 5,
        },
      ])
      .execute()
  }
}
