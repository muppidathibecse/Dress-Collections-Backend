import { Test, TestingModule } from '@nestjs/testing';
import { BagsController } from './bags.controller';

describe('BagsController', () => {
  let controller: BagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BagsController],
    }).compile();

    controller = module.get<BagsController>(BagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
