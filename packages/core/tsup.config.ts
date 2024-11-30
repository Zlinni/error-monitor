/*
 * @Author: Zlinni 984328216@qq.com
 * @Date: 2024-11-30 12:45:50
 * @LastEditors: Zlinni 984328216@qq.com
 * @LastEditTime: 2024-11-30 12:45:59
 * @FilePath: \easy-error\packages\core\tsup.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
});
