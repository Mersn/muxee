import { fileURLToPath, URL } from "node:url"
import path from 'path'
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import Components from "unplugin-vue-components/vite"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_BASE_PATH,
    plugins: [
      vue(),
      vueDevTools(),
      Components({
        // 可选：开启目录命名空间
        directoryAsNamespace: true,
        deep: true,
      }),
    ],
    build: {
      // 关闭 sorcemap 报错不会映射到源码
      sourcemap: false,
      assetsInlineLimit: 0,
      // 打包大小超出 400kb 提示警告
      chunkSizeWarningLimit: 400,
      rolldownOptions: {
        // https://rolldown.rs/reference/    https://rolldown.nodejs.cn/
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames(chunkInfo) {
            const [name, ext] = path.basename(chunkInfo.name).split('.')
            if (['jpg', 'png', 'gif', 'bpm'].includes(ext.toLowerCase())) {
              return 'assets/images/[name]-[hash].[ext]'
            }
            return 'assets/[ext]/[name]-[hash].[ext]'
          },
          codeSplitting: {
            groups: [
              {
                test: /node_modules/,
                name: 'vendor',
              },
              {
                test: /vue|vue-router|vue-i18n|pinia/,
                name: 'vue',
              },
            ],
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  }
})
