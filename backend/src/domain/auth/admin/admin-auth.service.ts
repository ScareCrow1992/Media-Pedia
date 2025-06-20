import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminAuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }


    async passwordMigration() {
        const users = await this.userRepository.find();

        for (const user of users) {
            // 이미 암호화된 값인지 체크 (선택 사항)
            if (!user.password.startsWith('$2b$')) {
                const hashed = await bcrypt.hash(user.password, 10);
                user.password = hashed;
                await this.userRepository.save(user);
                console.log(`✅ 암호화 완료: ${user.email}`);
            } else {
                console.log(`⏭ 이미 암호화됨: ${user.email}`);
            }
        }
        return "hello";
    }




}
