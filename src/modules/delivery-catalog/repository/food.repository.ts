import Id from "../../@shared/domain/value-object/id.value-object";
import Food from "../domain/food.entity";
import FoodGateway from "../gateway/food.gateway";
import FoodModel from "./food.model";

export default class FoodRepository implements FoodGateway {
  async findAll(): Promise<Food[]> {
    const foods = await FoodModel.findAll();

    return foods.map(
      (food) =>
        new Food({
          id: new Id(food.id),
          name: food.name,
          salesPrice: food.salesPrice,
        })
    );
  }

  async find(id: string): Promise<Food[]> {
    throw new Error("Method not implemented");
  }
}
