type MessageListener<T = unknown> = (payload: T) => void

type WebSocketServiceEventMap = {
  'connect': (event: Event) => void
  'disconnect': (event: CloseEvent) => void
  'error': (event: Event) => void
}

type WebSocketServiceEventType = keyof WebSocketServiceEventMap

export interface WebSocketService {
  addListener<T extends keyof WebSocketServiceEventMap>(type: T, callback: WebSocketServiceEventMap[T]): void

  removeListener<T extends WebSocketServiceEventType>(type: T, callback: WebSocketServiceEventMap[T]): void

  addMessageListener<T>(type: string, listener: MessageListener<T>): void

  removeMessageListener(listener: MessageListener<any>): void

  sendMessage<T>(type: string, body: T): void

  dispose(): void
}

export class WebSocketServiceImpl implements WebSocketService {
  private readonly client:  WebSocket

  private messageListeners: [string, MessageListener<any>][] = []

  constructor(private readonly url: string) {
    this.client = new WebSocket(url)

    this.client.addEventListener('message', this.handleMessage.bind(this))
  }

  private handleMessage(event: MessageEvent) {
    const data = JSON.parse(event.data)
    this.messageListeners
      .filter(([type]) => type === data.type)
      .forEach(([, listener]) => listener(data.payload))
  }

  addListener<T extends WebSocketServiceEventType>(type: T, callback: WebSocketServiceEventMap[T]): void {
    switch (type) {
      case 'disconnect':
        this.client.addEventListener('close', callback)
        break;
      case 'connect':
        this.client.addEventListener('open', callback as (event: Event) => void)
        break;
      case 'error':
        this.client.addEventListener('error', callback as (event: Event) => void)
        break;
    }
  }

  removeListener<T extends keyof WebSocketServiceEventMap>(type: T, callback: WebSocketServiceEventMap[T]): void {
    switch (type) {
      case 'disconnect':
        this.client.removeEventListener('close', callback)
        break;
      case 'connect':
        this.client.removeEventListener('open', callback as (event: Event) => void)
        break;
      case 'error':
        this.client.removeEventListener('error', callback as (event: Event) => void)
        break;
    }
  }

  addMessageListener<T>(type: string, listener: MessageListener<T>): void {
    this.messageListeners.push([type, listener])
  }

  removeMessageListener(listener: MessageListener<any>): void {
    this.messageListeners = this.messageListeners.filter(([, storedListener]) => storedListener !== listener)
  }

  sendMessage<T>(type: string, payload: T): void {
    this.client.send(JSON.stringify({type, payload}))
  }

  dispose(): void {
   this.client.close()
  }
}
