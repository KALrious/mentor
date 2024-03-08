import { Test, TestingModule } from '@nestjs/testing';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';

describe('LevelController', () => {
  let controller: LevelController;
  let service = {
    createNewLevel: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelController],
      providers: [LevelService],
    })
      .overrideProvider(LevelService)
      .useValue(service)
      .compile();

    controller = module.get<LevelController>(LevelController);
  });

  it('should create a new level', () => {
    const spyLevelService = jest
      .spyOn(service, 'createNewLevel')
      .mockImplementation(() => ({
        id: 1,
        name: 'test-level',
      }));

    const result = controller.addLevel({
      name: 'test-level',
    });

    expect(spyLevelService).toHaveBeenCalledTimes(1);
    expect(spyLevelService).toHaveBeenCalledWith({
      name: 'test-level',
    });
    expect(result).toStrictEqual({
      id: 1,
      name: 'test-level',
    });
  });
});
