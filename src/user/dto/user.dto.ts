import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty({example: 'Ivan', description: 'Name'})
  readonly name: string;
  @ApiProperty({example: 'Ivanov', description: 'Last name'})
  readonly secondname: string;
  @ApiProperty({example: '20', description: 'Age'})
  readonly age: number;
  @ApiProperty({example: '185', description: 'Height'})
  readonly height: number;
}
