import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Posts } from './Posts'
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  email: string

  @OneToMany(type => Posts, posts => posts.user, { onDelete: 'CASCADE' })
  posts: Posts[]

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updatedAt' })
  UpdatedAt!: Date
}
