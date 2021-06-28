import { getRandomList, less, more, exch } from "./utils";
// 选择排序
// 每次内循环(为外循环索引外侧)找到最小的那个,然后和外循环索引做交换
const selectionSort = (list: number[]) => {
  const { length: l } = list;
  for (let i = 0; i < l; i++) {
    let min = i;
    for (let j = i + 1; j < l; j++) {
      if (less(list[j], list[min])) {
        min = j;
      }
    }
    exch(list, i, min);
  }
  return list;
};

// console.log("selectionSort", selectionSort(getRandomList()));

// 插入排序, 处理有序数组非常快
// 外循环从下标1开始, 内循环在外循环索引内部由右向左比较交换
const insertionSort = (list: number[]) => {
  const { length: l } = list;
  for (let i = 1; i < l; i++) {
    for (let j = i; j > 0; j--) {
      if (less(list[j], list[j - 1])) {
        exch(list, j, j - 1);
      }
    }
  }
  return list;
};

// console.log("insertionSort", insertionSort(getRandomList()));

// 希尔排序, 基于插入排序的快速的排序
// 数理理论还没弄懂~~
const shellSort = (list: number[]) => {
  const { length: l } = list;
  let h = 1;
  while (h < l / 3) {
    h = 3 * h + 1; // 1,4,13,40...
  }
  while (h >= 1) {
    // 将数组变为h有序
    for (let i = h; i < l; i++) {
      // 将list[i]插入到list[i-h], list[i-2h]...中
      for (let j = i; j >= h; j -= h) {
        if (less(list[j], list[j - h])) {
          exch(list, j, j - h);
        }
      }
    }
    h = Math.floor(h / 3);
  }
  return list;
};
// console.log("shellSort", shellSort(getRandomList()));

// 归并排序,  递归二分
const quickCommon = {
  merge: (list: number[], lo: number, mid: number, hi: number) => {
    // 将list[lo..mid]和list[mid+1..hi]归并
    let i = lo;
    let j = mid + 1;
    const aux = [...list];
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        // 左半边用尽（取右半边的元素)
        list[k] = aux[j++];
      } else if (j > hi) {
        // 右半边用尽（取左半边的元素）
        list[k] = aux[i++];
      } else if (less(aux[j], aux[i])) {
        //右半边的当前元素小于左半边的当前元素（取右半边的元素)
        list[k] = aux[j++];
      } else {
        // 右半边的当前元素大于等于左半边的当前元素（取左半边的元素)
        list[k] = aux[i++];
      }
    }
  },
  sort: (list: number[], lo: number, hi: number) => {
    // 将数组a[lo..hi]排序
    if (hi <= lo) {
      return;
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    // 左半边排序
    quickCommon.sort(list, lo, mid);
    // 右半边排序
    quickCommon.sort(list, mid + 1, hi);
    quickCommon.merge(list, lo, mid, hi);
  },
};
const mergeSort = (list: number[]) => {
  // 原地归并的抽象方法
  quickCommon.sort(list, 0, list.length - 1);
  return list;
};
// console.log("mergeSort", mergeSort(getRandomList()));

// 三向切分快速排序
const quick3waySort = (list: number[]) => {
  const quick3way = (list: number[], lo: number, hi: number) => {
    if (hi <= lo) {
      return;
    }
    let lt = lo,
      i = lo + 1,
      gt = hi;
    let v = list[lo];
    while (i <= gt) {
      let cmp = list[i];
      if (less(cmp, v)) {
        exch(list, lt++, i++);
      } else if (more(cmp, v)) {
        exch(list, i, gt--);
      } else {
        i++;
      }
    }
    quickCommon.sort(list, lo, lt - 1);
    quickCommon.sort(list, gt + 1, hi);
  };
  quick3way(list, 0, list.length - 1);
  return list;
};
// console.log("quick3waySort", quick3waySort(getRandomList()));
