/*
 * @Author: Zlinni 984328216@qq.com
 * @Date: 2024-11-30 14:22:06
 * @LastEditors: Zlinni 984328216@qq.com
 * @LastEditTime: 2024-11-30 14:24:47
 * @FilePath: \easy-error\examples\react-demo\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorHandler } from "@error-monitor/core";

// 全局错误处理
new ErrorHandler({
  onError: (error, errorInfo) => {
    console.log("全局错误:", {
      error,
      errorInfo,
      time: new Date(errorInfo.timestamp).toLocaleString(),
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
