import { Node } from "./Node";
import { NodeModel } from "../models/NodeModel";
import { ConnectionModel } from "../models/ConnectionModel";

export class Connection {
  public readonly input: Node;
  public readonly output: Node;
  public readonly inputModel: NodeModel;
  public readonly outputModel: NodeModel;
  public readonly model: ConnectionModel;

  constructor(input: Node, output: Node) {
    this.input = input;
    this.output = output;
    this.inputModel = input.model;
    this.outputModel = output.model;
    this.model = new ConnectionModel(input.model, output.model);
  }

  public toJSON(): any {
    return {
      input: this.input.id,
      output: this.output.id,
      inputPort: this.model.inputPort,
      outputPort: this.model.outputPort,
      id: this.model.id,
    };
  }
}