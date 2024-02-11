import FindAllFoodsUseCase from "../usecase/find-all-foods/find-all-foods.usecase";
import {
    FindAllDeliveryCatalogFacadeOutputDto,
  FindDeliveryCatalogFacadeInputDto,
  FindDeliveryCatalogFacadeOutputDto,
} from "./delivery-catalog.facade.dto";
import DeliveryCatalogFacadeInterface from "./delivery-catalog.interface";

export interface UseCasesProps {
  findUseCase: FindAllFoodsUseCase;
  findAllUseCase: FindAllFoodsUseCase;
}

export default class DeliveryCatalogFacade
  implements DeliveryCatalogFacadeInterface
{
  private _findUseCase: FindAllFoodsUseCase;
  private _findAllUseCase: FindAllFoodsUseCase;

  constructor(props: UseCasesProps) {
    this._findUseCase = props.findUseCase;
    this._findAllUseCase = props.findAllUseCase;
  }

  async find(
  ): Promise<FindDeliveryCatalogFacadeOutputDto> {
    return await this._findUseCase.execute(id);
  }

  async findAll(): Promise<FindAllDeliveryCatalogFacadeOutputDto> {
    return await this._findAllUseCase.execute();
  }
}
