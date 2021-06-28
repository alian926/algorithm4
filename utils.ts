export function getRandomList(length = 20) {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(Math.round(Math.random() * length));
  }
  return list;
}

export function less(a: number, b: number) {
  return a < b;
}

export function more(a: number, b: number) {
  return less(b, a);
}

export function exch(list:number[], a:number, b:number) {
  return ([list[a], list[b]] = [list[b], list[a]]);
}
