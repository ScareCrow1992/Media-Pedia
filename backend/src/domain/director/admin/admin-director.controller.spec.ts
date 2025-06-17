import { Test, TestingModule } from '@nestjs/testing';
import { AdminDirectorController } from './admin-director.controller';

describe('AdminDirectorController', () => {
  let controller: AdminDirectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminDirectorController],
    }).compile();

    controller = module.get<AdminDirectorController>(AdminDirectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
