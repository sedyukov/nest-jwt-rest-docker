import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
   @ApiProperty({example: 'example@mail.com', description: 'E-mail'})
   readonly email: string;

   @ApiProperty({example: 'Password123', description: 'Password'})
   readonly password: string;
}