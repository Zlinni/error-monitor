import React, { useState } from 'react';
import { useErrorHandler } from '@error-monitor/react';

export const ErrorTest: React.FC = () => {
  const handleError = useErrorHandler();
  const [count, setCount] = useState(0);

  const triggerError = () => {
    throw new Error('这是一个同步错误');
  };

  const triggerAsyncError = async () => {
    try {
      await Promise.reject('这是一个异步错误');
    } catch (error) {
      handleError(error);
    }
  };

  const triggerStateError = () => {
    // @ts-ignore 故意制造类型错误
    setCount('不是数字');
  };

  return (
    <div>
      <h2>错误测试组件</h2>
      <p>计数: {count}</p>
      <button onClick={triggerError}>触发同步错误</button>
      <button onClick={triggerAsyncError}>触发异步错误</button>
      <button onClick={triggerStateError}>触发状态错误</button>
    </div>
  );
}; 