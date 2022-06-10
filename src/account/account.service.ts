import { Injectable } from '@nestjs/common';
import { HashingService } from 'src/hashing.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

@Injectable()
export class AccountService {
  constructor(private hashingService: HashingService) {}

  async create(createAccountInput: CreateAccountInput) {
    const hashedPassword = await this.hashingService.hash(
      createAccountInput.password,
    );
    const isMatch = await this.hashingService.match(
      '0961832495',
      hashedPassword,
    );
    console.log(hashedPassword, isMatch);

    return 'This action adds a new account';
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountInput: UpdateAccountInput) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
