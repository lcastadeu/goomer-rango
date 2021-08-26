import { HttpRequestCode } from "./enum/http_request_code.enum";

export class ReturnMessage {

  private statusCode: HttpRequestCode;

  private message: string;

  private data: any;

  public constructor(data?: any) {
    this.data = data;
    this.statusCode = HttpRequestCode.Ok;
    this.message = "Operação realizada com sucesso!";
    console.log(this);
  }

  public setStatusCode(statusCode: HttpRequestCode) {
    this.statusCode = statusCode;
    return this;
  }

  public setMessage(message: string) {
    this.message = message;
    return this;
  }

}