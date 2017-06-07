declare let zutil: {
  /**
   * 获取所有的符合指定name子孙元素集合
   * @param root_dom 节点
   * @param name 节点的name
   */
  getElementsByName<T>(root_dom: T, name: string): T[];
  /** 获取所有的符合指定类型子孙元素集合 */
  getElementsByType<T>(root_dom: T, type: string): T[];
  /** 获取所有的符合指定属性子孙元素集合 */
  getElementsByProperty<T>(root_dom: T, propStr: string): T[];
  /** 获取所有的子孙元素 */
  getAllElements<T>(root_dom: T): T[];
  /** 获取所有的符合指定查询条件(queryString)子孙元素集合 */
  queryElements<T>(root_dom: T, queryString: string): T[];
  /** 获取所有的子孙元素集合 */
  getAllChildrens<T>(dom_origin: T): T[];
  /** 获取所有的兄弟节点集合 */
  querySiblings<T>(dom_origin: T): T[];
  /** 寻找最近符合条件的父类 */
  queryClosest<T>(dom_item: T, queryString: string): T;
  /** 获取最顶级的父类 */
  queryTop<T>(dom_item: T): T;
  /** 获得dom_item在目录树中的绝对地址 */
  getCtrlTreePath<T>(dom_item: T): string;
  /** 判断dom_parent是不是dom_child的父级元素 */
  isClosest<T>(dom_child: T, dom_parent: T): boolean;
  /** 在dom_list中筛选出符合条件filter_str的元素集合 */
  filterElements<T>(dom_list: T[], filter_str: string): T;
  /** 获取dom_origin在父类中的index */
  getElementIndex<T>(dom_origin: T): number;
  /** 获取dom_origin在父类中的index */
  _itemParentCheck<T>(root_dom: T, item_dom: T, queryArr: string[]): number;
  /** 判断root_dom是否符合条件condition_str */
  isChecked<T>(root_dom: T, condition_str: string): boolean;
  /** 判断root_dom是否符合条件类型条件type_str */
  _typeIsChecked<T>(check_item: T, type_str: string): boolean;
  /** 查找dom对应的ctrl */
  queryControllersFromDom<T, U>(root_dom: T, queryString: string): U;
  /** 查找ctrl对应的dom */
  getControllerFromDom<T, U>(root_dom: T): any;
  /** 将xml转化为Laya node */
  convertXMLToNode(str: string): Laya.Node;
  xml2json(node: string): any;
  getNodeLocalName(node: Element): string;
  xml_str2json(xmlDocStr: string): any;
  parseXmlString(xmlDocStr: string): XMLDocument;
  /** 对比对象 */
  compareObj(obj_a, obj_b): boolean;
  /** sub_class继承super_class */
  extend(sub_class, super_class, name_sapce);
  nameMap(arr_space, obj, end_obj): any;
  mapType(query: string): any;
  /** 获取字符串的len, 汉字算两个 */
  calcStrLen(str: string): number;
  /** 截取字符串, 汉字算两个 */
  ellipsisStr(str: string | number, max_len: number): string;
  /** sprite 是否被锁定 */
  isSpriteLock(sprite: Laya.Node, type_str: string): boolean;
  /** log */
  log(...args: any[]): void;
  /** 解析字符串中查找 name=value */
  getQueryString(query: string): {} | false;
  /** 解析locatio.href */
  detectModel(query: string): any;
  /** 检测debug的类型 debugType || debugFE*/
  debugType(): string;
  debugStyle(): {};
  /** 检测是否显示stat -- showStat*/
  showStat(): {};
  isShowOberverCmd(): boolean;
  /** 是否是dubug模式 */
  isDebug(): boolean;
  /** 是否是本地自动测试 --  autoTest */
  isAutoTest(): boolean;
};