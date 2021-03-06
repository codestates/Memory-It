import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Users } from './Users'
import { Images } from './Images'
import { Post_emotion } from './Post_emotion'

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number

  // @Column()
  // user_id: number
  // @OneToOne(type => Users)
  // @JoinColumn 워너십에 관한것 한쪽만 가질수있다
  // @relation(type=>연결해줄테이블, 테이블간바이디렉션널관계만들어주기-관계에따라서 .단수 나 . 복수가 될수있다??)
  // typeorm 에서는 타입이 중요하므로 필요한 타입 정보를 넣어줘야한다
  @ManyToOne(type => Users, users => users.posts, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: Users | number

  @Column({ default: '' })
  content: string

  @Column({ type: 'double', default: 0 })
  lat: number

  @Column({ type: 'double', default: 0 })
  lng: number

  @Column({ default: 0 })
  marker: number

  @OneToMany(type => Images, images => images.post, { onDelete: 'CASCADE' })
  image: Images[]

  @OneToMany(type => Post_emotion, post_emotion => post_emotion.post)
  post_emotion: Post_emotion[]

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updatedAt' })
  UpdatedAt!: Date
}
