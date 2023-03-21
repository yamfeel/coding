import { v4 as uuidv4 } from "uuid";

export enum NodeStatus {
  IDLE = "IDLE",
  EXECUTING = "EXECUTING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export class NodeModel {
  public readonly id: string;
  public readonly x: number;
  public readonly y: number;
  public status: NodeStatus;

  constructor(x: number, y: number) {
    this.id = uuidv4();
    this.x = x;
    this.y = y;
    this.status = NodeStatus.IDLE;
  }

  public toJSON(): any {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      status: this.status,
    };
  }
}