import { Test, TestingModule } from '@nestjs/testing';
import { AdminMoviesController } from './admin-movies.controller';

describe('AdminMoviesController', () => {
  let controller: AdminMoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminMoviesController],
    }).compile();

    controller = module.get<AdminMoviesController>(AdminMoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
