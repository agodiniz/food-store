import FoodGateway from "../../gateway/food.gateway";
import { CheckStockInputDto, CheckStockOutputDto } from "./check-stock.dto";

export default class CheckStockUseCase {
  private _foodRepository: FoodGateway;

  constructor(_foodRepository: FoodGateway) {
    this._foodRepository = _foodRepository;
  }

  async execute(input: CheckStockInputDto): Promise<CheckStockOutputDto> {
    const food = await this._foodRepository.find(input.foodId);
    return {
      foodId: food.id.id,
      stock: food.stock,
    };
  }
}
