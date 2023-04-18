import DefaultTheme from "vitepress/theme";
import "./custom.css";


import Locale from './Locale.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: Locale
}