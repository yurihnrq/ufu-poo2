import { AirConditioningDecorator } from './cars/decorators/AirConditioningDecorator';
import { MultimediaDecorator } from './cars/decorators/MultimediaDecorator';
import { ICar } from './cars/interfaces/ICar';
import { Voyage } from './cars/Voyage';
import { Sell } from './sell/Sell';

let car: ICar = new Voyage(10000, 'Voyage');
car = new MultimediaDecorator(car);
car = new AirConditioningDecorator(car);

Sell.sellCar(car);
