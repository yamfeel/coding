import { NodeModel } from "../models/NodeModel";
import { NodeDecorator } from "./NodeDecorator";

export abstract class Node {
  protected model: NodeModel;
  protected decorator: NodeDecorator;

  constructor(model: NodeModel) {
    this.model = model;
    this.decorator = new NodeDecorator(this);
  }

  public abstract execute(): void;

  public getModel(): NodeModel {
    return this.model;
  }

  public getDecorator(): NodeDecorator {
    return this.decorator;
  }
}