import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  public energyType: EnergyType;
  static instancesCounter = 0;

  constructor(name: string) {
    super(name);

    this.energyType = 'mana';
    Necromancer.instancesCounter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.instancesCounter;
  }
}

export default Necromancer;