import { Test, TestingModule } from '@nestjs/testing';
import { AdminCastController } from './admin-cast.controller';

describe('AdminCastController', () => {
  let controller: AdminCastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminCastController],
    }).compile();

    controller = module.get<AdminCastController>(AdminCastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
