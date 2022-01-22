import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({example: 1, description: 'Unique key'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'Ivan', description: 'User name'})
  @Column()
  name: string;

  @ApiProperty({example: 'Ivanov', description: 'User last name'})
  @Column()
  secondname: string;

  @ApiProperty({example: '20', description: 'User age'})
  @Column()
  age: number;

  @ApiProperty({example: '185', description: 'User growth'})
  @Column()
  height: number;
}
