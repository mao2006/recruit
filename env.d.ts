/// <reference types="vite/client" />
/// <reference types="vite/client" />
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<object, object, never>
  export default component
}
