import { v4 as uuidv4 } from "uuid";
import { NodeModel } from "./NodeModel";

export class ConnectionModel {
  public readonly id: string;
  public readonly inputNodeId: string;
  public readonly outputNodeId: string;
  public readonly inputNodeOutputKey: string;
  public readonly outputNodeInputKey: string;

  constructor(inputNodeModel: NodeModel, outputNodeModel: NodeModel, inputNodeOutputKey?: string, outputNodeInputKey?: string) {
    this.id = uuidv4();
    this.inputNodeId = inputNodeModel.id;
    this.outputNodeId = outputNodeModel.id;
    this.inputNodeOutputKey = inputNodeOutputKey ?? "";
    this.outputNodeInputKey = outputNodeInputKey ?? "";
  }

  public toJSON(): any {
    return {
      id: this.id,
      inputNodeId: this.inputNodeId,
      outputNodeId: this.outputNodeId,
      inputNodeOutputKey: this.inputNodeOutputKey,
      outputNodeInputKey: this.outputNodeInputKey,
    };
  }
}