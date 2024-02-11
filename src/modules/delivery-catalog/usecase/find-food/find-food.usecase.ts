import FoodGateway from "../../gateway/food.gateway";
import { FindFoodInputDto, FindFoodOutputDto } from "./find-food.dto";

export default class FindFoodUseCase {
  constructor(private readonly foodRepository: FoodGateway) {}

  async execute(input: FindFoodInputDto): Promise<FindFoodOutputDto> {
    const food = await this.foodRepository.find(input.id);

    return {
        id: food.id.id,
        name: food.name,
        salesPrice: food.salesPrice,
    };
}
}
