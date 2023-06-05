import { Module, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthService, LocalStrategy],
  imports:[PassportModule, UsersModule]
})
export class AuthModule {}
