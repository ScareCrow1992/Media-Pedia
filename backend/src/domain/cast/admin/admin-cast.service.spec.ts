import { Test, TestingModule } from '@nestjs/testing';
import { AdminCastService } from './admin-cast.service';

describe('AdminCastService', () => {
  let service: AdminCastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminCastService],
    }).compile();

    service = module.get<AdminCastService>(AdminCastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
