import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';
import type { UpdateUserDTO } from '../DTOs/UpdateUserDTO';
import type { UpdateEmailUserDTO } from '../DTOs/UpdateEmailUserDTO';
import { CreateUserDTO } from '../DTOs/CreateUserDTO';
import { AuthGuard } from '../../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  getUsers() {
    return this.usuariosService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.getUserById(id);
  }

  @Get('email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.usuariosService.getUserByEmail(email);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    data: UpdateUserDTO,
  ) {
    // return this.usuariosService.updateUser(id, data);
    return data;
  }

  @Post()
  create(@Body() payload: CreateUserDTO) {
    return this.usuariosService.create(payload);
  }

  @Patch(':id/email')
  updateEmail(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    data: UpdateEmailUserDTO,
  ) {
    return data;
    // TODO: Colocar nuestra lógica que se conecta al servicio y actualiza los datos
  }
}
