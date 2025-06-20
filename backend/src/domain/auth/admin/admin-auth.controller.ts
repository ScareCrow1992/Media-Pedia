import { Controller, Post } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';

@Controller('admin/auth')
export class AdminAuthController {

    constructor(private readonly authService: AdminAuthService){ }

    @Post("password-mig")
    async passwordMigration(){
        return await this.authService.passwordMigration();
    }

}
