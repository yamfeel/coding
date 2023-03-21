import { GraphModel } from "../models/GraphModel";
import { NodeModel } from "../models/NodeModel";
import { ConnectionModel } from "../models/ConnectionModel";

export class GraphService {
  private graph: GraphModel;
  private undoStack: any[];
  private redoStack: any[];

  constructor(graph: GraphModel) {
    this.graph = graph;
    this.undoStack = [];
    this.redoStack = [];
  }

  public load(data: any): void {
    // TODO: Load graph data
  }

  public save(): any {
    // TODO: Save graph data
    return {};
  }

  public undo(): void {
    // TODO: Undo previous action
  }

  public redo(): void {
    // TODO: Redo previous action
  }

  public addNode(node: NodeModel): void {
    this.graph.addNode(node);
    this.pushToUndoStack({ type: "addNode", data: node });
  }

  public removeNode(node: NodeModel): void {
    this.graph.removeNode(node);
    this.pushToUndoStack({ type: "removeNode", data: node });
  }

  public addConnection(connection: ConnectionModel): void {
    this.graph.addConnection(connection);
    this.pushToUndoStack({ type: "addConnection", data: connection });
  }

  public removeConnection(connection: ConnectionModel): void {
    this.graph.removeConnection(connection);
    this.pushToUndoStack({ type: "removeConnection", data: connection });
  }

  private pushToUndoStack(action: any): void {
    this.undoStack.push(action);
    this.redoStack = [];
  }
}