export enum ActionType {
    MOVE_NODE = "MOVE_NODE",
    CONNECT_NODES = "CONNECT_NODES",
    DISCONNECT_NODES = "DISCONNECT_NODES",
  }
  
  export interface Action<T> {
    type: ActionType;
    payload: T;
  }