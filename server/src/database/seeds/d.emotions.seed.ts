import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Emotions } from '../../entity/Emotions'

export default class CreateImages implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Emotions)
      .values([
        {
          name: '노란색',
        },
        {
          name: '초록색',
        },
        {
          name: '빨간색',
        },
        {
          name: '파란색',
        },
        {
          name: '보라색',
        },
      ])
      .execute()
  }
}
