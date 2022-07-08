
var twoSum = function(nums = [2,7,11,15], target = 9) {
    // var arr = [];
    // var sum;
    // for(var i=0,j=i+1;j<nums.length;i++,j++){
    //      sum = nums[i] + nums[j];
    //      if(sum === target){
    //          arr[0] = i;
    //          arr[1] = j;
    //          break;
    //      }
    // }
    // return arr;


    const map = new Map();
    /* 
    Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。
    一个 Map 对象在迭代时会根据对象中元素的插入顺序来进行——一个 for...of 循环在每次迭代后会返回一个形式为 [key，value] 的数组。
    
    */
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        const nextTarget = target - nums[i];
        console.log(nextTarget);
        if (map.has(nextTarget)) {
            // 方法has() 返回一个 bool 值，用来表明 map 中是否存在指定元素。
                // 如果存在 nextTarget 则返回
            res = [map.get(nextTarget), i];
            // get() 方法返回某个 Map 对象中的一个指定元素。
            // console.log(map);
            break;
        } else {
            map.set(nums[i], i);
            // set() 方法为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对。
            // 如果为找到将 nums[i]=>i 添加到map中，方便下一次比对

            // console.log(map);
        }
    }
    return res;

};

console.log(twoSum())