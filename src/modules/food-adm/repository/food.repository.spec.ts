import { Sequelize } from "sequelize-typescript";
import { FoodModel } from "./food.model";
import Id from "../../@shared/domain/value-object/id.value-object";
import Food from "../domain/food.entity";
import FoodRepository from "./food.repository";

describe("FoodRepository test", () => {
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

  it("Should create a new Food in Model", async () => {
    const foodProps = {
      id: new Id("1"),
      name: "Apple",
      purchasePrice: 10,
      stock: 10,
    };
    const food = new Food(foodProps);
    const foodRepository = new FoodRepository();
    const result = await foodRepository.add(food);

    const foodDb = await FoodModel.findOne({ where: { id: foodProps.id.id } });

    expect(foodProps.id.id).toEqual(foodDb.id);
    expect(foodProps.name).toEqual(foodDb.name);
    expect(foodProps.purchasePrice).toEqual(foodDb.purchasePrice);
    expect(foodProps.stock).toEqual(foodDb.stock);
  });

  it("Should find a Food in Model",
    async () => {
      const foodRepository = new FoodRepository();

      FoodModel.create({
        id: "1",
        name: "Apple",
        purchasePrice: 10,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const food = await foodRepository.find("1");

      expect(food.id.id).toEqual("1");
      expect(food.name).toEqual("Apple");
      expect(food.purchasePrice).toEqual(10);
      expect(food.stock).toEqual(10);
      expect(food.createdAt).toBeDefined();
      expect(food.updatedAt).toBeDefined();
    });
});
