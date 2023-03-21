import { Node } from "./Node";

export class NodeRegistry {
  private static nodeClasses: Map<string, typeof Node> = new Map();

  public static registerNode(nodeType: string, nodeClass: typeof Node): void {
    NodeRegistry.nodeClasses.set(nodeType, nodeClass);
  }

  public static getNodeClass(nodeType: string): typeof Node | undefined {
    return NodeRegistry.nodeClasses.get(nodeType);
  }
}