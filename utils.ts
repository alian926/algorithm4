export function getRandomList(length = 20) {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(Math.round(Math.random() * length));
  }
  return list;
}
