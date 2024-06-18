import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name:string, id: number): string {
    return `Hello ${name} you are ${id} years old`;
  }
}
