import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Auth {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar', { unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column('varchar', { array: true })
  public roles: string[];

  @Column({ default: true })
  public isActive: boolean;
}
