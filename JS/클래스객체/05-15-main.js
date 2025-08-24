// import { export이름1, export이름2 } from 'OOO.js';
// 개별 import
import { plus, minus, height, weight, Animal, color }
from './05-15-module.js';
console.log(plus());
console.log(minus());
console.log(height);
console.log(weight);
const animal = new Animal('ShuShu');
console.log(animal.name);
console.log(color);