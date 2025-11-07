import { IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginDTO {
  @IsString()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  contrasena: string;
}
