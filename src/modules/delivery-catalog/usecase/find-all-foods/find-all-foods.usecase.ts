import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import FoodGateway from "../../gateway/food.gateway";

export default class FindAllFoodsUseCase implements UseCaseInterface {
  constructor(private foodRepository: FoodGateway) {}

  async execute(): Promise<any> {
    const foods = await this.foodRepository.findAll();

    return {
      foods: foods.map((food) => ({
        id: food.id.id,
        name: food.name,
        salesPrice: food.salesPrice,
      })),
    };
  }
}
