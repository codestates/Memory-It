import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Posts } from '../../entity/Posts'
import { Users } from '../../entity/Users'

export default class CreatePosts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Posts)
      .values([
        {
          user: 1,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: '11.22.33',
          lng: '11.22.44',
          createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '오늘도 날씨가 별로네',
          marker: 2,
          lat: '11.22.33',
          lng: '11.22.44',
        },
        {
          user: 3,
          content: '오늘도 날씨가 soso',
          marker: 2,
          lat: '11.22.33',
          lng: '11.22.44',
        },
        {
          user: 1,
          content: '오늘도 날씨가 wonderful',
          marker: 1,
          lat: '11.22.33',
          lng: '11.22.44',
        },
        {
          user: 1,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: '11.22.33',
          lng: '11.22.44',
          createdAt: '2021-01-01',
        },
        {
          user: 1,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: '11.22.33',
          lng: '11.22.44',
          createdAt: '2021-01-01',
        },
        {
          user: 1,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: '11.22.33',
          lng: '11.22.44',
          createdAt: '2021-04-01',
        },
        {
          user: 1,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: '11.22.33',
          lng: '11.22.44',
          createdAt: '2021-05-01',
        },
      ])
      .execute()
  }
}
