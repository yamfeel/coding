import { Node } from "./Node";
import { NodeModel } from "../models/NodeModel";
import { NodeRegistry } from "./NodeRegistry";

export class NodeFactory {
  public static createNode(nodeType: string, model: NodeModel): Node | undefined {
    const nodeClass = NodeRegistry.getNodeClass(nodeType);

    if (nodeClass) {
      return new nodeClass(model);
    }

    return undefined;
  }
}