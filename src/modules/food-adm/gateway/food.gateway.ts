import Food from "../domain/food.entity";

export default interface FoodGateway {
    add(food: Food): Promise<void>;
    find(id: string): Promise<Food>;
}