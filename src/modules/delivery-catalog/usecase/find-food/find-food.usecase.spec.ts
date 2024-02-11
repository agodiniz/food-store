import Id from "../../../@shared/domain/value-object/id.value-object";
import Food from "../../domain/food.entity";
import FindFoodUseCase from "./find-food.usecase";

const food = new Food({
  id: new Id("1"),
  name: "Apple",
  salesPrice: 110,
});

const MockRepository = () => {
  return {
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(food)),
  };
};

describe("Find a food usecase unit tests", () => {
  it("Should find a food", async () => {
    const foodRepository = MockRepository();
    const usecase = new FindFoodUseCase(foodRepository);

    const input = {
      id: "1",
    };

    const result = await usecase.execute(input);

    expect(foodRepository.find).toHaveBeenCalled();
    expect(result.id).toBe("1");
    expect(result.name).toBe("Apple");
    expect(result.salesPrice).toBe(110);
  });
});
