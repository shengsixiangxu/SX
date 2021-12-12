// ==UserScript==
// @name         sx0.4.1
// @namespace    https://cdn.jsdelivr.net/gh/shengsixiangxu/SX@main/sx0.4.1.js
// @version      0.4.1
// @description  try to take over the world!
// @author       shengsixiangxu
// @match        ks.sdbi.edu.cn/Exam/Enter/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
   
var answer = "Answer"
var oldxhr=window.XMLHttpRequest
function newobj(){}

window.XMLHttpRequest=function(){
    let tagetobk=new newobj();
    tagetobk.oldxhr=new oldxhr();
    let handle={
        get: function(target, prop, receiver) {
            if(prop==='oldxhr'){
                return Reflect.get(target,prop);
            }
            if(typeof Reflect.get(target.oldxhr,prop)==='function')
            {
                if(Reflect.get(target.oldxhr,prop+'proxy')===undefined)
                {
                    target.oldxhr[prop+'proxy']=(...funcargs)=> {
                        let result=target.oldxhr[prop].call(target.oldxhr,...funcargs)
                        console.log('函数劫持获取结果',result)
                        return result;
                    }


                }
                return Reflect.get(target.oldxhr,prop+'proxy')
            }
            
            if(prop.indexOf('responseText')!==-1)
            {
                let result = Reflect.get(target.oldxhr,prop)
                if(result.indexOf('"Answer":"B"')!==-1)
                {
                    result = ("Answer:B")
                    alert(result)
                    answer = "B"
                }

                else if(result.indexOf('"Answer":"A"')!==-1)
                {
                    result = ("Answer:A")
                    alert(result)
                    answer = "A"
                }

                else if(result.indexOf('"Answer":"C"')!==-1)
                {
                    result = ("Answer:C")
                    alert(result)
                    answer = "C"
                }

                else if(result.indexOf('"Answer":"D"')!==-1)
                {
                    result = ("Answer:D")
                    alert(result)
                    answer = "D"
                }

                else if(result.indexOf('"Answer":"AB"')!==-1)
                {
                    result = ("Answer:AB")
                    alert(result)
                    answer = "AB"
                }

                else if(result.indexOf('"Answer":"AC"')!==-1)
                {
                    result = ("Answer:AC")
                    alert(result)
                    answer = "AC"
                }

                else if(result.indexOf('"Answer":"AD"')!==-1)
                {
                    result = ("Answer:AD")
                    alert(result)
                    answer = "AD"
                }

                else if(result.indexOf('"Answer":"ABC"')!==-1)
                {
                    result = ("Answer:ABC")
                    alert(result)
                    answer = "ABC"
                }

                else if(result.indexOf('"Answer":"ACD"')!==-1)
                {
                    result = ("Answer:ACD")
                    alert(result)
                    answer = "ACD"
                }

                else if(result.indexOf('"Answer":"ABD"')!==-1)
                {
                    result = ("Answer:ABD")
                    alert(result)
                    answer = "ABD"
                }

                else if(result.indexOf('"Answer":"ABCD"')!==-1)
                {
                    result = ("Answer:ABCD")
                    alert(result)
                    answer = "ABCD"
                }

                else if(result.indexOf('"Answer":"BC"')!==-1)
                {
                    result = ("Answer:BC")
                    alert(result)
                    answer = "BC"
                }

                else if(result.indexOf('"Answer":"BD"')!==-1)
                {
                    result = ("Answer:BD")
                    alert(result)
                    answer = "BD"
                }

                else if(result.indexOf('"Answer":"BCD"')!==-1)
                {
                    result = ("Answer:BCD")
                    alert(result)
                    answer = "BCD"
                }

                else if(result.indexOf('"Answer":"CD"')!==-1)
                {
                    result = ("Answer:CD")
                    alert(result)
                    answer = "CD"
                }

                else if(result.indexOf('"Answer":"对"')!==-1)
                {
                    result = ("Answer:对")
                    alert(result)
                    answer = "对"
                }

                else if(result.indexOf('"Answer":"错"')!==-1)
                {
                    result = ("Answer:错")
                    alert(result)
                    answer = "错"
                }
                
                else console.error(Reflect.get(target.oldxhr,prop))
                return Reflect.get(target.oldxhr,prop)
            }
            return Reflect.get(target.oldxhr,prop);
        },
        set(target, prop, value) {
            return Reflect.set(target.oldxhr, prop, value);
        },
        has(target, key) {
            debugger;
            return Reflect.has(target.oldxhr,key);
        }
    }

    let ret = new Proxy(tagetobk, handle);

    return ret;
}
/*
if (question=B){
    var btn=document.querySelector('SingleSelect2');
    btn.click();

}
*/

    function clickBotton(){
        setTimeout(function(){

            var x
            x = 5

            /*
            $.getJSON("{%}",//url地址
            function(rows){//对应下方前缀data
                 expect_data = rows.rows//data数据
                 shouyi_data = data.Answer//expect_amount数据
                    }
                 );
            */

        alert(answer)

},100);// setTimeout 0.1秒后执行
    }



    var like_comment = document.getElementsByClassName('BottomButton')[0]; //getElementsByClassName 返回的是数组，所以要用[] 下标
    like_comment.appendChild(button); //把按钮加入到 x 的子节点中

})(); //(function(){})() 表示该函数立即执行





/*            if(prop.indexOf('response')!==-1)
            {
                let result = Reflect.get(target.oldxhr,prop)
                if(result.indexOf('"Answer":"B"')!==-1)
                {
                    result = ("Answer:B")
                    alert(result)
                }
                */