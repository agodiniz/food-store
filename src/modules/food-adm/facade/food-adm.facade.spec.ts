import { Sequelize } from "sequelize-typescript";
import { FoodModel } from "../repository/food.model";
import FoodRepository from "../repository/food.repository";
import AddFoodUseCase from "../usecase/add-food/add-food.usecase";
import FoodAdmFacade from "./food-adm.facade";
import FoodAdmFacadeFactory from "../factory/facade.factory";

describe("FoodAdmFacade test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([FoodModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("Should create a foood", async () => {
    // const foodRepository = new FoodRepository();
    // const addFoodUseCase = new AddFoodUseCase(foodRepository);
    // const foodFacade = new FoodAdmFacade({
    //   addUseCase: addFoodUseCase,
    //   stockUseCase: undefined,
    // });

    const foodFacade = FoodAdmFacadeFactory.create();

    const input = {
      id: "1",
      name: "Pizza",
      purchasePrice: 70,
      stock: 10,
    };

    await foodFacade.addFood(input);

    const food = await FoodModel.findOne({ where: { id: "1" } });
    expect(food).toBeDefined();
    expect(food.id).toBe(food.id);
    expect(food.name).toBe(input.name);
    expect(food.purchasePrice).toBe(input.purchasePrice);
    expect(food.stock).toBe(input.stock);
  });

  it("Should check foood stock", async () => {
    const foodFacade = FoodAdmFacadeFactory.create();
    const input = {
      id: "1",
      name: "Pizza",
      purchasePrice: 70,
      stock: 10,
    };
    await foodFacade.addFood(input);
    const result = await foodFacade.checkStock({ foodId: "1" });

    expect(result.foodId).toBe(input.id);
    expect(result.stock).toBe(input.stock);
  });
});
