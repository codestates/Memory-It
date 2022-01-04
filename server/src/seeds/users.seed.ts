import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Users } from '../entity/Users'

// export default class CreateUsers implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {
//     const userData = [
//       {
//         username: '김식',
//         password: '1',
//         email: 'aa@code.com',
//       },
//       {
//         username: '권식',
//         email: 'bb@code.com',
//         password: '1',
//       },
//       {
//         username: '강홍결',
//         email: 'cc@code.com',
//         password: '1',
//       },
//       {
//         username: '권예림',
//         email: 'dd@code.com',
//         password: '1',
//       },
//       {
//         username: '김민혜',
//         email: 'ee@code.com',
//         password: '1',
//       },
//       {
//         username: '김유래',
//         email: 'ff@code.com',
//         password: '1',
//       },
//       {
//         username: '이아윤',
//         email: 'gg@code.com',
//         password: '1',
//       },
//       {
//         username: '장미국',
//         email: 'hh@code.com',
//         password: '1',
//       },
//       {
//         username: '킴성태',
//         email: 'ii@code.com',
//         password: '1',
//       },
//       {
//         username: '박준식',
//         email: 'jj@code.com',
//         password: '1',
//       },
//       {
//         username: '임진우',
//         email: 'kk@code.com',
//         password: '1',
//       },
//       {
//         username: '김준석',
//         email: 'll@code.com',
//         password: '1',
//       },
//     ]
//     await connection.getRepository(Users).save(userData)
//   }
// }

export default class CreateinitialUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values([
        {
          id: 17,
          username: '김식',
          password: '1',
          email: 'aa@code.com',
        },
        {
          username: '권식',
          email: 'bb@code.com',
          password: '1',
        },
        {
          username: '강홍결',
          email: 'cc@code.com',
          password: '1',
        },
        {
          username: '권예림',
          email: 'dd@code.com',
          password: '1',
        },
        {
          username: '김민혜',
          email: 'ee@code.com',
          password: '1',
        },
        {
          username: '김유래',
          email: 'ff@code.com',
          password: '1',
        },
        {
          username: '이아윤',
          email: 'gg@code.com',
          password: '1',
        },
        {
          username: '장미국',
          email: 'hh@code.com',
          password: '1',
        },
        {
          username: '킴성태',
          email: 'ii@code.com',
          password: '1',
        },
        {
          username: '박준식',
          email: 'jj@code.com',
          password: '1',
        },
        {
          username: '임진우',
          email: 'kk@code.com',
          password: '1',
        },
        {
          username: '김준석',
          email: 'll@code.com',
          password: '1',
        },
      ])
      .execute()
  }
}
