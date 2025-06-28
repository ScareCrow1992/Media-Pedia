import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'watcha_admin',
  password: 'watcha_pw123',
  database: 'watcha_clone_db',
  entities: [__dirname + '/**/*.entity.{ts,js}'], // 경로 중요!
  synchronize: false, // 개발 중엔 true, 운영에선 false!
  migrations: ['src/migrations/*.ts'],
  logging : true,
  
});
