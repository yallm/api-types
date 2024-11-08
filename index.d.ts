declare module "microtus-api-types" {
  export interface Payload {
    event: "prompt" | "message" | "error";
    data: any;
  }

  export interface PromptPayload extends Payload {
    event: "prompt";
    data: {
      query: string;
      id: number;
      model: string;
      messages: string[];
    };
  }

  export interface fileInfo {
    name: string;
    mimeType: string;
  }
}
