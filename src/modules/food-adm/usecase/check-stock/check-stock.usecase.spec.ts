import Id from "../../../@shared/domain/value-object/id.value-object";
import Food from "../../domain/food.entity";
import CheckStockUseCase from "./check-stock.usecase";

const food = new Food({
  id: new Id("1"),
  name: "Apple",
  purchasePrice: 100,
  stock: 10,
});

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(food)),
  };
};

describe("Check stock unit tests", () => {
  it("Should check stock quantity", async () => {
    // repository
    const FoodRepository = MockRepository();
    // usecase
    const checkStockUseCase = new CheckStockUseCase(FoodRepository);

    const input = {
      foodId: "1",
    };

    const result = await checkStockUseCase.execute(input);

    expect(FoodRepository.find).toHaveBeenCalled();
    expect(result.foodId).toBe("1");
    expect(result.stock).toBe(10);
  });
});
