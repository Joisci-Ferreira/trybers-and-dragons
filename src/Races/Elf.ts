import Race from './Race';

class Elf extends Race {
  public lifeInPoints: number;
  static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this.lifeInPoints = 99;
    Elf.instancesCounter += 1;
  }

  public get maxLifePoints(): number {
    return this.lifeInPoints;
  }

  public static createdRacesInstances(): number {
    return this.instancesCounter;
  }
}

export default Elf;