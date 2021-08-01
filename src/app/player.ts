export class Player {
    id: number;
    order: number;
    name: string;
    points: number;
    isActive: Boolean;

    constructor(_id: number, _order: number, _name: string, _points: number, _isActive: Boolean) {
      this.id = _id;
      this.order = _order;
      this.name = _name;
      this.points = _points;
      this.isActive = _isActive;
    }
  }