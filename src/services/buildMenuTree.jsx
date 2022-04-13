import { arrayToTree } from 'performant-array-to-tree';
import * as TablerIcons from 'tabler-icons-react';

// convert icon string into tabler icon element
const mapIcons = Object.keys(TablerIcons).map(key => {
  const elt = {};
  elt[key] = TablerIcons[key];
  return elt;
}).reduce((prev, curr) => {
  return { ...prev, ...curr }
}, {});

export function buildMenuTree(menus) {
  const tree = arrayToTree(menus, { dataField: null, id: 'uuid', parentId: 'parent' })
    .map((item, idx) => {
      const Icon = mapIcons[item.icon];
      const hasChildren = item.children && item.children.length > 0;
      const menu = {
        label: item.name,
        initiallyOpened: !!(idx === 0),
        icon: Icon,
      }
      if (hasChildren) {
        menu.links = (item.children).map(subItem => {
          return {
            label: subItem.name,
            icon: subItem.icon,
            link: subItem.path,
          }
        });
      } else {
        menu.link = item.path;
      }
      return menu;
    });
  return tree;
}