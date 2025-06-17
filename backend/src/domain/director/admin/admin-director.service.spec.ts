import { Test, TestingModule } from '@nestjs/testing';
import { AdminDirectorService } from './admin-director.service';

describe('AdminDirectorService', () => {
  let service: AdminDirectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminDirectorService],
    }).compile();

    service = module.get<AdminDirectorService>(AdminDirectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
