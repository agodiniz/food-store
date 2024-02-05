import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import {
  AddFoodFacadeInputDto,
  CheckStockFacadeInputDto,
  CheckStockFacadeOutputDto,
} from "./food-adm.facade.dto";
import FoodAdmFacadeInterface from "./food-adm.facade.interface";

export interface UseCasesProps {
  addUseCase: UseCaseInterface;
  stockUseCase: UseCaseInterface;
}

export default class FoodAdmFacade implements FoodAdmFacadeInterface {
  private _addUsecase: UseCaseInterface;
  private _checkStockUsecase: UseCaseInterface;

  constructor(useCasesProps: UseCasesProps) {
    this._addUsecase = useCasesProps.addUseCase;
    this._checkStockUsecase = useCasesProps.stockUseCase;
  }

  addFood(input: AddFoodFacadeInputDto): Promise<void> {
    return this._addUsecase.execute(input);
  }
  checkStock(
    input: CheckStockFacadeInputDto
  ): Promise<CheckStockFacadeOutputDto> {
    return this._checkStockUsecase.execute(input);
  }
}
