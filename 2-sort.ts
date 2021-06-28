// 选择排序
// 每次内循环找到最小的那个,然后和外循环的交换
const selectionSort = (list: number[]) => {
  const { length: l } = list;
  for (let i = 0; i < l; i++) {
    let min = i;
    for (let j = i + 1; j < l; j++) {
      if (list[j] < list[i]) {
        min = j;
      }
    }
    [list[i], list[min]] = [list[min], list[i]];
  }
  return list;
};

// console.log(selectionSort([1, 3, 2]));

// 插入排序
// 
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

console.log(insertionSort([1, 3, 2]));