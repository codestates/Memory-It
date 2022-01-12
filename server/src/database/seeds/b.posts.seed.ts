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
          user: 2,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: 129.068,
          lng: 35.2054,
          createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '오늘도 날씨가 별로네',
          marker: 2,
          lat: 129.072809861013,
          lng: 35.203188176236104,
        },
        {
          user: 3,
          content: '오늘도 날씨가 soso',
          marker: 2,
          lat: 129.03875260798642,
          lng: 35.212850317968275,
        },
        {
          user: 2,
          content: '오늘도 날씨가 wonderful',
          marker: 1,
          lat: 129.08055806016614,
          lng: 35.20565055471679,
        },
        {
          user: 2,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: 129.0429909187609,
          lng: 35.18567195334202,
          createdAt: '2021-01-01',
        },
        {
          user: 2,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: 129.07497777179492,
          lng: 35.179648910792196,
          createdAt: '2021-01-01',
        },
        {
          user: 2,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: 129.10087067563578,
          lng: 35.1826627979256,
          createdAt: '2021-04-01',
        },
        {
          user: 2,
          content: '오늘도 날씨가 좋네',
          marker: 1,
          lat: 127.09598,
          lng: 37.54699,
          createdAt: '2021-05-01',
        },
      ])
      .execute()
  }
}
