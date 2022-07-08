/* 
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/palindromic-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


    1 <= s.length <= 1000
    s 由小写英文字母组成

*/

var countSubstrings = function(s) {
    // 只能解决 两位字符
    // var sList = s.split('');
    // var initNum = sList.length;

    // var pros,cons;

    // for(var i=0,j=i+1;j<sList.length;i++,j++){

    //     pros = sList[i]+sList[j];
    //     cons = sList[j]+sList[i];

    //     if(props === cons){
    //         initNum++;
    //     }
    // }
    // console.log(initNum);

    // 答案
    // dp[i][j]表示第i个数到第j个数是否为回文串
    // dp[i][j]=(s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]))
    // 依次以i 开头的字符串, 判断i j 之间是否有回文串
    // let dp = new Array(s.length).fill().map(() => new Array())
    // let res = 0;

    // for( let i=s.length-1;i>=0;i--){
    //     for(let j = s.length -1;j >= i;j--){
    //         if(
    //             s[i] === s[j] &&
    //             (j-i <= 2 || dp[i+1][j-1])
    //         ){
    //             console.log(dp[i][j]);
    //             dp[i][j] = true;
    //         }
    //         if(dp[i][j]) res++;
    //     }
    // }
    // return res;


    let dp = new Array(s.length).fill().map(() => new Array())
    let res = 0;

    for( let i=s.length-1;i>=0;i--){
        for(let j = s.length -1;j >= i;j--){
            if(
                s[i] === s[j] &&
                (j-i <= 2 || dp[i+1][j-1])
            ){
                console.log(dp[i][j]);
                dp[i][j] = true;
            }
            if(dp[i][j]) res++;
        }
    }
    return res;

};

countSubstrings('aaa')

/* 必备知识 
    // fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
        // value
        //     用来填充数组元素的值。
        // start 可选
        //     起始索引，默认值为 0。
        // end 可选
        //     终止索引，默认值为 this.length。 
    // fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的，其默认值分别为 0 和 this 对象的 length 属性值。

*/
