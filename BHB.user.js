// ==UserScript==
// @name        BHB聊天室背景图片更换（已全局兼容）
// @namespace   Violentmonkey Scripts
// @match       https://boyshelpboys.com/*
// @grant       none
// @version     2.1.3
// @author      M27IAR
// @license WTFPL
// @description 2024/11/26 16:34:09
// @downloadURL https://update.greasyfork.org/scripts/519010/BHB%E8%81%8A%E5%A4%A9%E5%AE%A4%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E6%9B%B4%E6%8D%A2.user.js
// @updateURL https://update.greasyfork.org/scripts/519010/BHB%E8%81%8A%E5%A4%A9%E5%AE%A4%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E6%9B%B4%E6%8D%A2.meta.js
// ==/UserScript==

(function(){

    window.history.replaceState(null, null, window.location.href);

    function leftANDtop() {
        let NeedFixStyle=document.querySelector("head");//插入样式表修改左侧与顶栏样式
        NeedFixStyle.insertAdjacentHTML("afterbegin",'<style id="style1"></style>');
        let nedAddStyle=document.createTextNode(` ::selection{color:#0000FF !important;} ::-moz-selection{color:#0000FF !important;} .RangeSetting{height:0.5rem;width:7.8125rem;} .ColorSettinr{width:2.75rem;} .SettiingInput{padding:2px 1px;border:0.125rem 0rem;} .GameBarFix{background-color:${localStorage.CantSeeColor6}${localStorage.CantSeeset6} !important;border:0 !important;margin:0 !important; transition: 0.3s;} hr{margin: 0.125rem 0 !important;color:#f0f5f9;} small{-webkit-text-stroke: ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor};font-size:${localStorage.NameFontSize}px; color:${localStorage.LocalFontColorsec}} .fuckyou2{background-color: #2b2c4030; color: gray; margin:0px;padding: 2px 7px;border: 1px gray solid;cursor: pointer;transition: background-color 0.3s;border-radius: 10px;}.fuckyou2:hover{background-color: #FFFFFF; color:#66ccff; -webkit-text-stroke:0px;} .fuckyou3{background-color: #2b2c4030; color: gray; margin:0px;padding: 2px 7px;border: 1px gray solid;cursor: pointer;transition: background-color 0.3s;border-radius: 0px;}.fuckyou3:hover{background-color: #FFFFFF; color:#66ccff; -webkit-text-stroke:0px;}  .fuckyou{background-color: #2b2c4030; color: gray; margin:0.3125rem;padding: 0.3125rem;border: 0.125rem gray solid;font-size:1rem; cursor: pointer;transition: background-color 0.3s;border-radius: 10px;} .fuckyou:hover{background-color: #FFFFFF; color:#66ccff;} @media (max-width:426px){.fuckyou{background-color: #2b2c4030; color: gray; padding: 0.3125rem 0.5rem;border: 0.125rem gray solid;font-size:0.5rem; cursor: pointer;transition: background-color 0.3s;border-radius: 10px;}}`)
        let FixStyle=document.querySelector("#style1");
        FixStyle.appendChild(nedAddStyle);
        document.querySelector("body").setAttribute("style",'background-color:#202040');

        if (localStorage.leaderhide==="1"){//左侧导航栏的隐藏与显示
            leadermanhide="checked"
            let DIV1=document.querySelector("#top > div")
            DIV1.setAttribute('style', 'padding-left:0rem;');
            let DIV2=document.querySelector("#layout-navbar");
            DIV2.setAttribute('style', `width:100%;left:0rem;background-color:${localStorage.CantSeeColor5}${localStorage.CantSeeset5} !important;backdrop-filter:saturate(100%) !important;`);
            document.querySelector("#layout-menu").setAttribute('style','display:none;')
        }else{
            leadermanhide=""
            let DIV2=document.querySelector("#layout-navbar");
            DIV2.setAttribute('style', `background-color:${localStorage.CantSeeColor5}${localStorage.CantSeeset5} !important;backdrop-filter:saturate(100%) !important;`);
            let DIV3=document.querySelector("#layout-menu")
            DIV3.setAttribute('style','background-color:#00000000;')

        }
    }

    function addtolocal() {
        console.log("work1");
        let heightsize=document.getElementById("heightsize");//高度比例
        let widthsize=document.getElementById("widthsize");//宽度比例
        let left=document.getElementById("left");//离左侧的距离
        let top=document.getElementById("top");//离顶部的距离
        let webimgsrc=document.getElementById("localimgsrc");//网络图片链接
        let webpiclod=document.querySelector("#webpicon");//选择渲染网络图片
        let sectionplan=document.querySelector("#sectionplan");//选择渲染图片的方法
        let leaderhideplan=document.querySelector("#leadermanhide");//左侧菜单隐藏
        let canseenunber=document.querySelector("#notseenumber");//背景透明度（只在非backimage状态生效）
        let PrintToBackgroundValue=document.querySelector("#printToWebback");
        let LocalBbsNameFontSize=document.querySelector("#size");//聊天室名称大小输入框
        let LocalFontColorset=document.querySelector("#fontcolor");//聊天室描边颜色
        let LocalFontColorsetsec=document.querySelector("#fontcolorsec");//聊天室字体颜色
        let BorderTextSize=document.querySelector("#BorderText");//聊天室描边大小输入框
        let printSelcetBox=document.querySelector("#selectBox");//背景渲染方式
        let centerPosion=document.querySelector("#center")//居中渲染按钮



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
        localStorage.setItem("LocalFontColor",LocalFontColorset.value);
        localStorage.setItem("LocalFontColorsec",LocalFontColorsetsec.value);
        localStorage.setItem("BorderTextSize",BorderTextSize.value);

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
        if(centerPosion.checked){
            localStorage.setItem("centerPosition",centerPosion.value);
        }else{
            localStorage.setItem("centerPosition","");
        }
        if(printSelcetBox.value==="default"){//判断用户选择的渲染状态
            localStorage.setItem("BackgroundPrint","");
            console.log("1")
        }else if(printSelcetBox.value==="PicFirst"){
            localStorage.setItem("BackgroundPrint","cover");
            console.log("2")
        }else if(printSelcetBox.value==="WebFirst"){
            localStorage.setItem("BackgroundPrint","contain");
            console.log("3")
        }
        let adddiv=document.querySelector("#localsett");
        adddiv.style.display="none";
        location.reload();



    }
    function addStyleToLocal(backb,baca,ul,histor,DIV2,fackone,msginputbox,LiuYanTop) {//上传控件透明度
        if (!LiuYanTop){}else{
        let seenum=document.querySelectorAll("#cantseegive > input[type=range]")//透明度获取
        console.log(seenum);
        let seecolor1=document.querySelector("#Msgcolor1");//聊天历史记录1颜色
        let seecolor2=document.querySelector("#Msgcolor2");//自顶栏往下部分颜色
        let seecolor3=document.querySelector("#Msgcolor3");//聊天历史记录2颜色
        let seecolor4=document.querySelector("#Msgcolor4");//聊天历史记录2颜色
        let seecolor5=document.querySelector("#Msgcolor5");//顶栏
        let seecolor6=document.querySelector("#Msgcolor6");//聊天框外框
        let seecolor7=document.querySelector("#Msgcolor7");//发送框颜色透明度
        let seecolor8=document.querySelector("#Msgcolor8");//发送框描边
        let seecolor9=document.querySelector("#Msgcolor9");//发送框描边

        let printseenum={}
        for(let i=0;i<seenum.length;i++){
            console.log(`第${i}个`+seenum[i].value);
            if (seenum[i].value=="100"){
                localStorage.setItem(`CantSeeset${i+1}`,"*");
                printseenum[i]=""
            }else if(Number(seenum[i].value)<10){
                console.log("runok")
                localStorage.setItem(`CantSeeset${i+1}`,"0"+seenum[i].value);
                printseenum[i]="0"+seenum[i].value
            }else {
                localStorage.setItem(`CantSeeset${i+1}`,seenum[i].value);
                printseenum[i]=seenum[i].value
            }
        }
        localStorage.setItem("CantSeeColor1",seecolor1.value);
        localStorage.setItem("CantSeeColor2",seecolor2.value);
        localStorage.setItem("CantSeeColor3",seecolor3.value);
        localStorage.setItem("CantSeeColor4",seecolor4.value);
        localStorage.setItem("CantSeeColor5",seecolor5.value);
        localStorage.setItem("CantSeeColor6",seecolor6.value);
        localStorage.setItem("CantSeeColor7",seecolor7.value);
        localStorage.setItem("CantSeeColor8",seecolor8.value);
        localStorage.setItem("CantSeeColor9",seecolor9.value);
        console.log(printseenum)

        backb.setAttribute('style', `background-color: ${seecolor2.value}${printseenum[1]};`)//自顶栏往下部分
        baca.setAttribute('style', `background-color: ${seecolor1.value}${printseenum[0]};`)//聊天历史记录1
        ul.setAttribute('style', `background-color: ${seecolor3.value}${printseenum[2]};`)//聊天历史记录2（位置更靠里）
        histor.setAttribute('style', `background-color: ${seecolor4.value}${printseenum[3]};`)//聊天页面外层边框
        DIV2.setAttribute('style', `width:100%;left:0rem;background-color:${localStorage.CantSeeColor5}${printseenum[4]} !important;backdrop-filter:saturate(100%) !important;`);
        fackone.setAttribute('style', `padding: .5rem .5rem; position: relative; border-radius: .375rem; margin: 0 1.5rem 1rem 1.5rem;background-color: ${seecolor6.value}${printseenum[5]};`)
        msginputbox.setAttribute('style',`background-color: ${seecolor7.value}${printseenum[6]};border:1px solid ${seecolor8.value}${printseenum[7]} !important;`)
        LiuYanTop.setAttribute("style",`background-color:${seecolor9.value}${printseenum[8]};border:0px !important;`);
        leftANDtop()
        }
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
            };request.onsuccess = function(event) {// 数据库打开成功时的回调
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
                };//准备写入图片的BASE64数据
                let queryTransaction = db.transaction(['storeName']);
                let queryObjectStore = queryTransaction.objectStore('storeName');
                let query = queryObjectStore.get(1);
                query.onsuccess = function(event) {
                    console.log('Customer:', event.target.result);
                    let imgdatabase64DBD=event.target.result.name;
                    console.log(imgdatabase64DBD);
                };
                db.close();
            };// 错误处理
            request.onerror = function(event) {
                console.error('Database error:', event.target.error);
            };
        }

    }//图片转base64存储在localstorage部分结束


    function WidthHeingtSet(){//背景宽高设定

        if(localStorage.BackgroundPrint===""){
            if (localStorage.heightsize==="auto"||localStorage.heightsize==="NaN"){
            localHightSize="auto";
            }else{
            localHightSize=localStorage.heightsize+'%';
            }
            if (localStorage.widthsize==="auto"||localStorage.widthsize==="NaN"){
            localWidthSize="auto";
            }else{
            localWidthSize=localStorage.widthsize+'%';
            }
        }else if(localStorage.BackgroundPrint==="cover"){
            localHightSize="";localWidthSize="cover";
        }else if(localStorage.BackgroundPrint==="contain"){
            localHightSize="";localWidthSize="contain";
        }
    }

    function backPrint(BBSmsgBack){//背景渲染设定
        let openpic = indexedDB.open('databaseName', 4);//调用数据库读取本地存储的base64图片数据
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
                //转换透明度的数值
                let BackimagePrintPlanNum=(localStorage.canseenunber*100)%100
                if(BackimagePrintPlanNum===0&&localStorage.canseenunber==="0"){BackimagePrintPlanNum=""}
                console.log(BackimagePrintPlanNum)
                if(event.target.result.name==="空"){//如果数据库没有本地图片数据
                    console.log('图片对象', event.target.result.name);
                    console.log('数据库无图片相关内容存储');

                    if(localStorage.sectionplan === "1") {//用户选择方案为section方法
                        if (localStorage.webpiclod === "1") {
                            addtarge.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft}; background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top:0; left:0;  right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                        } else if (localStorage.localpiclod === "1") {
                            alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                            addtarge.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top:0; left:0;  right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                        }
                    }else if(localStorage.backgroundplan==="1"){//用户选择方案为background方法

                        if (localStorage.webpiclod === "1") {
                            if(localStorage.printToBack==="1"){
                                //通过section写入项目留下的标签实现颜色覆盖
                                bac.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-attachment:fixed;`);
                                addtarge.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-color: #202040${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%;`);
                            }else if(localStorage.printToBBS==="1"){
                                BBSmsgBack.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; b background-attachment:fixed;`);
                            }
                        } else if (localStorage.localpiclod === "1") {
                            if(localStorage.printToBack==="1"){
                                alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                                bac.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize};  background-attachment:fixed;`);
                            }else if(localStorage.printToBBS==="1"){
                                alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                                BBSmsgBack.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-attachment:fixed;`);
                            }
                        }
                    }
                }else{//如果数据库有本地图片数据
                    if(localStorage.sectionplan === "1") {//用户选择方案为section方法
                        if (localStorage.webpiclod === "1") {
                            addtarge.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top:0; left:0; right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                        } else if (localStorage.localpiclod === "1" ) {

                            addtarge.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url('${event.target.result.name}');background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; display: flex; align-items: center; justify-content: center; position: fixed; top:0; left:0; right: 0; bottom: 0; pointer-events: none; opacity: ${localStorage.canseenunber}; z-index:0; `)
                        }
                    }else if(localStorage.backgroundplan==="1"){//用户选择方案为background方法
                        if (localStorage.webpiclod === "1") {
                            if(localStorage.printToBack==="1"){
                                //通过section写入项目留下的标签实现颜色覆盖
                                bac.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-attachment:fixed;`);
                                addtarge.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-color: #202040${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%;`);
                            }else if(localStorage.printToBBS==="1"){
                                BBSmsgBack.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize};background-attachment:fixed;`);
                            }
                        } else if (localStorage.localpiclod === "1") {
                            if(localStorage.printToBack==="1"){
                                //通过section写入项目留下的标签实现颜色覆盖
                                console.log("bad");
                                bac.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${event.target.result.name});background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize};  background-attachment:fixed;`)
                                addtarge.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-color: #202040${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%; `);
                                console.log("good");
                            }else if(localStorage.printToBBS==="1"){
                                BBSmsgBack.setAttribute('style', `background-position:${localStorage.centerPosition}${BackTop} ${Backleft};  background-attachment:fixed; background-image: url(${event.target.result.name});background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize};background-attachment:fixed;`)
                            }
                        }
                    }
                }
            }
            db.close();
        }
    }
    function checkPrint() {//验证用户选择的渲染方式
        let printSelcetBox=document.querySelector("#selectBox");
        if(printSelcetBox.value!=="default"){
            document.querySelector("#top").disabled=true;
            document.querySelector("#left").disabled=true;
            document.querySelector("#widthsize").disabled=true;
            document.querySelector("#heightsize").disabled=true;
        }else if(printSelcetBox.value==="default"){
            document.querySelector("#top").disabled=false;
            document.querySelector("#left").disabled=false;
            document.querySelector("#widthsize").disabled=false;
            document.querySelector("#heightsize").disabled=false;
        }
    }
    function addsett(leange1,leange2,leange3,nowurl) {//添加设置项目
        console.log(nowurl);
        let oldaddtarge=document.querySelector("#navbar-collapse")
        let addbott="<button class='fuckyou' >背景文件/渲染</button><button class='fuckyou'>控件透明度</button><button class='fuckyou'>介绍</button>"
        let addmain=`<div id="localsett"><div><button id="exit" class="fuckyou3">X</button><span>背景图片/渲染设置</span><div><form name='myform' method="POST" action='${nowurl}'><input class="SettiingInput" type='file' id='webimgsrc' accept='image/*'><br> <span>${leange1[0]}</span><input class="SettiingInput" type='text'  value='${localStorage.webimgsrc}' name='' id='localimgsrc' width='150px'><br><input class="SettiingInput" type="checkbox" ${leadermanhide} value="leadermanhide" name="leadermanhide" id="leadermanhide"><label for="leadermanhide">${leange1[1]}</label><br><span>${leange1[2]}</span><input class="SettiingInput" type='text' onblur='if(!((/[(0-9)]/).test(value)))value=18' value='${localStorage.NameFontSize}' name='size' id='size' size="5"><br><span>${leange1[3]}</span><input class="SettiingInput ColorSettinr" type="color" id="fontcolor" value="${localStorage.LocalFontColor}"><input class="SettiingInput ColorSettinr"  type="color" id="fontcolorsec" value="${localStorage.LocalFontColorsec}"><br><span>${leange1[4]}</span><input class="SettiingInput" type="text" onblur='if(!((/[(0-9)]/).test(value)))value=1' size="5"  value="${localStorage.BorderTextSize}"  name="BorderText" id="BorderText"><br><span>图像渲染方式</span><select style="padding:0;" name="selectBox" id="selectBox"><option value="default" ${(function(){if(BackPrintSelectBox==="default"){return "selected";}})()}>自定义</option><option value="PicFirst" ${(function(){if(BackPrintSelectBox==="PicFirst"){return "selected";}})()}>图像尺寸定位</option><option value="WebFirst" ${(function(){if(BackPrintSelectBox==="WebFirst"){return "selected";}})()}>网站尺寸优先</option></select><input class="SettiingInput" type="checkbox" id="center" ${(function (){if (localStorage.centerPosition!==""){return "checked";}else{return "";}})()}  value="center"><label for="center">居中渲染</label><br><span>${leange1[5]}</span><input class="SettiingInput" type='text'  oninput='if(!((/[(0-9)/-]/).test(value)))value=0' value='${localStorage.top}' name='topp' id='top' size="5"> <span>${leange1[6]}</span><input class="SettiingInput" type='text' oninput='if(!((/[(0-9)/-]/).test(value)))value=0' value='${localStorage.left}' name='leftt' id='left' size="5"><br> <span>${leange1[7]}</span><input class="SettiingInput" type='text' onblur='if(!((/[(0-9)]/).test(value))&&value!=="auto")value=100' min='0'  value='${localStorage.widthsize}' name='' id='widthsize' size='5'><br><span>${leange1[8]}</span><input class="SettiingInput" type='text' onblur='if(!((/[(0-9)]/).test(value))&&value!=="auto")value=100'  min='0' value=${localStorage.heightsize} name='' id='heightsize' size="5"><br><input class="SettiingInput" type='radio' ${webpiclod} name='picloadsele' id='webpicon'  width='100px' value="webpicon"> <label for="webpicon">${leange1[9]}</label><input class="SettiingInput" type='radio'  name='picloadsele' ${localpiclod} id='localpicon' value="localpicon"  width='100px'><label for="localpicon">${leange1[10]}</label><hr><span>使用section写入背景只能在最底层</span><br><input class="SettiingInput" type='radio'  ${sectionplanone} name='addplan' id='sectionplan' value="sectionplan" width='100px'><label for="sectionplan">${leange1[11]}</label><input class="SettiingInput" type='radio'  name='addplan' ${backgroundplanone} id='backgroundplan' value="backgroundplan"  width='100px'><label for="backgroundplan">${leange1[12]}</label><br><span>透明度</span><input class="SettiingInput RangeSetting" type="range" min="0" max="1" step="0.01" value="${localStorage.canseenunber}" id="notseenumber"><hr><input class="SettiingInput" type='radio' value='1' ${PrintToBackground} name='baklocal' id='printToWebback' value="printToWebback"  width='100px'><label for="printToWebback">${leange1[13]}</label><input class="SettiingInput" type='radio' value='printToBBS' name='baklocal' ${PrintToBBSGround} id='printToBBS'  width='100px'><label for="printToBBS">${leange1[14]}</label><br> <button class='fuckyou2' id='save' type="submit">提交</button></form></div>`
        let addmain2=`<div id="cantseegive"><button id="secexit" class="fuckyou3">X</button><span>控件透明度设置</span><br><input class="SettiingInput" type="checkbox"  ${Scrollstylex} name="ScrollSett" id="ScrollSett">${leange2[0]}</input><br><span>${leange2[1]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum1" value="${localStorage.CantSeeset1}"><input class="SettiingInput  ColorSettinr" type="color" id="Msgcolor1" value="${localStorage.CantSeeColor1}"><br><span>${leange2[2]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum2" value="${localStorage.CantSeeset2}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor2" value="${localStorage.CantSeeColor2}"><br><span>${leange2[3]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum3" value="${localStorage.CantSeeset3}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor3" value="${localStorage.CantSeeColor3}"><br><span>${leange2[4]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum4" value="${localStorage.CantSeeset4}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor4" value="${localStorage.CantSeeColor4}"><br><span>${leange2[5]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum5" value="${localStorage.CantSeeset5}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor5" value="${localStorage.CantSeeColor5}"><br><span>${leange2[6]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum6" value="${localStorage.CantSeeset6}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor6" value="${localStorage.CantSeeColor6}"><br><span>${leange2[7]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum7" value="${localStorage.CantSeeset7}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor7" value="${localStorage.CantSeeColor7}"><br><span>${leange2[8]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum8" value="${localStorage.CantSeeset8}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor8" value="${localStorage.CantSeeColor8}"><br><span>${leange2[9]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum9" value="${localStorage.CantSeeset9}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor9" value="${localStorage.CantSeeColor9}"><br><button class="fuckyou2"  id="secsubint">提交</button><br><button id="reall"  class="fuckyou2">重置颜色|透明度配置</button></div>`
        let addmain3=`<div id="test"><span></span></div>`

        oldaddtarge.insertAdjacentHTML("afterbegin",addbott);
        bac.insertAdjacentHTML("afterbegin",addmain);
        bac.insertAdjacentHTML("afterbegin",addmain2);
        bac.insertAdjacentHTML("afterbegin",addmain3);


        let addbutt=document.querySelector("#navbar-collapse > button");
        let addbutt2=document.querySelector("#navbar-collapse > button:nth-child(2)");
        let addbutt3=document.querySelector("#navbar-collapse > button:nth-child(3)");
        let adddiv=document.querySelector("#localsett");
        let adddiv2=document.querySelector("#cantseegive");
        let adddiv3=document.querySelector("#test");
        checkPrint();
        let printSelcetBox=document.querySelector("#selectBox");

        printSelcetBox.addEventListener("change",function(){checkPrint();})
        adddiv.setAttribute('style', 'overflow:auto; border-radius: 5px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 330px;height: 550px;border: 1px solid gray;z-index:1;display:none;background-color:rgba(30, 32, 34, 0.70);color:#f0f5f9;-webkit-text-stroke:0.3px #52616b;')
        adddiv2.setAttribute('style','overflow:auto; border-radius: 5px;position: absolute;top: 50%;left: 50%;transform: translate(-51%, -50%);width: 330px;height: 500px;border: 1px solid gray;z-index:1;display:none;background-color:rgba(30, 32, 34, 0.70);color:#f0f5f9;-webkit-text-stroke:0.3px #52616b;')
        adddiv3.setAttribute('style','overflow:auto; border-radius: 5px;position: absolute;top: 50%;left: 50%;transform: translate(-52%, -50%);width: 330px;height: 500px;border: 1px solid gray;z-index:1;display:none;background-color:rgba(30, 32, 34, 0.70);color:#f0f5f9;-webkit-text-stroke:0.3px #52616b;')
        addbutt.addEventListener("click",function(){//开关设置栏1
            let adddiv=document.querySelector("#localsett")
            if (adddiv.style.display==="block"){
                adddiv.style.display="none";
            }else{
                adddiv.style.display="block";
            }
        });
        addbutt2.addEventListener("click",function(){//开关设置栏2
            let adddiv2=document.querySelector("#cantseegive")
            if (adddiv2.style.display==="block"){
                adddiv2.style.display="none";
            }else{
                adddiv2.style.display="block";
            }
        });
        addbutt3.addEventListener("click",function(){//开关设置栏2
            let adddiv3=document.querySelector("#test")
            if (adddiv3.style.display==="block"){
                adddiv3.style.display="none";
            }else{
                adddiv3.style.display="block";
            }
        });


        let exitbutt=document.querySelector("#exit")//设置的关闭按钮
        let secexitbutt=document.querySelector("#secexit")//设置的关闭按钮
        exitbutt.addEventListener("click",function(){adddiv.style.display="none";})//设置的关闭按钮实现
        secexitbutt.addEventListener("click",function(){adddiv2.style.display="none";})//设置的关闭按钮实现
    }
    function ResetSeenum() {
        localStorage.setItem("CantSeeset1","00");
        localStorage.setItem("CantSeeset2","20");
        localStorage.setItem("CantSeeset3","00");
        localStorage.setItem("CantSeeset4","20");
        localStorage.setItem("CantSeeset5","20");
        localStorage.setItem("CantSeeset6","100");
        localStorage.setItem("CantSeeset7","20");
        localStorage.setItem("CantSeeset8","50");
        localStorage.setItem("CantSeeset9","20");
        localStorage.setItem("CantSeeColor1","#2b2c40");
        localStorage.setItem("CantSeeColor2","#2b2c40");
        localStorage.setItem("CantSeeColor3","#2b2c40");
        localStorage.setItem("CantSeeColor4","#2b2c40");
        localStorage.setItem("CantSeeColor5","#2b2c40");
        localStorage.setItem("CantSeeColor6","#2b2c40");
        localStorage.setItem("CantSeeColor7","#2b2c40");
        localStorage.setItem("CantSeeColor8","#66ccff");
        localStorage.setItem("CantSeeColor9","#2b2c40");
    }




    //本地存储检测
    if(!localStorage.BackgroundPrint){
        localStorage.setItem("BackgroundPrint","");
    }
    if(!localStorage.centerPosition){
        localStorage.setItem("centerPosition","");
    }
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
    if(!localStorage.LocalFontColorsec){
        localStorage.setItem("LocalFontColorsec","#7071a4")
    }
    if(!localStorage.LocalFontColorsec){
        localStorage.setItem("BorderTextSize","1");
    }
    if(!localStorage.scrollstyle){
        localStorage.setItem("scrollstyle","1")
    }
    if(!localStorage.CantSeeset1){//聊天历史记录1
        localStorage.setItem("CantSeeset1","00");
    }
    if(!localStorage.CantSeeset2){//自顶栏往下部分
        localStorage.setItem("CantSeeset2","20");
    }
    if(!localStorage.CantSeeset3){//聊天历史记录2（位置更靠里
        localStorage.setItem("CantSeeset3","00");
    }
    if(!localStorage.CantSeeset4){//聊天页面外层边框
        localStorage.setItem("CantSeeset4","20");
    }
    if(!localStorage.CantSeeset5){//聊天页面外层边框
        localStorage.setItem("CantSeeset5","20");
    }
    if(!localStorage.CantSeeset6){//聊天页面外层边框
        localStorage.setItem("CantSeeset6","20");
    }
    if(!localStorage.CantSeeset7){//聊天页面外层边框
        localStorage.setItem("CantSeeset7","20");
    }
    if(!localStorage.CantSeeset8){//聊天页面外层边框
        localStorage.setItem("CantSeeset8","50");
    }
    if(!localStorage.CantSeeset9){//聊天页面外层边框
        localStorage.setItem("CantSeeset9","20");
    }
    if(!localStorage.CantSeeColor1){//聊天历史记录1
        localStorage.setItem("CantSeeColor1","#2b2c40");
    }
    if(!localStorage.CantSeeColor2){//自顶栏往下部分
        localStorage.setItem("CantSeeColor2","#2b2c40");
    }
    if(!localStorage.CantSeeColor3){//自顶栏往下部分
        localStorage.setItem("CantSeeColor3","#2b2c40");
    }
    if(!localStorage.CantSeeColor4){//聊天页面外层边框
        localStorage.setItem("CantSeeColor4","#2b2c40");
    }
    if(!localStorage.CantSeeColor5){//聊天页面外层边框
        localStorage.setItem("CantSeeColor5","#2b2c40");
    }
    if(!localStorage.CantSeeColor6){//聊天页面外层边框
        localStorage.setItem("CantSeeColor6","#2b2c40");
    }
    if(!localStorage.CantSeeColor7){//聊天页面外层边框
        localStorage.setItem("CantSeeColor7","#2b2c40");
    }
    if(!localStorage.CantSeeColor8){//聊天页面外层边框
        localStorage.setItem("CantSeeColor8","#66ccff");
    }
    if(!localStorage.CantSeeColor9){//聊天页面外层边框
        localStorage.setItem("CantSeeColor9","#2b2c40");
    }
    //本地数值设定结束
    //通过读取本地存储数据进行选择值设定
    let webpiclod="";
    let localpiclod="";
    let leadermanhide="";
    let backgroundplanone="";
    let sectionplanone="";
    let PrintToBackground="";
    let PrintToBBSGround="";
    let Scrollstylex;
    let BackPrintSelectBox="";
    let Backleft;
    let BackTop;
    if (localStorage.centerPosition===""){
        Backleft=localStorage.left+"px";
        BackTop=localStorage.top+"px";
    }else{
        Backleft=BackTop="";
    }
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
    if (localStorage.printToBack==="1"){//背景的填充位置
        PrintToBackground="checked"
    }else{
        PrintToBBSGround="checked"
    }
    if (localStorage.scrollstyle==="1"){//滚动条渲染
        Scrollstylex="checked"
    }else{
        Scrollstylex=""
    }
    if(localStorage.BackgroundPrint===""){
        BackPrintSelectBox="default"
    }else if(localStorage.BackgroundPrint==="cover"){
        BackPrintSelectBox="PicFirst"
    }else if(localStorage.BackgroundPrint==="contain"){
        BackPrintSelectBox="WebFirst"
    }
    //通过读取本地存储数据进行选择值设定结束
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
// 错误处理
    request.onerror = function(event) {
        console.error('Database error:', event.target.error);
    };
    //初始值部分结束

    let localHightSize="";
    let localWidthSize="";
    let addHTML='<div id="backread">'
    document.querySelector("body").insertAdjacentHTML("afterbegin",addHTML);
    let addtarge=document.querySelector("#backread");
    let bac=document.querySelector("body")//网页本体


    let nowurl = window.location.href;//读取当前所在网页
    console.log(nowurl);

    if (nowurl.includes('https://boyshelpboys.com/chat.htm')) {//如果当前网页为聊天室页面
        WidthHeingtSet();
        let printstr1=["线上地址","删除左侧导航栏","聊天室名称大小","聊天室名称描边/字体颜色","聊天室名称描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条不显示","历史记录1透明度","顶栏下部透明度","历史记录2透明度","外层边框透明度","顶栏透明度","发送边框透明度","发送框透明度","发送框描边","'聊天留言'透明度"]
        let printstr3=[]
        addsett(printstr1,printstr2,printstr3,nowurl);
        leftANDtop();


        console.log("chattime")

        console.log(nowurl);
        document.querySelector("#navbar-collapse > div").innerHTML=""
        let backb=document.querySelector("#top > div > div")//自顶栏往下部分
        let baca=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-body")//聊天历史记录1
        let ul=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-body > ul")//聊天历史记录2（位置更靠里）
        let histor=document.querySelector("#top > div > div > main > section")//聊天页面外层边框
        let fackone=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs")//输入框部分
        let msginputbox=document.querySelector("#msg")
        let LiuYanTop=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-header.border-bottom")
        let BBSmsgBack=document.querySelector("#top > div > div > main > section > div")
        let msgInputBoxOutsite=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.form-send-message.d-flex.justify-content-between.align-items-center.talk.write")
        fackone.className='shadow-xs'//修改输入框部分css，删除上部的渐变黑条
        fackone.setAttribute('style',`padding: .5rem .5rem; position: relative; border-radius: .375rem; margin: 0 1.5rem 1rem 1.5rem;background-color:${localStorage.CantSeeColor6}${localStorage.CantSeeset6}`)

        document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.chat-toolbar").className="chat-toolbar GameBarFix"

        let DIV2=document.querySelector("#layout-navbar");

        let NeedFixStyle=document.querySelectorAll("body > style");//修改滚动条状态
        NeedFixStyle[NeedFixStyle.length-1].insertAdjacentHTML("afterend",'<style id="style2"></style>');
        let nedAddStyle=document.createTextNode(`@media(min-width: 768px) {::-webkit-scrollbar {width: 0px; height: 6px;border-radius: 20px;}::-webkit-scrollbar-track { background: var(--bs-body-bg);}::-webkit-scrollbar-thumb {background: var(--bs-secondary);border-radius: 20px;}::-webkit-scrollbar-thumb:hover {background: var(--bs-primary);}::-webkit-scrollbar-thumb:focus, ::-webkit-scrollbar-thumb:active {background: var(--bs-primary-active);}}`)
        let AddStylesec=document.createTextNode(`@media(min-width: 768px) {::-webkit-scrollbar {width: 3px; height: 6px;border-radius: 20px;}::-webkit-scrollbar-track { background: var(--bs-body-bg);}::-webkit-scrollbar-thumb {background: var(--bs-secondary);border-radius: 20px;}::-webkit-scrollbar-thumb:hover {background: var(--bs-primary);}::-webkit-scrollbar-thumb:focus, ::-webkit-scrollbar-thumb:active {background: var(--bs-primary-active);}} `)
        let FixStyle=document.querySelector("#style2")
        if (localStorage.scrollstyle==="1"){//背景的填充方式
            FixStyle.appendChild(nedAddStyle);
        }else{
            FixStyle.appendChild(AddStylesec);
            console.log("check1");
        }
        function SetScroll() {//滚动条样式调整
            console.log(FixStyle.innerHTML)
            if (FixStyle.innerHTML==""){
                localStorage.setItem("scrollstyle","1")
                FixStyle.appendChild(nedAddStyle);
            }else{
                localStorage.setItem("scrollstyle","0")
                FixStyle.innerHTML=""
                console.log("check2");
            }
        }

        let addlocalupdate=document.querySelector("#webimgsrc");
        let ScrollSettButt=document.querySelector("#ScrollSett")
        ScrollSettButt.addEventListener("click",SetScroll)

        bac.setAttribute('style',`background-color: #202040;`)//网页背景部分
        LiuYanTop.setAttribute("style",`background-color:${localStorage.CantSeeColor9}${localStorage.CantSeeset9};border:0px !important;`);

        baca.setAttribute('style', `background-color: ${localStorage.CantSeeColor1}${localStorage.CantSeeset1} !important;`)//聊天历史记录1
        backb.setAttribute('style', `background-color: ${localStorage.CantSeeColor2}${localStorage.CantSeeset2} !important;`)//自顶栏往下部分
        ul.setAttribute('style', `background-color: ${localStorage.CantSeeColor3}${localStorage.CantSeeset3} !important;`)//聊天历史记录2（位置更靠里）
        histor.setAttribute('style', `background-color: ${localStorage.CantSeeColor4}${localStorage.CantSeeset4} !important;`)//聊天页面外层边框
        msginputbox.setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7} !important;border:1px solid ${localStorage.CantSeeColor8}${localStorage.CantSeeset8} !important;height:40px !important;`)//输入框部分
        msgInputBoxOutsite.setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7} !important;height:48px;`)
        document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.form-send-message.d-flex.justify-content-between.align-items-center.talk.write > button").setAttribute("style","height:40px !important;width:40px !important;")  //站长工具栏启动按钮
//bac.setAttribute('style',"background-color: #00000070;background-image:url('https://t1-img.233213.xyz/2024/11/25/67447535ec930.jpg');background-repeat=no-repeat")//背景图片替换//背景颜色
        backPrint(BBSmsgBack);
        let adddiv=document.querySelector("#localsett");
        let adddiv2=document.querySelector("#cantseegive");



        let localget=document.querySelector("#save");
        let localStyleGet=document.querySelector("#secsubint")
        localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
        localStyleGet.addEventListener("click",function x(){addStyleToLocal(backb,baca,ul,histor,DIV2,fackone,msginputbox,LiuYanTop)},false);//点击向localst保存控件透明度数据
        addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64

        let exitbutt=document.querySelector("#exit")//设置的关闭按钮
        let secexitbutt=document.querySelector("#secexit")//设置的关闭按钮
        exitbutt.addEventListener("click",function(){adddiv.style.display="none";})//设置的关闭按钮实现
        secexitbutt.addEventListener("click",function(){adddiv2.style.display="none";})//设置的关闭按钮实现

        let Recolor=document.querySelector("#reall")//重置颜色和透明度配置
        Recolor.addEventListener("click",function(){
            ResetSeenum();
            let DIV2=document.querySelector("#layout-navbar");
            let fackone=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs")//输入框部分
            let LiuYanTop=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-header.border-bottom")
            msginputbox.setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7};border:1px solid ${localStorage.CantSeeColor8}${localStorage.CantSeeset8} !important;`)//发送框的调整
            baca.setAttribute('style', `background-color: ${localStorage.CantSeeColor1}${localStorage.CantSeeset1};`)//聊天历史记录1
            backb.setAttribute('style', `background-color: ${localStorage.CantSeeColor2}${localStorage.CantSeeset2};`)//自顶栏往下部分
            ul.setAttribute('style', `background-color: ${localStorage.CantSeeColor3}${localStorage.CantSeeset3};`)//聊天历史记录2（位置更靠里）
            histor.setAttribute('style', `background-color: ${localStorage.CantSeeColor4}${localStorage.CantSeeset4};`)//聊天页面外层边框
            DIV2.setAttribute('style', `background-color:${localStorage.CantSeeColor5}${localStorage.CantSeeset5} !important;backdrop-filter:saturate(100%) !important;`);//顶栏
            fackone.setAttribute('style',`padding: .5rem .5rem; position: relative; border-radius: .375rem; margin: 0 1.5rem 1rem 1.5rem;background-color:${localStorage.CantSeeColor6}${localStorage.CantSeeset6}`)//发送栏外层边框
            LiuYanTop.setAttribute("style",`background-color:${localStorage.CantSeeColor9}${localStorage.CantSeeset9};border:0px !important;`);
        })

        //针对@闪电炫芬批插件的外链头像图片做适配
        document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-body > ul > li:nth-child(1048)  ")
        let oldLen=0
        setInterval(function () {
            let Liloader= document.querySelectorAll("#top > div > div > main > section > div > div > div > div.chat-history-body > ul > li")
            if (oldLen ===Liloader.length){
            }else{
                for (let i = 0; i < Liloader.length; i++) {
                    let imgfix=Liloader[i].querySelector("div > div.user-avatar.flex-shrink-0.me-4 > div > img")

                    if (imgfix!==null&&imgfix.src.includes("https://boyshelpboys.com/.")){
                        console.log(imgfix.src)
                        console.log("1122334")
                        let needFix=imgfix.src
                        imgfix.src=needFix.substring(26);
                    }
                }
            }
            oldLen= Liloader.length;
        },1000)
    }else if(nowurl.includes('https://boyshelpboys.com/plugin')){
        console.log(nowurl);
        console.log("damn");

    }else if(nowurl.includes('https://boyshelpboys.com/my')){
        console.log(nowurl);
        bac.setAttribute("style","background-color:202040")
        console.log("dohier");
        let printstr1=["线上地址","删除左侧导航栏","淡色字体大小","淡色字描边/字体颜色","淡色字描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条控制(在此页面不生效)","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","'*没做*'*没做*"]
        let printstr3=[]
        addsett(printstr1,printstr2,printstr3,nowurl);
        leftANDtop();
        WidthHeingtSet();
        backPrint();
    }else if(nowurl ==="https://boyshelpboys.com/"||nowurl.includes("https://boyshelpboys.com/#")||nowurl.includes("https://boyshelpboys.com/index")){
        console.log(nowurl);
        bac.setAttribute("style","background-color:202040")
        console.log("workfoit");
        document.querySelector("#top > div > div > main > div > div.col-lg-9.main > div.card").setAttribute('style', 'display:none');
        document.querySelector("#top > div > div > main > div > div.col-lg-3.aside > div:nth-child(3)").setAttribute('style', 'display:none');
        let spanprint=document.querySelector("#top > div > div > main > div > div.col-lg-9.main > div.card-threadlist").querySelectorAll("span,time,div");
        for (let i = 0; i < spanprint.length; i++){
            if(spanprint[i].className==="username "||spanprint[i].className==="date text-muted hidden-sm"||spanprint[i].className==="last-post username mx-1 text-muted d-inline-block"||spanprint[i].className==="date text-muted "||spanprint[i].className==="text-muted small"){
            spanprint[i].setAttribute('style', `-webkit-text-stroke: ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor};font-size:${localStorage.NameFontSize}px; color:${localStorage.LocalFontColorsec}`);
            }
        }
        leftANDtop();
        WidthHeingtSet();
        backPrint();
        let Tiezi1=document.querySelector("#top > div > div > main > div > div.col-lg-9.main > div.card-threadlist > div.card.card-body.py-2");
        let Tiezi2
        console.log(localStorage.CantSeeset1)
        Tiezi1.setAttribute('style', `background-color:${localStorage.CantSeeColor1}${localStorage.CantSeeset1};`);
        let printstr1=["线上地址","删除左侧导航栏","淡色字体大小","淡色字描边/字体颜色","淡色字描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条控制(在此页面不生效)","帖子栏1透明度","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","'*没做*'*没做*"]
        let printstr3=[]
        addsett(printstr1,printstr2,printstr3,nowurl);



        let addlocalupdate=document.querySelector("#webimgsrc");
        let localget=document.querySelector("#save");
        let localStyleGet=document.querySelector("#secsubint")
        localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
        localStyleGet.addEventListener("click",function x(){addStyleToLocal(Tiezi1,Tiezi2)},false);//点击向localst保存控件透明度数据
        addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64


    }else{
        console.log(nowurl);
        console.log("dohere");
        bac.setAttribute("style","background-color:202040")
        setInterval(function(){if (bac.style.backgroundColor==''){console.log("reprint"); bac.setAttribute('style',`background-color: #202040;`)}},1)
        leftANDtop();
        WidthHeingtSet();
        backPrint(bac);



        let printstr1=["线上地址","删除左侧导航栏","聊天室名称大小","聊天室名称描边/字体颜色","聊天室名称描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条控制(在此页面不生效)","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","'*没做*'*没做*"]
        let printstr3=[]
        addsett(printstr1,printstr2,printstr3,nowurl);
        let addlocalupdate=document.querySelector("#webimgsrc");
        let localget=document.querySelector("#save");
        let localStyleGet=document.querySelector("#secsubint")
        localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
        localStyleGet.addEventListener("click",addStyleToLocal,false);//点击向localst保存控件透明度数据
        addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64

    }
})();