import Food from "../domain/food.entity";

export default interface FoodGateway {
  findAll(): Promise<Food[]>;
  find(id: string): Promise<Food[]>;
}
