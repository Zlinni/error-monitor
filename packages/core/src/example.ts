import ErrorHandler from './index';

const errorHandler = new ErrorHandler({
  onError: (error, errorInfo) => {
    console.log('错误信息:', errorInfo.message);
    console.log('错误堆栈:', errorInfo.stack);
    console.log('发生时间:', new Date(errorInfo.timestamp));
    console.log('错误位置:', `${errorInfo.url}:${errorInfo.line}:${errorInfo.column}`);
    
    // 这里可以将错误信息上报到服务器
  }
}); 
