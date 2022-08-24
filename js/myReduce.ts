function myReduce<T = any, TReturn = any>(arr: T[], callback: (res: TReturn, item: T) => TReturn, initValue: T) {
  let total = initValue as any;
  arr.forEach(item => {
    total = callback(total, item)
  })
  return total;
}

myReduce([1, 2, 3], (res, item) => res + item, 0)

