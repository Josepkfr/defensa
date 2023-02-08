import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asist {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'timestamptz' })
  public init: Date;

  @Column({ type: 'timestamptz' })
  public exit: Date;

  @Column('varchar')
  public activities: string;
}
