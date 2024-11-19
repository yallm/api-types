declare module "microtus-api-types" {
  export interface Payload {
    event: "prompt" | "message" | "error" | "stop";
    id: number;
    data: any;
  }

  export interface PromptPayload extends Payload {
    event: "prompt";
    id: number;
    data: {
      query: string;
      model: string;
      chat_history: string[];
    };
  }

  export interface StopPayload extends Payload {
    event: "stop";
    id: number;
  }

  export interface fileInfo {
    name: string;
    mimeType: string;
  }
}
