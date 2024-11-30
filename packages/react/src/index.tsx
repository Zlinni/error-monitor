import React, { Component, ErrorInfo, ReactNode } from "react";
import { ErrorHandler, type ErrorHandlerOptions } from "@error-monitor/core";

interface Props extends ErrorHandlerOptions {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  private errorHandler: ErrorHandler;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = new ErrorHandler(props);
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.errorHandler.handleError(error, {
      componentInfo: {
        stack: errorInfo.componentStack,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>出错了！</h1>;
    }

    return this.props.children;
  }
}

// 创建自定义 Hook 用于捕获函数组件中的错误
export function useErrorHandler() {
  const errorHandler = new ErrorHandler({
    onError: (error, errorInfo) => {
      console.error("React Hook Error:", error, errorInfo);
    },
  });

  return (error: unknown) => {
    errorHandler.handleError(error);
  };
}
