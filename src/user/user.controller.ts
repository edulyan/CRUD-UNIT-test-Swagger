import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserDto } from './dto/user.dto';
import { UserUpDto } from './dto/userUp.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({summary: 'Get user by ID'})
  @ApiResponse({status: 200, type: User})
  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @ApiOperation({summary: 'Create user'})
  @ApiResponse({status: 200, type: User})
  @Post()
  async create(@Body() user: UserDto) {
    return this.userService.create(user);
  }

  @ApiOperation({summary: 'Update user'})
  @ApiResponse({status: 200})
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserUpDto) {
    return this.userService.update(id, user);
  }

  @ApiOperation({summary: 'Delete user by ID'})
  @ApiResponse({status: 200})
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
