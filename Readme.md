# @zlinni/error-monitor

一个轻量级的前端错误监控工具，支持 React 和 Vue 应用。

## 特性

- 🎯 自动捕获运行时错误和未处理的 Promise 异常
- ⚛️ 支持 React 应用 (ErrorBoundary + Hooks)
- 💚 支持 Vue 3 应用 (插件形式)
- 🎨 灵活的错误处理配置
- 📦 基于 TypeScript 开发，提供完整类型定义

## 安装

### React 应用

```tsx
// 全局错误处理
import { ErrorHandler } from "@zlinni/error-monitor-core";
new ErrorHandler({
  onError: (error, errorInfo) => {
    console.log("全局错误:", {
      error,
      errorInfo,
      time: new Date(errorInfo.timestamp).toLocaleString(),
    });
  },
});
// 组件错误边界
import { ErrorBoundary } from "@zlinni/error-monitor-react";
function App() {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        console.log("组件错误:", {
          error,
          errorInfo,
          time: new Date(errorInfo.timestamp).toLocaleString(),
        });
      }}
      fallback={<div>出错了!</div>}
    >
      <YourComponent />
    </ErrorBoundary>
  );
}
// Hooks 方式处理错误
import { useErrorHandler } from "@zlinni/error-monitor-react";
function YourComponent() {
  const handleError = useErrorHandler();
  const handleAsyncOperation = async () => {
    try {
      // 异步操作
    } catch (error) {
      handleError(error);
    }
  };
}
```

### Vue 应用

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { createErrorMonitor } from "@zlinni/error-monitor-vue";
const app = createApp(App);
app.use(
  createErrorMonitor({
    onError: (error, errorInfo) => {
      console.log("Vue 错误:", {
        error,
        errorInfo,
        time: new Date(errorInfo.timestamp).toLocaleString(),
        component: errorInfo.componentInfo,
      });
    },
  })
);
app.mount("#app");
```

## 错误信息结构

```typescript
interface ErrorInfo {
  message: string; // 错误信息
  stack?: string; // 错误堆栈
  timestamp: number; // 错误发生时间戳
  url: string; // 错误发生页面 URL
  line?: number; // 错误发生行号
  column?: number; // 错误发生列号
  componentInfo?: {
    // 组件相关信息
    name?: string; // 组件名称
    lifecycleHook?: string; // 生命周期钩子
    stack?: string | null; // 组件堆栈
  };
}
```
