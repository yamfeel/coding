import { GraphModel } from "../models/GraphModel";
import { NodeModel } from "../models/NodeModel";
import { ConnectionModel } from "../models/ConnectionModel";
import { NodeRegistry } from "../components/NodeRegistry";

export class GraphController {
  private graph: GraphModel;
  private nodeRegistry: NodeRegistry;

  constructor(graph: GraphModel, nodeRegistry: NodeRegistry) {
    this.graph = graph;
    this.nodeRegistry = nodeRegistry;
  }

  public addNode(nodeType: string, x: number, y: number): NodeModel | undefined {
    const NodeClass = this.nodeRegistry.getNodeClass(nodeType);
    if (!NodeClass) {
      console.error(`Cannot find node type ${nodeType} in registry`);
      return undefined;
    }

    const id = `node-${Date.now()}`;
    const node = new NodeClass(id, x, y);
    this.graph.addNode(node);

    return node;
  }

  public removeNode(node: NodeModel): void {
    this.graph.removeNode(node);
  }

  public addConnection(inputNodeId: string, outputNodeId: string): ConnectionModel | undefined {
    const inputNode = this.graph.getNodes().find(node => node.id === inputNodeId);
    const outputNode = this.graph.getNodes().find(node => node.id === outputNodeId);
    if (!inputNode || !outputNode) {
      console.error(`Cannot find input node with id ${inputNodeId} or output node with id ${outputNodeId}`);
      return undefined;
    }

    const id = `connection-${Date.now()}`;
    const connection = new ConnectionModel(id, inputNode, outputNode);
    this.graph.addConnection(connection);

    return connection;
  }

  public removeConnection(connection: ConnectionModel): void {
    this.graph.removeConnection(connection);
  }
}