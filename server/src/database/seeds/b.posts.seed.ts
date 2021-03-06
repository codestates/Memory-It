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
          content: '테스트용 게시글 1',
          marker: 1,
          lat: 35.2054,
          lng: 129.068 ,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 2',
          marker: 1,
          lat: 35.2054 ,
          lng: 129.068,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 3',
          marker: 1,
          lat: 35.2054 ,
          lng: 129.068,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 4',
          marker: 1,
          lat: 35.2054 ,
          lng: 129.068,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 5',
          marker: 1,
          lat: 35.2054 ,
          lng: 129.068,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 6',
          marker: 1,
          lat: 35.2054,
          lng: 129.068 ,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 7',
          marker: 1,
          lat: 35.2054 ,
          lng: 129.068,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 8',
          marker: 1,
          lat: 35.2054 ,
          lng: 129.068,
          // createdAt: '2022-01-01',
        },
        {
          user: 2,
          content: '테스트용 게시글 9',
          marker: 2,
          lat: 35.203188176236104 ,
          lng: 129.072809861013,
        },
        {
          user: 2,
          content: '테스트용 게시글 10',
          marker: 1,
          lat: 35.20565055471679 ,
          lng: 129.08055806016614,
        },
        {
          user: 2,
          content: '테스트용 게시글 11',
          marker: 1,
          lat: 35.18567195334202 ,
          lng: 129.0429909187609,
          // createdAt: '2021-01-01',
        },
        {
          user: 2,
          content: '2월 테스트용 게시글 12',
          marker: 1,
          lat: 35.179648910792196 ,
          lng: 129.07497777179492,
          createdAt: '2022-02-01',
        },
        {
          user: 2,
          content: '2월 테스트용 게시글 13',
          marker: 1,
          lat: 35.1826627979256,
          lng:  129.10087067563578,
          createdAt: '2022-02-02',
        },
        {
          user: 2,
          content: '3월 테스트용 게시글 14',
          marker: 1,
          lat: 37.54699 ,
          lng: 127.09598,
          createdAt: '2022-03-05',
        },
      ])
      .execute()
  }
}
