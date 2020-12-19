/**
 * 路由组件出口文件
 * yezi 2018年6月24日
 */
import Loadable from 'react-loadable';
import Loading from './widget/Loading';
import AdvancedTable from './tables/AdvancedTables';
import Echarts from './charts/Echarts';
import Recharts from './charts/Recharts';
import Banners from './ui/banners';
import Drags from './ui/Draggable';
import Dashboard from './dashboard/Dashboard';
import BasicAnimations from './animation/BasicAnimations';
import ExampleAnimations from './animation/ExampleAnimations';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import Cssmodule from './cssmodule';
import MapUi from './ui/map';
import QueryParams from './extension/QueryParams';
import Visitor from './extension/Visitor';
import MultipleMenu from './extension/MultipleMenu';
import Env from './env';

const WysiwygBundle = Loadable({
  // 按需加载富文本配置
  loader: () => import('./ui/Wysiwyg'),
  loading: Loading,
});

export default {
  AdvancedTable,
  Echarts,
  Recharts,
  Banners,
  Drags,
  Dashboard,
  BasicAnimations,
  ExampleAnimations,
  AuthBasic,
  RouterEnter,
  WysiwygBundle,
  Cssmodule,
  MapUi,
  QueryParams,
  Visitor,
  MultipleMenu,
  Env,
} as any;
