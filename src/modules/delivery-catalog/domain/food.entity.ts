import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value-object/id.value-object";

type FoodProps = {
  id: Id;
  name: string;
  salesPrice: number;
};

export default class Food extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _salesPrice: number;

  constructor(props: FoodProps) {
    super(props.id);
    this._name = props.name;
    this._salesPrice = props.salesPrice;
  }

  get name(): string {
    return this._name;
  }

  get salesPrice(): number {
    return this._salesPrice;
  }
}
