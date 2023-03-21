import { NodeModel } from "./NodeModel";
import { ConnectionModel } from "./ConnectionModel";

export class GraphModel {
  private nodes: NodeModel[];
  private connections: ConnectionModel[];

  constructor() {
    this.nodes = [];
    this.connections = [];
  }

  public getNodes(): NodeModel[] {
    return this.nodes;
  }

  public getConnections(): ConnectionModel[] {
    return this.connections;
  }

  public addNode(node: NodeModel): void {
    this.nodes.push(node);
  }

  public removeNode(node: NodeModel): void {
    const index = this.nodes.findIndex(n => n.id === node.id);
    if (index >= 0) {
      this.nodes.splice(index, 1);
      this.connections = this.connections.filter(c => c.inputNodeId !== node.id && c.outputNodeId !== node.id);
    }
  }

  public addConnection(connection: ConnectionModel): void {
    this.connections.push(connection);
  }

  public removeConnection(connection: ConnectionModel): void {
    const index = this.connections.findIndex(c => c.id === connection.id);
    if (index >= 0) {
      this.connections.splice(index, 1);
    }
  }
}