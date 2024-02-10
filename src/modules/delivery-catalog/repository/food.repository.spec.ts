import { Sequelize } from "sequelize-typescript";
import FoodModel from "./food.model";
import FoodRepository from "./food.repository";

describe("FoodRepository unit tests", () => {
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

  it("Find all food models", async () => {
    await FoodModel.create({
      id: "1",
      name: "Apple",
      salesPrice: 110,
    });

    await FoodModel.create({
      id: "2",
      name: "Orange",
      salesPrice: 90,
    });

    const foodRepository = new FoodRepository();
    const foods = await foodRepository.findAll();

    expect(foods.length).toBe(2);
    expect(foods[0].id.id).toBe("1");
    expect(foods[0].name).toBe("Apple");
    expect(foods[0].salesPrice).toBe(110);
    expect(foods[1].id.id).toBe("2");
    expect(foods[1].name).toBe("Orange");
    expect(foods[1].salesPrice).toBe(90);
  });
});
