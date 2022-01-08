import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Images } from '../../entity/Images'

export default class CreateImages implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Images)
      .values([
        {
          post: 1,
          address: '이미지주소1',
        },
        {
          post: 2,
          address: '이미지주소2',
        },
        {
          post: 2,
          address: '이미지주소3',
        },
        {
          post: 3,
          address: '이미지주소4',
        },
        {
          post: 1,
          address: '이미지주소5',
        },
      ])
      .execute()
  }
}
