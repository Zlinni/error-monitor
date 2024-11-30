import { ErrorHandlerOptions, ErrorInfo } from "./types";

export default class ErrorHandler {
  private options: ErrorHandlerOptions;

  constructor(options: ErrorHandlerOptions = {}) {
    this.options = options;
    this.init();
  }

  private init() {
    // 捕获全局错误
    window.onerror = (message, source, line, column, error) => {
      this.handleError(error || message, {
        line,
        column,
        url: source || window.location.href,
      });
    };

    // 捕获Promise未处理的错误
    window.addEventListener("unhandledrejection", (event) => {
      this.handleError(event.reason);
    });
  }

  public handleError(error: any, extraInfo: Partial<ErrorInfo> = {}) {
    const errorInfo: ErrorInfo = {
      message: this.getErrorMessage(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: Date.now(),
      url: extraInfo.url || window.location.href,
      line: extraInfo.line,
      column: extraInfo.column,
      ...extraInfo
    };

    // 调用用户自定义的onError回调
    if (this.options.onError) {
      this.options.onError(error, errorInfo);
    }
  }

  private getErrorMessage(error: any): string {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  }
}
