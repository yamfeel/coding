import { Node } from "./Node";

export class NodeDecorator {
  private node: Node;

  constructor(node: Node) {
    this.node = node;
  }

  public execute(): void {
    this.node.execute();
  }

  public getModel() {
    return this.node.getModel();
  }
}