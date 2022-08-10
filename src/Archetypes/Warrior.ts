import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  public energyType: EnergyType;
  static instancesCounter = 0;

  constructor(name: string) {
    super(name);

    this.energyType = 'stamina';
    Warrior.instancesCounter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.instancesCounter;
  }
}

export default Warrior;