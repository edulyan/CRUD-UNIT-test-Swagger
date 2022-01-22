import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserUpDto } from './dto/userUp.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async create(userDto: UserDto): Promise<User> {
    const newUser = this.userRepository.create(userDto);

    return this.userRepository.save(newUser);
  }

  async update(id: number, userUpDto: UserUpDto): Promise<void> {
    await this.userRepository.update(id, userUpDto);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
