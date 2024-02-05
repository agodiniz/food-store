import Id from "../../@shared/domain/value-object/id.value-object";
import Food from "../domain/food.entity";
import FoodGateway from "../gateway/food.gateway";
import { FoodModel } from "./food.model";

export default class FoodRepository implements FoodGateway {
  async add(food: Food): Promise<void> {
    await FoodModel.create({
      id: food.id.id,
      name: food.name,
      purchasePrice: food.purchasePrice,
      stock: food.stock,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  async find(id: string): Promise<Food> {
    const food = await FoodModel.findOne({ where: { id } });

    if (!food) {
      throw new Error(`Food with id ${id} not found.`);
    }

    return new Food({
      id: new Id(food.id),
      name: food.name,
      purchasePrice: food.purchasePrice,
      stock: food.stock,
      createdAt: food.createdAt,
      updatedAt: food.updatedAt,
    });
  }
}
