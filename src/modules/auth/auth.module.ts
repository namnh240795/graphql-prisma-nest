import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/share_modules/prisma.service';
import { HashingService } from 'src/share_modules/hashing.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ErrorService } from 'src/share_modules/error.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60000s' },
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    HashingService,
    ErrorService,
    JwtStrategy,
  ],
})
export class AuthModule {}
