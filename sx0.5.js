// ==UserScript==
// @name         sx0.5
// @namespace    https://cdn.jsdelivr.net/gh/shengsixiangxu/SX@main/sx0.5.js
// @version      0.5
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
                        //console.error('函数劫持获取结果',result)
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
                    console.info(result)
                    answer = "B"
                }

                else if(result.indexOf('"Answer":"A"')!==-1)
                {
                    result = ("Answer:A")
                    console.info(result)
                    answer = "A"
                }

                else if(result.indexOf('"Answer":"C"')!==-1)
                {
                    result = ("Answer:C")
                    console.info(result)
                    answer = "C"
                }

                else if(result.indexOf('"Answer":"D"')!==-1)
                {
                    result = ("Answer:D")
                    console.info(result)
                    answer = "D"
                }

                else if(result.indexOf('"Answer":"AB"')!==-1)
                {
                    result = ("Answer:AB")
                    console.info(result)
                    answer = "AB"
                }

                else if(result.indexOf('"Answer":"AC"')!==-1)
                {
                    result = ("Answer:AC")
                    console.info(result)
                    answer = "AC"
                }

                else if(result.indexOf('"Answer":"AD"')!==-1)
                {
                    result = ("Answer:AD")
                    console.info(result)
                    answer = "AD"
                }

                else if(result.indexOf('"Answer":"ABC"')!==-1)
                {
                    result = ("Answer:ABC")
                    console.info(result)
                    answer = "ABC"
                }

                else if(result.indexOf('"Answer":"ACD"')!==-1)
                {
                    result = ("Answer:ACD")
                    console.info(result)
                    answer = "ACD"
                }

                else if(result.indexOf('"Answer":"ABD"')!==-1)
                {
                    result = ("Answer:ABD")
                    console.info(result)
                    answer = "ABD"
                }

                else if(result.indexOf('"Answer":"ABCD"')!==-1)
                {
                    result = ("Answer:ABCD")
                    console.info(result)
                    answer = "ABCD"
                }

                else if(result.indexOf('"Answer":"BC"')!==-1)
                {
                    result = ("Answer:BC")
                    console.info(result)
                    answer = "BC"
                }

                else if(result.indexOf('"Answer":"BD"')!==-1)
                {
                    result = ("Answer:BD")
                    console.info(result)
                    answer = "BD"
                }

                else if(result.indexOf('"Answer":"BCD"')!==-1)
                {
                    result = ("Answer:BCD")
                    console.info(result)
                    answer = "BCD"
                }

                else if(result.indexOf('"Answer":"CD"')!==-1)
                {
                    result = ("Answer:CD")
                    console.info(result)
                    answer = "CD"
                }

                else if(result.indexOf('"Answer":"对"')!==-1)
                {
                    result = ("Answer:对")
                    console.info(result)
                    answer = "对"
                }

                else if(result.indexOf('"Answer":"错"')!==-1)
                {
                    result = ("Answer:错")
                    console.info(result)
                    answer = "错"
                }
                
                else console.error(Reflect.get(target.oldxhr,prop))
                clickBotton();
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

    //alert(answer)
    if(answer==('B')) 
     {
        // var btn=document.querySelector('SingleSelect2');
        SingleSelect2.click();
     }

    else if(answer==('A'))
      {
        SingleSelect1.click();
      }

    else if(answer==('C'))
     {
        SingleSelect3.click();
     }
    else if(answer==('D'))
     {
        SingleSelect4.click();
     }

    else if(answer==('AB'))
     {
        MultiSelect1.click();
        MultiSelect2.click();
     }

    else if(answer==('AC'))
     {
        MultiSelect1.click();
        MultiSelect3.click();
     }

    else if(answer==('AD'))
     {
        MultiSelect1.click();
        MultiSelect4.click();
     }

    else if(answer==('ABC'))
     {
        MultiSelect1.click();
        MultiSelect2.click();
        MultiSelect3.click();
     }

    else if(answer==('ACD'))
     {

        MultiSelect1.click();
        MultiSelect3.click();
        MultiSelect4.click();

     }
    else if(answer==('ABD'))
     {

        MultiSelect1.click();
        MultiSelect2.click();
        MultiSelect4.click();

     }


    else if(answer==('ABCD'))
     {

        MultiSelect1.click();
        MultiSelect2.click();
        MultiSelect3.click();
        MultiSelect4.click();

    }
    else if(answer==('BC'))
     {

        MultiSelect2.click();
        MultiSelect3.click();

     }
    
    else if(answer==('BD'))
     {

        MultiSelect2.click();
        MultiSelect4.click();

     }
    else if(answer==('BCD'))
     {

        MultiSelect2.click();
        MultiSelect3.click();
        MultiSelect4.click();

     }
    else if(answer==('CD'))
     {

        MultiSelect3.click();
        MultiSelect4.click();

     }
    else if(answer==('对'))
     {

        JudgeSelect1.click();

     }
    else if(answer==('错'))
     {

        JudgeSelect1.click();

     }
    

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