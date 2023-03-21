import { EventService } from "./EventService";
import { NodeModel } from "../models/NodeModel";
import { ConnectionModel } from "../models/ConnectionModel";

export class ActionService {
  private eventService: EventService;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

  public moveNode(node: NodeModel, x: number, y: number): void {
    // TODO: Move node
  }

  public connect(connection: ConnectionModel): void {
    // TODO: Connect nodes
  }

  public disconnect(connection: ConnectionModel): void {
    // TODO: Disconnect nodes
  }
}