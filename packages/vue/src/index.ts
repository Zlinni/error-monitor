import type { App, ComponentPublicInstance } from "vue";
import { ErrorHandler, type ErrorHandlerOptions } from "@error-monitor/core";

export function createErrorMonitor(options: ErrorHandlerOptions = {}) {
  const errorHandler = new ErrorHandler(options);

  return {
    install(app: App) {
      app.config.errorHandler = (error, instance: ComponentPublicInstance | null, info) => {
        errorHandler.handleError(error, {
          componentInfo: {
            name: instance?.$options?.name || 'Anonymous',
            lifecycleHook: info
          },
        });
      };
    },
  };
}
