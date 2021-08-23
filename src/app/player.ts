export class Player {
    id: number;
    name: string;
    points: number;
    isActive: Boolean;

    constructor(id: number, name: string, points: number, isActive: Boolean) {
      this.id = id;
      this.name = name;
      this.points = points;
      this.isActive = isActive;
    }
  }

export const players: Player[] = []