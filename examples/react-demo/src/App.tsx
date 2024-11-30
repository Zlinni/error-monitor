import "./App.css";
import { ErrorBoundary } from "@error-monitor/react";
function App() {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        console.log("捕获到错误:", {
          error,
          errorInfo,
          time: new Date(errorInfo.timestamp).toLocaleString(),
          location: `${errorInfo.url}:${errorInfo.line}:${errorInfo.column}`,
          component: errorInfo.componentInfo,
        });
      }}
      fallback={<div>出错了!</div>}
    >
      <div>
        <h1>React 错误监控示例</h1>
        <button onClick={() => {
          throw new Error('测试错误');
        }}>点击触发错误</button>
      </div>
    </ErrorBoundary>
  );
}

export default App;
