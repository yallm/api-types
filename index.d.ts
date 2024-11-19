declare module "microtus-api-types" {
  export interface Payload {
    event: "prompt" | "message" | "error" | "stop";
    id: string;
    data: any;
  }

  export interface PromptPayload extends Payload {
    event: "prompt";
    id: string;
    data: {
      query: string;
      model: string;
      chat_history: string[];
    };
  }

  export interface StopPayload extends Payload {
    event: "stop";
    id: string;
  }

  export interface fileInfo {
    name: string;
    mimeType: string;
  }
}
