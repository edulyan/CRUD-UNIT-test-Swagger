import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { UserUpDto } from './dto/userUp.dto';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const testUser: User = {
  id: 12,
  name: 'Sergey',
  secondname: 'Nekludov',
  age: 20,
  height: 178
}

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, {
          provide: UserService,
          useValue: {
            getAll: jest.fn().mockReturnValue([testUser]),
            getById: jest.fn().mockReturnValue(testUser),
            create: jest.fn().mockReturnValue(testUser),
            update: jest.fn().mockReturnValue(testUser),
            delete: jest.fn().mockReturnValue(testUser),
          }
      }],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);

  });

  describe('getAll', () => {
    let user: User[];

    describe('when getAll from controller is called', () => {

      beforeEach(async () => {
        user = await userController.getAll();
      })

      it('then it should call userService', () => {
        expect(userService.getAll).toHaveBeenCalled();
      })

      it('then it should return a users', () => {
        expect(user).toEqual([testUser]);
      })

    })
  })

  describe('getById', () => {
    let user: User;

    describe('when getById from controller is called', () => {

      beforeEach(async () => {
        user = await userController.getById(testUser.id);
      })

      it('then it should call userService', () => {
        expect(userService.getById).toBeCalledWith(testUser.id);
      })

      it('then it should return a user', () => {
        expect(user).toEqual(testUser);
      })

    })
  })

  describe('create', () => {
    let user: User;

    describe('when create from controller is called', () => {

      beforeEach(async () => {
        user = await userController.create(testUser);
      })

      it('then it should call userService', () => {
        expect(userService.create).toHaveBeenCalledWith(testUser);
      })

      it('then it should return a user', () => {
        expect(user).toEqual(testUser);
      })

    })
  })

  describe('update', () => {
    let user: User;
    let updateUser: UserUpDto;

    describe('when update from controller is called', () => {

      beforeEach(async () => {
        updateUser = {
          name: 'Sergey',
          secondname: 'Lobov',
          age: 18,
          height: 178
        }
        await userController.update(testUser.id, updateUser);
      })

      it('then it should call userService', () => {
        expect(userService.update).toHaveBeenCalledWith(testUser.id, updateUser);
      })

    })
  })

  describe('remove', () => {

    describe('when remove from controller is called', () => {

      beforeEach(async () => {
        await userController.remove(testUser.id);
      })

      it('should be call userService', () => {
        expect(userService.delete).toHaveBeenCalledWith(testUser.id);
      })

    })
  })
  
});