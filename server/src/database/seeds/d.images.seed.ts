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
          post: 1,
          address: '엿같음.png',
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
          post: 4,
          address: '덤1.png',
        },
        {
          post: 4,
          address: '덤2.png',
        },
        {
          post: 4,
          address: '덤3.png',
        },
        {
          post: 5,
          address: '덤4.png',
        },
        {
          post: 5,
          address: '덤5.png',
        },
        {
          post: 5,
          address: '덤6.png',
        },
        {
          post: 5,
          address: '덤7.png',
        },
        {
          post: 5,
          address: '덤8.png',
        },
        {
          post: 6,
          address: '덤9.png',
        },
        {
          post: 7,
          address: '덤10.png',
        },
        {
          post: 7,
          address: '덤11.png',
        },
        {
          post: 7,
          address: '덤12.png',
        },
        {
          post: 8,
          address: '덤13.png',
        },
        {
          post: 8,
          address: '덤14.jpeg',
        },
        {
          post: 8,
          address: '덤15.jpeg',
        },
        {
          post: 8,
          address: '덤16.jpg',
        },
        {
          post: 9,
          address: '덤17.JPG',
        },
        {
          post: 9,
          address: '덤18.JPG',
        },
        {
          post: 9,
          address: '덤19.jpg',
        },
        {
          post: 9,
          address: '덤20.jpg',
        },
        {
          post: 10,
          address: '덤21.jpeg',
        },
        {
          post: 11,
          address: '덤22.jpeg',
        },
        {
          post: 11,
          address: '덤23.png',
        },
        {
          post: 11,
          address: '덤24.png',
        },
        {
          post: 12,
          address: '덤25.jpg',
        },
        {
          post: 12,
          address: '덤26.png',
        },
        {
          post: 12,
          address: '덤27.png',
        },
        {
          post: 13,
          address: '덤28.jepg',
        },
        {
          post: 13,
          address: '덤29.png',
        },
        {
          post: 13,
          address: '덤30.png',
        },
        {
          post: 14,
          address: '덤31.png',
        },
        {
          post: 14,
          address: '덤32.png',
        },
        {
          post: 14,
          address: '덤33.png',
        },
        {
          post: 14,
          address: '덤34.png',
        },
        // {
        //   post: 4,
        //   address: 'KakaoTalk_Photo_2022-01-01-16-36-39.jpeg',
        // },
        // {
        //   post: 5,
        //   address: '기쁨.png',
        // },
        // {
        //   post: 6,
        //   address: '불안.png',
        // },
        // {
        //   post: 7,
        //   address: '빡침.png',
        // },
        // {
        //   post: 8,
        //   address: '슬픔.png',
        // },
      ])
      .execute()
  }
}
