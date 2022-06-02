import { ICar } from '../interfaces/ICar';
import { CarDecorator } from './CarDecorator';

export class AirConditioningDecorator extends CarDecorator {
  constructor(car: ICar) {
    if (car instanceof AirConditioningDecorator) {
      throw new Error('AirConditioningDecorator can not be decorated');
    }
    super(car);
  }

  public get price(): number {
    return this.car.price + 2000;
  }

  public get description(): string {
    return this.car.description + ' with air conditioning';
  }
}
