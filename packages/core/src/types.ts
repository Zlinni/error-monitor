export interface ErrorHandlerOptions {
  onError?: (error: any, errorInfo: ErrorInfo) => void;
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: number;
  url: string;
  line?: number;
  column?: number;
  componentInfo?: {
    name?: string;
    lifecycleHook?: string;
    stack?: string | null;
  };
}
