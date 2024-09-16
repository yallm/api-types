declare module "microtus-api-types" {
  export interface Payload {
    event: "prompt" | "message" | "error";
    data: any;
  }
  
  export interface fileInfo {
    name: string;
  }
}
