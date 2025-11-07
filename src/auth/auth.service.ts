import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/services/usuarios.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(correo: string, contrasena: string) {
    const user = await this.usuarioService.getUserByEmail(correo);

    if (!user) {
      throw new UnauthorizedException('Error en las credenciales.');
    }

    const isMatch = await bcrypt.compare(contrasena, user.contrasena);

    if (!isMatch) {
      throw new UnauthorizedException('Error en las credenciales.');
    }

    const payload = { sub: user.id, username: user.correo };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
