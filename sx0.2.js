// ==UserScript==
// @name         sx
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       shengsixiangxu
// @match        https://ks.sdbi.edu.cn/Exam/Enter/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var button = document.createElement("button"); //创建一个按钮
    button.textContent = "显示答案"; //按钮内容
    button.style.width = "65px"; //按钮宽度
    button.style.height = "auto"; //按钮高度
    button.style.align = "center"; //文本居中
    button.style.color = "white"; //按钮文字颜色
    button.style.background = "#e33e33"; //按钮底色
    button.style.border = "1px solid #e33e33"; //边框属性
    button.style.borderRadius = "4px"; //按钮四个角弧度
    button.addEventListener("click", clickBotton) //暂未实现

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
                    //question = B
                }

                else if(result.indexOf('"Answer":"A"')!==-1)
                {
                    result = ("Answer:A")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"C"')!==-1)
                {
                    result = ("Answer:C")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"D"')!==-1)
                {
                    result = ("Answer:D")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"AB"')!==-1)
                {
                    result = ("Answer:AB")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"ABC"')!==-1)
                {
                    result = ("Answer:ABC")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"ABD"')!==-1)
                {
                    result = ("Answer:ABD")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"ABCD"')!==-1)
                {
                    result = ("Answer:ABCD")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"BC"')!==-1)
                {
                    result = ("Answer:BC")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"BD"')!==-1)
                {
                    result = ("Answer:BD")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"BCD"')!==-1)
                {
                    result = ("Answer:BCD")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"CD"')!==-1)
                {
                    result = ("Answer:CD")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"对"')!==-1)
                {
                    result = ("Answer:对")
                    alert(result)
                }

                else if(result.indexOf('"Answer":"错"')!==-1)
                {
                    result = ("Answer:错")
                    alert(result)
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

        alert(x)

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