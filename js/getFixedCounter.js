function getFixedCounter(k) {
  let value = 0
  return {
    increment:(n=k)=>{
      value= k+n;
    },
    decrement:(n=-k)=>{
      value= k-n;
    },
    getValue:()=>{
      console.log(value)
      return value;
    }
  }
}

const {increment, decrement, getValue} = getFixedCounter(1);

decrement()
getValue()
increment()
increment()
getValue()
