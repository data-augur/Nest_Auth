import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiProperty } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

class LoginDto{
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService:AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req,  @Body() loginDto: LoginDto) {
    return this.authService.login(req.user);
  }
}
