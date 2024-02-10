import Id from "../../../@shared/domain/value-object/id.value-object";
import Food from "../../domain/food.entity";
import FindAllFoodsUseCase from "./find-all-foods.usecase";

const food = new Food({
  id: new Id("1"),
  name: "Apple",
  salesPrice: 100,
});

const food2 = new Food({
  id: new Id("2"),
  name: "Orange",
  salesPrice: 80,
});

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([food, food2])),
  };
};

describe("Find all foods usecase unit tests", () => {
  it("Should find all foods", async () => {
    // repository
    const foodRepository = MockRepository();
    // usecase
    const usecase = new FindAllFoodsUseCase(foodRepository);
    const result = await usecase.execute();
    
    expect(foodRepository.findAll).toHaveBeenCalled();
    expect(result.foods.length).toBe(2);
    expect(result.foods[0].id).toBe("1");
    expect(result.foods[0].name).toBe("Apple");
    expect(result.foods[0].salesPrice).toBe(100);
    expect(result.foods[1].id).toBe("2");
    expect(result.foods[1].name).toBe("Orange");
    expect(result.foods[1].salesPrice).toBe(80);
  });
});
