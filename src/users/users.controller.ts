import { Controller, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  @Patch('reset-problems')
  async resetProblems(): Promise<{ affectedUsers: number }> {
    const affectedUsers = await this.usersService.resetProblemsFlag();
    return { affectedUsers };
  }
}
