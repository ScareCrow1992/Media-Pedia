import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { JwtStrategy } from './jwt.strategy';


@Injectable()
export class OptionalJwtStrategy extends PassportStrategy(Strategy, 'optional-jwt') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
      ignoreExpiration: false,
    });
  }

  async validate(req: Request, payload: any) {
    try {
      const user = await this.usersService.findById(payload.sub);
      return user || null;
    } catch {
      return null;
    }
  }
}