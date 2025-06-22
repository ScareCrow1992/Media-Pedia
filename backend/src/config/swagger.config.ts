import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export function setupSwagger(app: INestApplication): void {

  let options_BearerAuth: SecuritySchemeObject = {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'Authorization',
    description: '액세스 토큰을 입력하세요. 예: Bearer eyJhbGciOi...',
    in: 'header',
  }

  const config = new DocumentBuilder()
    .setTitle('왓챠피디아 클론 API')
    .setDescription('왓챠 클론 프로젝트의 백엔드 API 문서입니다.')
    .setVersion('1.0')
    .addBearerAuth(options_BearerAuth, 'access-token') // JWT 인증 헤더 추가
    .build();

  // const options = {
  //   autoTagControllers: false,
  // };

  const options = {};

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api-docs', app, document);
}