// 有趣的控制台
console.log(
`%c 左耳 %c nbchen.com %c`,
'background:#35495e ; padding: 3px; font-size:12px; border-radius: 3px 0 0 3px;  color: #fadfa3',
'background:#41b883 ; padding: 3px; font-size:12px; border-radius: 0 3px 3px 0;  color: #fff',
'background:transparent'
) 

let speed = 1200; 
let array = ['啊哦', '被','发','现','了', 'o(*////▽////*)q']
let index = 0
let singleIndex = 0
function loop() {
    speed -= 200; 
    if (array[index]) {
        if (index == array.length-1) {
            console.log('%co(*////▽////*)q', 'color: pink; font-weight:700;');
        } else {
            console.log(array[index]);
        }
    }
    index ++
    if (speed <= 0 || index > 20) {
        clearInterval(intervalId); // 停止循环
    } else {
        // 继续循环，并根据新的速度调整时间间隔
        intervalId = setInterval(loop, speed); 
    }
}
let intervalId = setInterval(loop, speed);