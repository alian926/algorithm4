import {getRandomList} from './utils';
// 选择排序
// 每次内循环(为外循环索引外侧)找到最小的那个,然后和外循环索引做交换
const selectionSort = (list: number[]) => {
  const { length: l } = list;
  for (let i = 0; i < l; i++) {
    let min = i;
    for (let j = i + 1; j < l; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    [list[i], list[min]] = [list[min], list[i]];
  }
  return list;
};

console.log('selectionSort', selectionSort(getRandomList()));

// 插入排序, 处理有序数组非常快
// 外循环从下标1开始, 内循环在外循环索引内部由右向左比较交换
const insertionSort = (list: number[]) => {
  const { length: l } = list;
  for (let i = 1; i < l; i++) {
    for (let j = i; j > 0; j--) {
      if(list[j] < list[j-1]) {
        [list[j], list[j-1]] = [list[j-1], list[j]];
      }
    }
  }
  return list;
};

console.log('insertionSort', insertionSort(getRandomList()));