import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  public energyType: EnergyType;
  static instancesCounter = 0;

  constructor(name: string) {
    super(name);

    this.energyType = 'stamina';
    Ranger.instancesCounter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.instancesCounter;
  }
}

export default Ranger;