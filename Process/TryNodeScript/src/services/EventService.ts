export class EventService {
    private listeners: Map<string, Function[]>;
  
    constructor() {
      this.listeners = new Map();
    }
  
    public addEventListener(event: string, callback: Function): void {
      // TODO: Add event listener
    }
  
    public removeEventListener(event: string, callback: Function): void {
      // TODO: Remove event listener
    }
  
    public dispatchEvent(event: string, payload?: any): void {
      // TODO: Dispatch event to all registered listeners
    }
  }