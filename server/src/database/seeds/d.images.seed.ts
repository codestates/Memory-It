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
          address: 'KakaoTalk_Photo_2022-01-01-16-37-07.jpeg',
        },
        {
          post: 2,
          address: 'dogs-g9cd7930ca_640.jpg',
        },
        {
          post: 2,
          address: '기쁨.png',
        },
        {
          post: 3,
          address: 'clipart982248.png',
        },
        {
          post: 1,
          address: '엿같음.png',
        },
        {
          post: 4,
          address: 'KakaoTalk_Photo_2022-01-01-16-36-39.jpeg',
        },
        {
          post: 5,
          address: '기쁨.png',
        },
        {
          post: 6,
          address: '불안.png',
        },
        {
          post: 7,
          address: '빡침.png',
        },
        {
          post: 8,
          address: '슬픔.png',
        },
      ])
      .execute()
  }
}
