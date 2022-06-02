import { ICar } from '../interfaces/ICar';
import { CarDecorator } from './abstracts/CarDecorator';

export class AlloyWheelDecorator extends CarDecorator {
  constructor(car: ICar) {
    super(car);
  }

  public get price(): number {
    return this.car.price + 2000;
  }

  public get description(): string {
    return this.car.description + ' with alloy wheels';
  }
}
