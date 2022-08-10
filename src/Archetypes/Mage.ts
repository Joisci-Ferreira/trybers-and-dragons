import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  public energyType: EnergyType;
  static instancesCounter = 0;

  constructor(name: string) {
    super(name);

    this.energyType = 'mana';
    Mage.instancesCounter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.instancesCounter;
  }
}

export default Mage;