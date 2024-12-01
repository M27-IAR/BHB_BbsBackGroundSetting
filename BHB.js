// ==UserScript==
// @name        BHB背景图片更换
// @namespace   Violentmonkey Scripts
// @match       https://boyshelpboys.com/*
// @grant       none
// @version     1.2.3
// @author      -
// @license WTFPL
// @description 2024/11/26 16:34:09
// ==/UserScript==

(function(){



    function addtolocal() {
        let heightsize=document.getElementById("heightsize");//高度比例
        let widthsize=document.getElementById("widthsize");//宽度比例
        let left=document.getElementById("left");//离左侧的距离
        let top=document.getElementById("top");//离顶部的距离
        let webimgsrc=document.getElementById("localimgsrc");//网络图片链接
        let webpiclod=document.querySelector("#webpicon");//选择渲染网络图片
        let sectionplan=document.querySelector("#sectionplan");//选择渲染图片的方法
        let leaderhideplan=document.querySelector("#leadermanhide");//左侧菜单隐藏
        let canseenunber=document.querySelector("#notseenumber");//背景透明度（只在非backimage状态生效）
        let PrintToBackgroundValue=document.querySelector("#printToWebback")
        let LocalBbsNameFontSize=document.querySelector("#size")
        let LocalFontColorset=document.querySelector("#fontcolor")



        let uplodeheightsize=parseInt(heightsize.value)//高度比例(转数字)
        let uplodewidthsize=parseInt(widthsize.value)//宽度比例(转数字)
        let uplodeleft=parseInt(left.value)//左侧距离(转数字)
        let uplodetop=parseInt(top.value)//顶部距离(转数字)

        localStorage.setItem("userset",true);//写入判定用户是否修改
            console.log(uplodeheightsize);
        //开始写入数据
        if (uplodeheightsize=="0"){//判断宽度比例和高度比例是否输入为0
            localStorage.setItem("heightsize","auto");
        }else{
            localStorage.setItem("heightsize",uplodeheightsize);
        }
        if (uplodewidthsize=="0"){
            localStorage.setItem("widthsize","auto");
        }else{
            localStorage.setItem("widthsize",uplodewidthsize);
        }
        localStorage.setItem("left",uplodeleft);
        localStorage.setItem("top",uplodetop);
        localStorage.setItem("webimgsrc",webimgsrc.value);
        localStorage.setItem("canseenunber",canseenunber.value);
        localStorage.setItem("backgroundplan",0);
        localStorage.setItem("webpiclod",0);
        localStorage.setItem("localpiclod",0);
        localStorage.setItem("sectionplan",0);
        localStorage.setItem("leaderhide",0);
        localStorage.setItem("printToBack",0);
        localStorage.setItem("printToBBS",0);
        localStorage.setItem("NameFontSize",LocalBbsNameFontSize.value);
        localStorage.setItem("LocalFontColor",LocalFontColorset.value)

        if (webpiclod.checked){//判断用户选择的图片加载来源
            localStorage.setItem("webpiclod",1);
        }else{
            localStorage.setItem("localpiclod",1);
        }
        if (sectionplan.checked){//判断用户选择的图片加载模式
            localStorage.setItem("sectionplan",1);
        }else{
            localStorage.setItem("backgroundplan",1);
        }
        if (PrintToBackgroundValue.checked){//判断用户选择的图片加载位置
            localStorage.setItem("printToBack",1);
        }else{
            localStorage.setItem("printToBBS",1);
        }
        if(leaderhideplan.checked){//判断用户选择的图左侧导航栏状态
            localStorage.setItem("leaderhide",1);
        }else{
            localStorage.setItem("leaderhide",0);
        }
        adddiv.style.display="none";


    }
        function addStyleToLocal() {//上传控件透明度

            alert("1");

        }

    function  handleFileSelect(){//图片转base64存储在localstorage
        let addlocalupdate=document.querySelector("#webimgsrc")
        let imgFile = new FileReader();
        imgFile.readAsDataURL(addlocalupdate.files[0]);
        imgFile.onload = function () {
            let imgDataBase64 = this.result; //base64数据
            console.log(imgDataBase64);


            // 打开或创建一个数据库
            let request = indexedDB.open('databaseName', 4);

// 处理数据库升级
            request.onupgradeneeded = function(event) {
                let db = event.target.result;

                // 创建对象存储（表）并设置主键
                let objectStore = db.createObjectStore('storeName', { keyPath: 'id' });

                // 创建索引
                objectStore.createIndex('fieldName', 'fieldName', { unique: false });
            };

// 数据库打开成功时的回调
            request.onsuccess = function(event) {
                let db = event.target.result;

                // 进行事务操作
                let transaction = db.transaction('storeName', 'readwrite');
                let objectStore = transaction.objectStore('storeName');

                // 插入数据
                objectStore.put({ id: 1, name:imgDataBase64});
                transaction.oncomplete = function() {
                    console.log('数据插入DBD成功');
                };

                transaction.onerror = function(event) {
                    console.error('Transaction failed:', event);
                };

                let queryTransaction = db.transaction(['storeName']);
                let queryObjectStore = queryTransaction.objectStore('storeName');
                let query = queryObjectStore.get(1);

                query.onsuccess = function(event) {
                    console.log('Customer:', event.target.result);
                    let imgdatabase64DBD=event.target.result.name;
                    console.log(imgdatabase64DBD);

                };
                db.close();
            };
            // 查询数据


// 错误处理
            request.onerror = function(event) {
                console.error('Database error:', event.target.error);
            };
        }

    }
    //图片转base64存储在localstorage部分结束
    //本地存储检测
    if(!localStorage.heightsize){
        localStorage.setItem("heightsize",'100');
    }
    if(!localStorage.widthsize){
        localStorage.setItem("widthsize",'100');
    }
    if(!localStorage.left){
        localStorage.setItem("left",'0');
    }
    if(!localStorage.top){
        localStorage.setItem("top",'0');
    }
    if(!localStorage.localimgsrc){
        localStorage.setItem("localimgsrc",'1');
    }
    if(!localStorage.webimgsrc){
        localStorage.setItem("webimgsrc",'https://t1-img.233213.xyz/2024/11/29/674922c38c1df.png');
    }
    if(!localStorage.webpiclod){
        localStorage.setItem("webpiclod",1);
    }
    if(!localStorage.localpiclod){
        localStorage.setItem("localpiclod",0);
    }
    if(!localStorage.sectionplan){
        localStorage.setItem("sectionplan",1);
    }
    if(!localStorage.backgroundplan){
        localStorage.setItem("backgroundplan",0);
    }
    if(!localStorage.leaderhide){
        localStorage.setItem("leaderhide",0);
    }
    if(!localStorage.canseenunber){
        localStorage.setItem("canseenunber",0.50);
    }
    if(!localStorage.printToBack){
        localStorage.setItem("printToBack",1);
    }
    if(!localStorage.printToBBS){
        localStorage.setItem("printToBBS",0);
    }
    if(!localStorage.NameFontSize){
        localStorage.setItem("NameFontSize",18);
    }
    if(!localStorage.LocalFontColor){
        localStorage.setItem("LocalFontColor","#ffffff")
    }
    if(!localStorage.scrollstyle){
        localStorage.setItem("scrollstyle","1")
    }


    let webpiclod="";
    let localpiclod="";
    let leadermanhide="";
    let backgroundplanone="";
    let sectionplanone="";
    let PrintToBackground="";
    let PrintToBBSGround="";
    let Scrollstylex="";
    if (localStorage.webpiclod==="1"){//读取本地图片还是线上图片
        webpiclod="checked"
    }else{
        localpiclod="checked"
    }
    if (localStorage.sectionplan==="1"){//背景的填充方式
        sectionplanone="checked"
    }else{
        backgroundplanone="checked"
    }
    if (localStorage.printToBack==="1"){//背景的填充方式
        PrintToBackground="checked"
    }else{
        PrintToBBSGround="checked"
    }
    if (localStorage.scrollstyle==="1"){//背景的填充方式
        Scrollstylex="checked"
    }else{
        Scrollstylex=""
    }




    let request = indexedDB.open('databaseName', 4);

// 处理数据库升级
    request.onupgradeneeded = function(event) {
        let db = event.target.result;

        // 创建对象存储（表）并设置主键
        let objectStore = db.createObjectStore('storeName', { keyPath: 'id' });

        // 创建索引
        objectStore.createIndex('fieldName', 'fieldName', { unique: false });
    };

// 数据库打开成功时的回调
    request.onsuccess = function(event) {
        let db= event.target.result;

        // 进行事务操作
        let transaction = db.transaction('storeName', 'readwrite');
        let objectStore = transaction.objectStore('storeName');
        // 插入数据
        objectStore.add({ id: 1, name:'空'});
        transaction.oncomplete = function() {
            console.log('空数据插入DBD成功');
        };
        transaction.onerror = function(event) {
            console.error('Transaction failed:', event);
        };



    };
    // 查询数据


// 错误处理
    request.onerror = function(event) {
        console.error('Database error:', event.target.error);
    };


    //设置初始值部分结束


    let nowurl = window.location.href;
    if (nowurl.includes('https://boyshelpboys.com/chat.htm')) {//如果当前网页为聊天室页面

        if (localStorage.leaderhide==="1"){//左侧导航栏的隐藏与显示
            leadermanhide="checked"
            document.querySelector("#layout-menu").setAttribute('style','display:none;')
        }else{
            leadermanhide=""
        }


    console.log(nowurl);
    let bac=document.querySelector("body")//网页本体
    let backb=document.querySelector("#top > div > div")//自顶栏往下部分
    let baca=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-body")//聊天历史记录1
    let ul=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-body > ul")//聊天历史记录2（位置更靠里）
    let histor=document.querySelector("#top > div > div > main > section")//聊天页面外层边框
    let oldaddtarge=document.querySelector("#navbar-collapse")
    let fackone=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-footer.shadow-xs")//输入框部分
    fackone.className='shadow-xs'//修改输入框部分css，删除上部的渐变黑条
    fackone.setAttribute('style','padding: .5rem .5rem; position: relative; border-radius: .375rem; margin: 0 1.5rem 1rem 1.5rem; background-color:#2b2c40')
    let localHightSize="";
    let localWidthSize="";
    //id是webimgsrc的是离线文件 写错了
    if (localStorage.heightsize==="auto"||localStorage.heightsize==="NaN"){
        localHightSize="auto"
        console.log('height做到这部分了');
    }else{
        localHightSize=localStorage.heightsize+'%'
        console.log('height做到那一个部分了');
    }

    if (localStorage.widthsize==="auto"||localStorage.widthsize==="NaN"){
        localWidthSize="auto"
        console.log('width做到这部分了');
    }else{
        localWidthSize=localStorage.widthsize+'%'
        console.log('width做到那一个部分了');
    }


    let addHTML='<div id="backread">'
    let addbott="<button>背景文件/渲染</button><button>背景样式</button>"
    let addmain=`<div id="localsett"><div><button id="exit">X</button><span>背景图片/渲染设置</span><div><form name='myform' action='chat.htm'><input type='file' id='webimgsrc' accept='image/*'><br> <span>线上地址</span><input type='text'  value='${localStorage.webimgsrc}' name='' id='localimgsrc' width='150px'><br><span>删除左侧导航栏</span><input type="checkbox" ${leadermanhide} value="1" name="leadermanhide" id="leadermanhide"><br><span>聊天室名称大小</span><input type='text' onblur='if(!((/[(0-9)]/).test(value)))value=18' value='${localStorage.NameFontSize}' name='size' id='size' size="5"><br><span>聊天室名称描边颜色</span><input type="color" id="fontcolor" value="${localStorage.LocalFontColor}"><br><span>顶部</span><input type='text' oninput='if(!((/[(0-9)/-]/).test(value)))value=0' value='${localStorage.top}' name='topp' id='top' size="5"> <span>左部</span><input type='text' oninput='if(!((/[(0-9)/-]/).test(value)))value=0' value='${localStorage.left}' name='leftt' id='left' size="5"><br> <span>背景宽度比例(填写0即为auto)</span><input type='text' onblur='if(!((/[(0-9)]/).test(value))&&value!=="auto")value=100' min='0'  value='${localStorage.widthsize}' name='' id='widthsize' size='5'><br><span>背景高度比例(填写0即为auto)</span><input type='text' onblur='if(!((/[(0-9)]/).test(value))&&value!=="auto")value=100'  min='0' value=${localStorage.heightsize} name='' id='heightsize' size="5"><br> <span>在线图片</span><input type='radio' ${webpiclod} name='picloadsele' id='webpicon'  width='100px'><span>本地图片</span><input type='radio'  name='picloadsele' ${localpiclod} id='localpicon'  width='100px'><br><hr><p>使用section写入背景只能在最底层</p><span>section写入</span><input type='radio'  ${sectionplanone} name='addplan' id='sectionplan'  width='100px'><br><span>body-background写入</span><input type='radio'  name='addplan' ${backgroundplanone} id='backgroundplan'  width='100px'><br><span>透明度</span><input type="range" min="0" max="1" step="0.01" value="${localStorage.canseenunber}" id="notseenumber"><hr><span>渲染到网页背景</span><input type='radio' value='1' ${PrintToBackground} name='baklocal' id='printToWebback'  width='100px'><br><span>渲染到聊天室背景</span><input type='radio' value='1' name='baklocal' ${PrintToBBSGround} id='printToBBS'  width='100px'><br> <button id='save'>提交</button></form></div>`
    let addmain2=`<div><input type="checkbox"  ${Scrollstylex} name="ScrollSett" id="ScrollSett">滚动条控制</input></div>`
    let addscript="<script src='chrome-extension://jinjaccalgkegednnccohejagnlnfdag/BHB%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E6%9B%B4%E6%8D%A2.user.js#13'></script>"



    bac.insertAdjacentHTML("afterbegin",addHTML);//插入section 填充背景
    oldaddtarge.insertAdjacentHTML("afterbegin",addbott);
    bac.insertAdjacentHTML("afterbegin",addmain);
    bac.insertAdjacentHTML("afterbegin",addmain2);
    bac.insertAdjacentHTML("afterbegin",addscript);

        let NeedFixStyle=document.querySelectorAll("body > style");//修改滚动条状态
        console.log(NeedFixStyle[NeedFixStyle.length-1]);
        console.log(NeedFixStyle.length);
        NeedFixStyle[NeedFixStyle.length-1].insertAdjacentHTML("afterend",'<style></style>');
        let nedAddStyle=document.createTextNode(`@media(min-width: 768px) {::-webkit-scrollbar {width: 0px; height: 6px;border-radius: 20px;}::-webkit-scrollbar-track { background: var(--bs-body-bg);}::-webkit-scrollbar-thumb {background: var(--bs-secondary);border-radius: 20px;}::-webkit-scrollbar-thumb:hover {background: var(--bs-primary);}::-webkit-scrollbar-thumb:focus, ::-webkit-scrollbar-thumb:active {background: var(--bs-primary-active);}}`)
        let FixStyle=NeedFixStyle[NeedFixStyle.length-1].nextElementSibling
        console.log(FixStyle);

        if (localStorage.scrollstyle==="1"){//背景的填充方式
            console.log(FixStyle.innerHTML);
            FixStyle.appendChild(nedAddStyle);
            console.log(FixStyle.innerHTML);
        }
        function SetScroll() {
            console.log("到了到了")
            if (FixStyle.innerHTML==""){
                localStorage.setItem("scrollstyle","1")
                FixStyle.appendChild(nedAddStyle);
            }else{
                localStorage.setItem("scrollstyle","0")
                FixStyle.innerHTML="";
            }
        }

    let addtarge=document.querySelector("#backread");
    let addbutt=document.querySelector("#navbar-collapse > button");
    let addbutt2=document.querySelector("#navbar-collapse > button:nth-child(2)");
    let adddiv=document.querySelector("body > div:nth-child(3)");
    let adddiv2=document.querySelector("body > div:nth-child(2)");
    let addlocalupdate=document.querySelector("#webimgsrc");
    let BBSmsgBack=document.querySelector("#top > div > div > main > section > div");
    let ScrollSettButt=document.querySelector("#ScrollSett")
    ScrollSettButt.addEventListener("click",SetScroll)


    bac.setAttribute('style',`background-color: #202040;`)//网页背景部分
    baca.setAttribute('style', `background-color: #2b2c4000;`)//聊天历史记录1
    backb.setAttribute('style', `background-color: #2b2c4000;`)//自顶栏往下部分
    ul.setAttribute('style', `background-color: #2b2c4000;`)//聊天历史记录2（位置更靠里）
    histor.setAttribute('style', `background-color: #2b2c4070;`)//聊天页面外层边框
    addbutt.setAttribute('style', `background-color: #2b2c4030;border:5px #66ccff;`)
    addbutt2.setAttribute('style', `background-color: #2b2c4030;border:5px #66ccff;`)
//bac.setAttribute('style',"background-color: #00000070;background-image:url('https://t1-img.233213.xyz/2024/11/25/67447535ec930.jpg');background-repeat=no-repeat")//背景图片替换//背景颜色
    let openpic = indexedDB.open('databaseName', 4);//调用数据库
    openpic.onupgradeneeded = function(event) {//没有调用则创建|选择了新版本数据库而重建
        let db = event.target.result;

        // 创建对象存储（表）并设置主键
        let objectStore = db.createObjectStore('storeName', { keyPath: 'id' });

        // 创建索引
        objectStore.createIndex('fieldName', 'fieldName', { unique: false });
    };
    openpic.onsuccess = function(event) {
        let db = event.target.result;


        // 查询数据
        let queryTransaction = db.transaction(['storeName']);
        let queryObjectStore = queryTransaction.objectStore('storeName');
        let query = queryObjectStore.get(1);

        query.onsuccess = function(event) {
            //转换透明度的数值为RGBA的数值
            let BackimagePrintPlanNum=(localStorage.canseenunber*100)%100
            if(BackimagePrintPlanNum===0&&localStorage.canseenunber==="0"){BackimagePrintPlanNum=""}
            console.log(BackimagePrintPlanNum)



            if(event.target.result.name==="空"){//如果数据库没有本地图片数据
            console.log('图片对象', event.target.result.name);
                console.log('数据库无图片相关内容存储');

                if(localStorage.sectionplan === "1") {//用户选择方案为section方法
                    if (localStorage.webpiclod === "1") {
                        addtarge.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top: ${localStorage.top}%; left: ${localStorage.left}%; right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                    } else if (localStorage.localpiclod === "1") {
                        alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                        addtarge.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top: ${localStorage.top}%; left: ${localStorage.left}%; right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                    }
                }else if(localStorage.backgroundplan==="1"){//用户选择方案为background方法

                    if (localStorage.webpiclod === "1") {
                        if(localStorage.printToBack==="1"){
                            //通过section写入项目留下的标签实现颜色覆盖
                            console.log("bad");
                            bac.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`);
                            addtarge.setAttribute('style', `background-color: #202040${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%;`);
                            console.log("good");
                        }else if(localStorage.printToBBS==="1"){
                            BBSmsgBack.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`);
                        }
                    } else if (localStorage.localpiclod === "1") {
                        if(localStorage.printToBack==="1"){
                            alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                            bac.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`);
                        }else if(localStorage.printToBBS==="1"){
                            alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                            BBSmsgBack.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`);
                        }


                    }
                }

            }else{//如果数据库有本地图片数据
                if(localStorage.sectionplan === "1") {//用户选择方案为section方法
                    if (localStorage.webpiclod === "1") {
                        addtarge.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top: ${localStorage.top}%; left: ${localStorage.left}%; right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                    } else if (localStorage.localpiclod === "1" ) {

                        addtarge.setAttribute('style', `background-image: url('${event.target.result.name}');background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top: ${localStorage.top}%; left: ${localStorage.left}%; right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                    }
                }else if(localStorage.backgroundplan==="1"){//用户选择方案为background方法

                    if (localStorage.webpiclod === "1") {
                        if(localStorage.printToBack==="1"){
                            //通过section写入项目留下的标签实现颜色覆盖
                            console.log("bad");
                            bac.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`);
                            addtarge.setAttribute('style', `background-color: #202040${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%;`);
                            console.log("good");
                        }else if(localStorage.printToBBS==="1"){
                            BBSmsgBack.setAttribute('style', `background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`);
                        }
                    } else if (localStorage.localpiclod === "1") {
                        if(localStorage.printToBack==="1"){
                            //通过section写入项目留下的标签实现颜色覆盖
                            console.log("bad");
                            bac.setAttribute('style', `background-image: url(${event.target.result.name});background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`)
                            addtarge.setAttribute('style', `background-color: #202040${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%; `);
                            console.log("good");
                        }else if(localStorage.printToBBS==="1"){
                            BBSmsgBack.setAttribute('style', `background-image: url(${event.target.result.name});background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-position: ${localStorage.left}% ${localStorage.top}%; background-attachment:fixed;`)
                        }

                    }
                }
            }
        }
        db.close();

    }




    adddiv.setAttribute('style','position: absolute;top: 55%;left: 50%;transform: translate(-45%, -50%);width: 300px;height: 550px;border: 1px solid red;overflow: hidden;z-index:1;display:none;background-color:#66ccff;color:black;')
    adddiv2.setAttribute('style','position: absolute;top: 50%;left: 49%;transform: translate(-51%, -50%);width: 300px;height: 500px;border: 1px solid red;overflow: hidden;z-index:1;display:none;background-color:#66ccff;color:black;')
    addbutt.addEventListener("click",function(){//开关设置栏
        let adddiv=document.querySelector("body > div:nth-child(3)")
        if (adddiv.style.display==="block"){
            adddiv.style.display="none";
        }else{
            adddiv.style.display="block";
        }
    });
    addbutt2.addEventListener("click",function(){//开关设置栏
        let adddiv2=document.querySelector("body > div:nth-child(2)")
        if (adddiv2.style.display==="block"){
            adddiv2.style.display="none";
        }else{
            adddiv2.style.display="block";
        }
    });


    let localget=document.querySelector("#save");
    //let localStyleGet=document.querySelector("#secsubint")
    localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
    //localStyleGet.addEventListener("click",addStyleToLocal,false);//点击向localst保存控件透明度数据
    addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64

    let exitbutt=document.querySelector("#exit")//设置的关闭按钮
    //let secexitbutt=document.querySelector("#secexit")//设置的关闭按钮
    exitbutt.addEventListener("click",function(){adddiv.style.display="none";})//设置的关闭按钮实现
    //secexitbutt.addEventListener("click",function(){adddiv2.style.display="none";})//设置的关闭按钮实现


    setInterval(function(){//定时循环对聊天室名字描边
        let OneLi=document.querySelectorAll(`#top > div > div > main > section > div > div > div > div.chat-history-body > ul > li`)
        for (let i = 0; i <= OneLi.length; i++) {
            let OneDiv=document.querySelector(`#top > div > div > main > section > div > div > div > div.chat-history-body > ul > li:nth-child(${i}) > div > div.chat-message-wrapper.flex-grow-1 > div.text-muted.mb-1`)
            if(!OneDiv){
                //console.log('此项目无法修改');
            }else{
            OneDiv.setAttribute('style',`-webkit-text-stroke: 1px ${localStorage.LocalFontColor};font-size:${localStorage.NameFontSize};`)
            }
        }
    },100)

    }else{
        console.log("暂时不支持");
    }
})();