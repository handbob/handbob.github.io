import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { Car } from '../scripts/classes/car'
import { House } from '../scripts/classes/house'
import { Person } from '../scripts/classes/person'

const car = new Car("Toyota", "Camry", 2020, 20000.0, "Blue", 15000);
car.displayInfo();

const house = new House("1234 Elm St", 4, 250000.0, "Single Family", 1995);
house.displayInfo();

const person = new Person("John Doe", 30, "Male", "456 Elm Street", "555-1234");
person.displayInfo();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
