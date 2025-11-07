import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { ROLES } from 'src/constants/enums/roles.enum';

export class CreateUserDTO {
  @IsString({ message: 'nombre debería ser una cadena de texto' })
  @IsNotEmpty({ message: 'nombre no debería estar vacío' })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsNumber()
  @Min(15, { message: 'edad debe ser mayor a 14' })
  @Max(110, { message: 'edad debe ser menor a 111' })
  edad: number;

  @IsEmail()
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  contrasena: string;

  @IsEnum(ROLES)
  @IsNotEmpty()
  rol: ROLES;
}
