/*const swap = (arr: number[], target: number): number[] => {
  if (arr[0] != target) {
    return arr;
  }
  const temp = arr[1];
  arr[1] = target;
  arr[0] = temp
  return arr;
}


const exclude = (arr:number[][], excludeList:number[][])=>{
  return arr.filter(v=> !excludeList.includes(v))
}*/

function countPaths(n: number, roads: number[][]) {
  const dp: { [key: number]: number } = {};

  function minTime(n: number, roads:number[][]) {
    if (n <= 0 || roads.length == 0) {
      return 0;
    }

    if (dp[n]) {
      return dp[n];
    }

    const related = roads.filter(r => r[1] == n);

    if(related.length==0){
      return 0
    }

    const all = related.map(v => minTime(v[0], roads) + v[2]);
    const res = Math.min(...all);

    dp[n] = res;

    return res;
  }

  const min =  minTime(n-1, roads);
  console.log(min,'xxx')
}


const roads = [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]];
// const roads = [[0, 6, 7], [0, 4, 5], [4, 6, 2]];
countPaths(5, roads);
