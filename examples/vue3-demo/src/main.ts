import { createApp } from "vue";
import App from "./App.vue";
import { createErrorMonitor } from "@error-monitor/vue";

const app = createApp(App);

app.use(
  createErrorMonitor({
    onError: (error, errorInfo) => {
      console.log("捕获到错误:", {
        error,
        errorInfo,
        time: new Date(errorInfo.timestamp).toLocaleString(),
        location: `${errorInfo.url}:${errorInfo.line}:${errorInfo.column}`,
        component: errorInfo.componentInfo,
      });
    },
  })
);

app.mount("#app");
