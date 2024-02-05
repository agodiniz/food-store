import Id from "../../../@shared/domain/value-object/id.value-object";
import Food from "../../domain/food.entity";
import FoodGateway from "../../gateway/food.gateway";
import { AddFoodInputDto, AddFoodOutputDto } from "./add-food.dto";

export default class AddFoodUseCase {
  private _foodRepository: FoodGateway;

  constructor(_foodRepository: FoodGateway) {
    this._foodRepository = _foodRepository;
  }

  async execute(input: AddFoodInputDto): Promise<AddFoodOutputDto> {
    const props = {
      id: new Id(input.id),
      name: input.name,
      purchasePrice: input.purchasePrice,
      stock: input.stock,
    };

    const food = new Food(props);
    this._foodRepository.add(food);

    return {
        id: food.id.id,
        name: food.name,
        purchasePrice: food.purchasePrice,
        stock: food.stock,
        createdAt: food.createdAt,
        updatedAt: food.updatedAt,
    }
  }
}
