import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('optional-jwt') {
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    // 에러가 있거나 유저가 없으면 null 반환 (401 발생 안 함)
    return user || null;
  }

}