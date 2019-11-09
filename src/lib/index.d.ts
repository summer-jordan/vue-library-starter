import { PluginObject } from 'vue';
import { Vue } from 'vue-property-decorator';

declare class MyVueLibrary extends Vue {}
declare const plugin: PluginObject<MyVueLibrary>;
export { MyVueLibrary };
export default plugin;
