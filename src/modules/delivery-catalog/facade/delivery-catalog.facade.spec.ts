import { Sequelize } from "sequelize-typescript";
import FoodModel from "../repository/food.model";
import DeliveryCatalogFacadeFactory from "../factory/facade.factory";

describe("Delivery Catalog Facade unit tests", () => {
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

  it("Find food in deliver catalog", async () => {
    const facade = DeliveryCatalogFacadeFactory.create();
    await FoodModel.create({
      id: "1",
      name: "Apple",
      salesPrice: 110,
    });

    const result = await facade.find({ id: "1" });

    expect(result.id).toBe("1");
    expect(result.name).toBe("Apple");
    expect(result.salesPrice).toBe(110);
  });

  it("Should find all foods in delivery catalog", async () => {
    const facade = DeliveryCatalogFacadeFactory.create();
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

    const result = await facade.findAll();

    expect(result.foods.length).toBe(2);
    expect(result.foods[0].id).toBe("1");
    expect(result.foods[0].name).toBe("Apple");
    expect(result.foods[0].salesPrice).toBe(110);
    expect(result.foods[1].id).toBe("2");
    expect(result.foods[1].name).toBe("Orange");
    expect(result.foods[1].salesPrice).toBe(90);
  });
});
