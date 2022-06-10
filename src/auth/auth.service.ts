import { Injectable } from '@nestjs/common';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
  login(loginInput: LoginInput) {
    console.log(loginInput);
    return {
      token: '1234',
      refresh_token: '1234',
    };
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // // update(id: number, updateAuthInput: UpdateAuthInput) {
  // //   return `This action updates a #${id} auth`;
  // // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
