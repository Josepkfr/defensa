import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/utils/hashPassword';
import { verifyPassword } from 'src/utils/verifyPassword';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private authRepository: Repository<Auth>,
    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    createAuthDto.password = await hashPassword(createAuthDto.password);
    return this.authRepository.save(createAuthDto);
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.authRepository.findOne({
      where: {
        email: loginAuthDto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    if (!(await verifyPassword(loginAuthDto.password, user.password))) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    const payload = {
      id: user.id,
      roles: user.roles,
    };

    return { token: this.jwtService.sign(payload), ...user };
  }
}
