declare module "microtus-api-types" {
  export interface Payload {
    event: "prompt" | "message" | "error";
    data: any;
  }

  export interface PromptPayload extends Payload {
    event: "prompt";
    data: {
      query: string;
      model: string;
      messages: { role: "user" | "assistant"; content: string };
    };
  }

  export interface fileInfo {
    name: string;
    mimeType: string;
  }
}
