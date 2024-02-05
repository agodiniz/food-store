import AddFoodUseCase from "./add-food.usecase";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn(),
  };
};

describe("Add food usecase unit tests", () => {
  it("Should add a new food", async () => {
    // repository
    const foodRepository = MockRepository();
    // usecase
    const usecase = new AddFoodUseCase(foodRepository);

    const input = {
      name: "Pizza",
      purchasePrice: 70,
      stock: 10,
    };

    const result = await usecase.execute(input);

    expect(foodRepository.add).toHaveBeenCalled();
    expect(result.id).toBeDefined;  
    expect(result.name).toBe(input.name);
    expect(result.purchasePrice).toBe(input.purchasePrice);
    expect(result.stock).toBe(input.stock);
  });
});
