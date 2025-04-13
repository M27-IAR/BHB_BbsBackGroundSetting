// ==UserScript==
// @name        BHB聊天室背景图片更换（已全局兼容）
// @namespace   Violentmonkey Scripts
// @match       https://*boyshelpboys.com/*
// @description BHB界面背景图片修改，长期更新中（大概
// @grant       none
// @version     3.1.0.1
// @author      M27IAR
// @license     GPL-3.0-or-later
// @license     GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==
(function(){
    let FirstTime=false
    let webWidth = window.innerWidth;
    let webHeight = window.innerHeight;//获取页面宽高
    //本地存储检测
    if(!localStorage.M27NewBBGPrint){//是否启用自定义聊天室
        localStorage.setItem("M27NewBBGPrint","false")
    }
    if(!localStorage.BackGroundColor){//背景颜色
        localStorage.setItem("BackGroundColor","#000000")
    }
    if(!localStorage.MsgLightCheckX){
        localStorage.setItem("MsgLightCheckX",'true')
    }
    if(!localStorage.MsgSet){
        localStorage.setItem("MsgSet","false");
    }
    if(!localStorage.MsgSetVisable){
        localStorage.setItem("MsgSetVisable","false");
    }
    if(!localStorage.TransparencySet){//透明度模块是否显示
        localStorage.setItem("TransparencySet","false");
    }
    if(!localStorage.PrintVisabel){
        localStorage.setItem("PrintVisabe","false")
    }
    if(!localStorage.PrintPicOpen){
        localStorage.setItem("PrintPicOpen","true")
    }
    if(!localStorage.PrintPlanCheck){
        localStorage.setItem("PrintPlanCheck","false")
    }
    if(!localStorage.IdPrintCheck){
        localStorage.setItem("IdPrintCheck","false");
    }
    if(!localStorage.PrintPicplanChk){
        localStorage.setItem("PrintPicplanChk","true")
    }
    if(!localStorage.BoxColor){//特效方格颜色
        localStorage.setItem("BoxColor","#000000");
    }
    if(!localStorage.BoxBorderColor){//特效方格描边色
        localStorage.setItem("BoxBorderColor","#000000");
    }
    if(!localStorage.MsgBoxTra){
        localStorage.setItem("MsgBoxTra",'0.2');
    }
    if(!localStorage.MsgBoxColor){//消息框背景色
        localStorage.setItem("MsgBoxColor","#000000");
    }
    if(!localStorage.BoxBorderCansee){
        localStorage.setItem("BoxBorderCansee","99");
    }
    if(!localStorage.BoxPrint){//是否启动特效方格渲染
        localStorage.setItem("BoxPrint","no");
    }
    if(!localStorage.BoxSize){//特效方格大小
        localStorage.setItem("BoxSize","50");
    }
    if(!localStorage.BackgroundPrint){//图像背景尺寸设置
        localStorage.setItem("BackgroundPrint","cover");
    }
    if(!localStorage.centerPosition){//居中渲染设定
        localStorage.setItem("centerPosition","center");
    }
    if(!localStorage.heightsize){//宽度默认值
        localStorage.setItem("heightsize",'100');
    }
    if(!localStorage.widthsize){//高度默认值
        localStorage.setItem("widthsize",'100');
    }
    if(!localStorage.left){//左侧偏转角度
        localStorage.setItem("left",'0');
    }
    if(!localStorage.top){//顶部偏转角度
        localStorage.setItem("top",'0');
    }
    if(!localStorage.webpiclod){//加载线上图片
        localStorage.setItem("webpiclod",1);
    }
    if(!localStorage.localpiclod){//加载本地图片
        localStorage.setItem("localpiclod",0);
    }
    if(!localStorage.leaderhide){//隐藏左侧条目
        localStorage.setItem("leaderhide",0);
    }
    if(!localStorage.canseenunber){//透明度数字
        localStorage.setItem("canseenunber",0.50);
    }
    if(!localStorage.printToBack){//渲染到背景
        localStorage.setItem("printToBack",1);
    }
    if(!localStorage.printToBBS){//渲染到聊天界面
        localStorage.setItem("printToBBS",0);
    }
    if(!localStorage.NameFontSize){//聊天室ID|其他页面部分字体的尺寸
        localStorage.setItem("NameFontSize",12);
    }
    if(!localStorage.LocalFontColor){//聊天室ID|其他页面部分字体的颜色
        localStorage.setItem("LocalFontColor","#ffffff")
    }
    if(!localStorage.LocalFontColorsec){//聊天室ID|其他页面部分字体的描边
        localStorage.setItem("LocalFontColorsec","#7071a4")
    }
    if(!localStorage.BorderTextSize){//聊天室ID|其他页面部分字体的描边粗细
        localStorage.setItem("BorderTextSize",1);
    }
    if(!localStorage.scrollstyle){//滚动条状态
        localStorage.setItem("scrollstyle","1")
    }
    if(!localStorage.CantSeeset1){//聊天历史记录1
        localStorage.setItem("CantSeeset1","00");
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
    if(!localStorage.webimgsrc){//线上图片链接
        localStorage.setItem("webimgsrc",'https://file.uhsea.com/2501/dcf32737963071eb748593c038add7cdP3.png');
    }
    if(!localStorage.version||localStorage.version!== "3.1.0.1"){//安装后的更新检测覆盖
        FirstTime=true
        localStorage.setItem("version","3.1.0.1");localStorage.removeItem("CantSeeColor2");localStorage.removeItem("CantSeeset2");
         if(localStorage.webimgsrc==="https://file.uhsea.com/2501/c8859f9cfcefe1b9fd658301aa1c70af5P.jpg"||localStorage.webimgsrc==="https://file.uhsea.com/2501/54d2c95d4f41d80cec435c63cd50dd24RG.jpg"||localStorage.webimgsrc==="https://file.uhsea.com/2501/dcf32737963071eb748593c038add7cdP3.png"||localStorage.webimgsrc==="https://t1-img.233213.xyz/2024/11/29/674922c38c1df.png"||localStorage.webimgsrc==="https://file.uhsea.com/2501/8298cc1941d4d5173d32e8a78bf67e6a6K.jpg") {
            if(webWidth<webHeight){
                localStorage.setItem("webimgsrc", 'https://m27iarsite.cc/20250225232321_67bde069e2d11.jpg');
            }else{
                localStorage.setItem("webimgsrc", 'https://m27iarsite.cc/20250225232331_67bde0730536d.jpg');
            }
        }
    }else {FirstTime=false}
    /*
    这里是历史使用过的默认在线URL，需要自取：
    https://t1-img.233213.xyz/2024/11/25/67447535ec930.jpg
    https://t1-img.233213.xyz/2024/11/29/674922c38c1df.png
    https://file.uhsea.com/2501/8298cc1941d4d5173d32e8a78bf67e6a6K.jpg
    https://file.uhsea.com/2501/dcf32737963071eb748593c038add7cdP3.png
    https://file.uhsea.com/2501/c8859f9cfcefe1b9fd658301aa1c70af5P.jpg
    https://file.uhsea.com/2501/54d2c95d4f41d80cec435c63cd50dd24RG.jpg
    https://m27iarsite.cc/20250225232331_67bde0730536d.jpg
    https://m27iarsite.cc/20250225232321_67bde069e2d11.jpg
    */
    //本地数值设定结束

    //通过读取本地存储数据进行选择值设定
    let webpiclod="";
    let localpiclod="";
    let leadermanhide="";
    let PrintToBackground="";
    let PrintToBBSGround="";
    let Scrollstylex;
    let BackPrintSelectBox="";
    let Backleft;//是顶部距离的数据
    let BackTop;//是左侧距离的数据
    if (localStorage.centerPosition==="none"){//是否启用居中渲染
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
    if(localStorage.BackgroundPrint==="none"){
        BackPrintSelectBox="default"
    }else if(localStorage.BackgroundPrint==="cover"){
        BackPrintSelectBox="PicFirst"
    }else if(localStorage.BackgroundPrint==="contain"){
        BackPrintSelectBox="WebFirst"
    }
    //通过读取本地存储数据进行选择值设定结束

    //移除顶栏的磨砂效果
    let NeedFixStyleFive=document.querySelector("head");
    NeedFixStyleFive.insertAdjacentHTML("beforeend",'<style id="style5"></style>');
    let FixStyleFive=document.querySelector("#style5")
    let nedAddStyleFive=document.createTextNode(`.layout-navbar-fixed .layout-page:before {backdrop-filter:  blur(0px);}`)//添加处理上部控件的背景模糊的样式表
    FixStyleFive.appendChild(nedAddStyleFive)

    let ContentColor//自定义颜色储存

    let localHightSize="";
    let localWidthSize="";
    //背景图片需要的div插入
    let addHTML='<div id="backread">'
    document.querySelector("body").insertAdjacentHTML("afterbegin",addHTML);
    let addtarge=document.querySelector("#backread");
    let bac=document.querySelector("body")//网页本体
    document.querySelector("#navbar-collapse > div").innerHTML=""//删除手机模式下顶部的图标

    //方片特效准备
    let DIVboxsize=localStorage.BoxSize;
    let printNunber
    let arr={};
    let addBoxinputlocal=document.querySelector("#backread")
    let addDIVmax=`<div id='Maxdiv' style='width:120%;pointer-events: none; position: fixed;top:0;left:-5%;right:-5%;bottom: 0;display: flex;flex-direction: row;flex-wrap:wrap;justify-content:left;align-items: flex-start;'></div>`
    addBoxinputlocal.insertAdjacentHTML("afterend",addDIVmax);
    let DIVmax=document.querySelector("#Maxdiv");
    rePrint(webWidth,webHeight);

    let tiner=setInterval(changeBackground,3000);//设置方片波动效果
    if(localStorage.BoxPrint==="no"){
        clearInterval(tiner)
    }

    window.addEventListener('resize', function(){//在界面尺寸变更时重新填充背景方块
        clearInterval(tiner);
        webWidth=window.innerWidth;
        webHeight=window.innerHeight;
        setTimeout(function () {
            rePrint(webWidth,webHeight);
        },100)
        tiner=setInterval(changeBackground,3000);
        if(localStorage.BoxPrint==="no"){
            clearInterval(tiner)
        }
    })
    //window.alert = function() {};
    window.history.replaceState(null, null, window.location.href);

    function getColorSet(){//获取用户的个性化颜色设置
        ContentColor=localStorage.getItem("statelyThemeColor")
        if(ContentColor==="default"){
            ContentColor="#FF8FA2"
        }
    }
    getColorSet()
    //覆盖站长的方法
    const OnlineUsers = {users: new Map(),init() {},bindEvents() {},addUser(username, avatar) {},updateOnlineStatus() {},updateUsersList() {}};
    window.OnlineUsers = {users: new Map(),lastActivity: new Map(),pageSize: 10,  currentPage: 1, init() {},bindEvents() {},updateUserActivity(username) {},addUser(username, avatar) {},updateOnlineStatus() {},updateUsersList() {},updateBottomButtons(hasMore) {},resetPagination() {},updateActiveUsers() {}};
    function createMessageMenu() {}//覆盖站长的方法

    function leftANDtop() {
        let MsgBoxRed=Number("0x"+localStorage.MsgBoxColor.substring(1,3)),MsgBoxGreen=Number("0x"+localStorage.MsgBoxColor.substring(3,5)),MsgBoxBlue=Number("0x"+localStorage.MsgBoxColor.substring(5))
        let NeedFixStyle=document.querySelector("head");//插入样式表修改左侧与顶栏样式
        NeedFixStyle.insertAdjacentHTML("afterbegin",'<style id="style1"></style>');//杂，但是为多页面内共有项目
        let nedAddStyle=document.createTextNode(` 
        ::selection{
        color:#0000FF !important;} 
        ::-moz-selection{color:#0000FF !important;} 
        .RangeSetting{height:0.5rem;width:7.8125rem;} 
        .ColorSettinr{width:2.75rem;} 
        .SettiingInput{padding:2px 1px;border:0.125rem 0rem;} 
        .GameBarFix{background-color:${localStorage.CantSeeColor6}${localStorage.CantSeeset6} !important;
        border:0 !important;margin:0 !important; transition: 0.3s;} 
        hr{margin: 0.125rem 0 !important;color:#f0f5f9;} 
        small{text-shadow: 1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},-1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 -1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},-1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 -1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},-1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 -1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},-1px 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor},0 -1px ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor} ;font-size:${localStorage.NameFontSize}px !important; color:${localStorage.LocalFontColorsec} } 
        .fuckyou2{
        background-color:rgba(40,64,120,0.4); 
        color: aqua; 
        margin:0px;
        padding: 2px 7px;
        border: 1px aqua solid;
        cursor: pointer;
        transition: background-color 0.3s;
        border-radius: 10px;}
        .fuckyou2:hover{
        background-color: #FFFFFF; 
        color:#66ccff; 
        -webkit-text-stroke:0px;} 
        .fuckyou3{background-color: rgba(40,64,120,0.4); 
        color: aqua; 
        margin:0px;
        padding: 2px 7px;
        border: 1px aqua solid;
        cursor: pointer;
        transition: background-color 0.3s;
        border-radius: 0px;}
        .fuckyou3:hover{background-color: #FFFFFF;
        color:#66ccff;
        -webkit-text-stroke:0px;}  
        .fuckyou{background-color: #2b2c4030; 
        color: white; 
        margin:0.3125rem;
        padding: 0.3125rem;
        border: 0.125rem gray solid;
        font-size:1rem; 
        cursor: pointer;
        transition: background-color 0.3s;
        border-radius: 10px;} 
        .fuckyou:hover{background-color: #FFFFFF; 
        color:#66ccff;} 
        @media (max-width:426px){
        .fuckyou{background-color: #2b2c4030; 
        color: white; 
        padding: 0.5rem 0.5rem;
        border: 0.125rem gray solid;
        font-size:0.625rem;
        cursor: pointer;
        transition: background-color 0.3s;border-radius: 10px;}} 
        .send-btn-M27{
        padding:0.3125rem 0.625rem !important;
        width:4.5rem !important;
        height:2.5rem !important;
        border:0.125rem solid hsl(var(--bs-primary-h), calc(var(--bs-primary-s) * 1%), calc(var(--bs-primary-l) * 1%)) !important;
        border-radius:20px !important;
        margin-left:0.3125rem !important;} 
        .send-btn-M27:hover{
        background-color:hsl(var(--bs-primary-h), calc(var(--bs-primary-s) * 1%), calc(var(--bs-primary-l) * 1%)) !important;
        border-color:while !important;}`)
        let FixStyle=document.querySelector("#style1");
        FixStyle.appendChild(nedAddStyle);
        //方片动态背景的相关css
        let BorderRGBRed=Number("0x"+localStorage.BoxBorderColor.substring(1,3)),BorderRGBGreen=Number("0x"+localStorage.BoxBorderColor.substring(3,5)),BorderRGBBlue=Number("0x"+localStorage.BoxBorderColor.substring(5))
        NeedFixStyle.insertAdjacentHTML("afterbegin",'<style id="style3"></style>');
        let nedAddStyleSec=document.createTextNode(`
    .M27MojPackImg{
    width:100px; height:100px;background-size:cover;background-color:#000000;} 
    .M27flexDivSet{
    pointer-events: none; 
    transition: background-color 2s;
    width:${localStorage.BoxSize}px;height:${localStorage.BoxSize}px;
    flex-basis:${localStorage.BoxSize}px;
    border:1px solid rgba(${BorderRGBRed},${BorderRGBGreen},${BorderRGBBlue},0.${localStorage.BoxBorderCansee});margin;0px;
    }`)
        let FixStyleSec=document.querySelector("#style3");
        FixStyleSec.appendChild(nedAddStyleSec);
        //修改站长加的消息时间|添加指示灯的相关css动画样式
        let NeedFixStyleThee=document.querySelector("head");
        NeedFixStyleThee.insertAdjacentHTML("beforeend",'<style id="style4"></style>');
        let FixStyleThee=document.querySelector("#style4")
        let nedAddStyleThee=document.createTextNode(`
        
        .card{
        --bs-card-bg: rgba(45, 45, 45, 0.7) !important;}
        .M27-chat-history-body {
        flex: 0 1 auto;height: calc(100vh - 19.5rem);
        padding: 1.25rem 1.25rem;
        overflow-x: hidden;
        overflow-y: auto;}
        .M27-list-unstyled {list-style: none;
        padding-left: 0;}
        .M27-online-users-list {overflow:auto;padding: 5px;
        max-height:200px;
        scrollbar-width:thin !important;}
        .M27-online-users-btn {border: none;
        background: none;padding: 8px;display: flex;
        align-items: center;cursor: pointer;
        color: var(--bs-body-color);
        transition: all 0.2s;position: relative;
        width:36px;height:36px;}
        .M27-online-users-btn:hover {
        color: var(--bs-primary);}
        .text-muted {
        --bs-text-opacity: 1;text-shadow: 0 0 ${localStorage.BorderTextSize}px ${localStorage.LocalFontColor};
        font-size:${localStorage.NameFontSize}px; color:${localStorage.LocalFontColorsec} !important;}
        html.dark-style.layout-navbar-fixed.layout-menu-fixed.radius-medium.layout-menu-style-v2.layout-menu-active-color-default body.route-chat div.layout-wrapper.layout-content-navbar div#top.layout-container div.layout-page div.content-wrapper main.container.flex-grow-1.container-p-y section.app-chat.card.overflow-hidden div.row.g-0 div.col.app-chat-history div.chat-history-wrapper div.chat-history-body ul.list-unstyled.chat-history.talk.mk-chat-box li.chat-message.left div.d-flex.overflow-hidden div.chat-message-wrapper.flex-grow-1 div.chat-message-text{
        backdrop-filter: blur(5px) !important;
        background-color: rgba(${MsgBoxRed},${MsgBoxGreen},${MsgBoxBlue},${localStorage.MsgBoxTra}) !important;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25) !important;}
        html.dark-style.layout-navbar-fixed.layout-menu-fixed.radius-medium.layout-menu-style-v2.layout-menu-active-color-default body.route-chat div.layout-wrapper.layout-content-navbar div#top.layout-container div.layout-page div.content-wrapper main.container.flex-grow-1.container-p-y section.app-chat.card.overflow-hidden div.row.g-0 div.col.app-chat-history div.chat-history-wrapper div.chat-history-body ul.list-unstyled.chat-history.talk.mk-chat-box li.chat-message.right.chat-message-right div.d-flex.overflow-hidden div.chat-message-wrapper.flex-grow-1 div.chat-message-text{
        backdrop-filter: blur(5px) !important;
        background-color: rgba(${MsgBoxRed},${MsgBoxGreen},${MsgBoxBlue},${localStorage.MsgBoxTra}) !important;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25) !important;}
        .dropdown-item {line-height: 1.54;backdrop-filter: blur(5px);}
        .offcanvas {background-color: rgba(43,44,64,0.5); }
        @keyframes M27shineGreen{0%{opacity:0.5;background-color:green;}100%{opacity:1;background-color:#77F602;}} @keyframes M27shineYellow{0%{opacity:0.5;background-color:yellow;}100%{opacity:1;background-color:#F6D603;}} @keyframes M27shineRed{0%{opacity:0.5;background-color:red;}100%{opacity:1;background-color:#F60303;}} .linkOpen{animation:M27shineGreen 5s ease-in infinite alternate} .linkBadWeb{animation:M27shineRed 2s ease-in infinite alternate} .linkOutTime{animation:M27shineYellow 4s ease-in infinite alternate} .loading-more {text-align: center;padding: 10px;color: #666;font-size: 12px;background-color: #66CCFF00; }`)
        FixStyleThee.appendChild(nedAddStyleThee);
        if(!document.querySelector("#statelyMyInfoModal > ul > div")){}else{document.querySelector("#statelyMyInfoModal > ul > div").setAttribute("style","backdrop-filter: blur(5px);")}
        document.querySelector("body").setAttribute("style",`background-color:${localStorage.BackGroundColor}`);

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
            DIV3.setAttribute('style','background-color:rgba(255,255,255,0);')

        }
    }

    function addtolocal() {//保存背景设置
        let heightsize=document.getElementById("heightsize");//高度比例
        let widthsize=document.getElementById("widthsize");//宽度比例
        let left=document.getElementById("leftt");//离左侧的距离
        let top=document.getElementById("topp");//离顶部的距离
        let webimgsrc=document.getElementById("localimgsrc");//网络图片链接
        let webpiclod=document.querySelector("#webpicon");//选择渲染网络图片
        let leaderhideplan=document.querySelector("#leadermanhide");//左侧菜单隐藏
        let canseenunber=document.querySelector("#notseenumber");//背景透明度（只在非backimage状态生效）
        let PrintToBackgroundValue=document.querySelector("#printToWebback");
        let LocalBbsNameFontSize=document.querySelector("#size");//聊天室名称大小输入框
        let LocalFontColorset=document.querySelector("#fontcolor");//聊天室描边颜色
        let LocalFontColorsetsec=document.querySelector("#fontcolorsec");//聊天室字体颜色
        let BorderTextSize=document.querySelector("#BorderText");//聊天室描边大小输入框
        let printSelcetBox=document.querySelector("#selectBox");//背景渲染方式
        let centerPosion=document.querySelector("#center")//居中渲染按钮
        let PrintOpen=document.querySelector("#PrintPic");//图像渲染启动按钮
        let PrintPlan=document.querySelector("#PrintPicplan");//图片渲染板块选择框
        let IdPrintOpenchec=document.querySelector("#OpenIdPrint")//id渲染板块启用框
        let PrintPlanChec=document.querySelector("#PrintPlan");//渲染模式板块启用框
        let PrintVisabelOpen=document.querySelector("#PrintVisable")//特效板块启用框
        let TranSet=document.querySelector("#TransparencySet")//透明度板块启用框

        let uplodeheightsize=parseInt(heightsize.value)//高度比例(转数字)
        let uplodewidthsize=parseInt(widthsize.value)//宽度比例(转数字)
        let uplodeleft=parseInt(left.value)//左侧距离(转数字)
        let uplodetop=parseInt(top.value)//顶部距离(转数字)

        //开始写入数据
        localStorage.setItem("BackGroundColor",document.querySelector("#BackGroundColor").value)
        if(TranSet.checked){
            localStorage.setItem("TransparencySet","true");
        }else{
            localStorage.setItem("TransparencySet","false")
        }
        if(PrintVisabelOpen.checked){
            localStorage.setItem("PrintVisable","true")
        }else{
            localStorage.setItem("PrintVisable","false")
        }
        if(PrintOpen.checked){
            localStorage.setItem("PrintPicOpen","true");
        }else{
            localStorage.setItem("PrintPicOpen","false");
        }
        if(PrintPlanChec.checked){
            localStorage.setItem("PrintPlanCheck","true")
        }else{
            localStorage.setItem("PrintPlanCheck","false")
        }
        if(IdPrintOpenchec.checked){
            localStorage.setItem("IdPrintCheck","true")
        }else{
            localStorage.setItem("IdPrintCheck","false")
        }
        if(PrintPlan.checked){//判断用户是否启用图片背景
            localStorage.setItem("PrintPicplanChk","true")
        }else{
            localStorage.setItem("PrintPicplanChk","false")
        }
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
            localStorage.setItem("centerPosition","none");
        }
        if(printSelcetBox.value==="default"){//判断用户选择的渲染状态
            localStorage.setItem("BackgroundPrint","none");
        }else if(printSelcetBox.value==="PicFirst"){
            localStorage.setItem("BackgroundPrint","cover");
        }else if(printSelcetBox.value==="WebFirst"){
            localStorage.setItem("BackgroundPrint","contain");
        }
        addStyleToLocal()
        let adddiv=document.querySelector("#localsett");
        adddiv.style.display="none";
        location.reload();

    }
    function addStyleToLocal() {//保存控件透明度
        let seenum=document.querySelectorAll("#cantseegive > input[type=range]")//透明度获取
        let seecolor1=document.querySelector("#Msgcolor1");//聊天历史记录1颜色
        let seecolor3=document.querySelector("#Msgcolor3");//聊天历史记录2颜色
        let seecolor4=document.querySelector("#Msgcolor4");//聊天历史记录2颜色
        let seecolor5=document.querySelector("#Msgcolor5");//顶栏
        let seecolor6=document.querySelector("#Msgcolor6");//聊天框外框
        let seecolor7=document.querySelector("#Msgcolor7");//发送框颜色透明度
        let seecolor8=document.querySelector("#Msgcolor8");//发送框描边
        let seecolor9=document.querySelector("#Msgcolor9");//发送框描边

        let printseenum={}
        let seenunvalue
        for(let i=0;i<seenum.length;i++){
            seenunvalue=(Math.round(Number(seenum[i].value)*255/100).toString(16))
            if(seenunvalue.length<=1){//转化为16进制来保存
                seenunvalue="0"+seenunvalue;
            }
            localStorage.setItem(`CantSeeset${i+1}`,seenunvalue);
            printseenum[i]=seenunvalue
        }
        localStorage.setItem("CantSeeColor1",seecolor1.value);
        localStorage.setItem("CantSeeColor3",seecolor3.value);
        localStorage.setItem("CantSeeColor4",seecolor4.value);
        localStorage.setItem("CantSeeColor5",seecolor5.value);
        localStorage.setItem("CantSeeColor6",seecolor6.value);
        localStorage.setItem("CantSeeColor7",seecolor7.value);
        localStorage.setItem("CantSeeColor8",seecolor8.value);
        localStorage.setItem("CantSeeColor9",seecolor9.value);

        leftANDtop();
        location.reload();

    }

    function  handleFileSelect(){//图片转base64存储在indexedDB
        let addlocalupdate=document.querySelector("#webimgsrc")
        let imgFile = new FileReader();
        imgFile.readAsDataURL(addlocalupdate.files[0]);
        imgFile.onload = function () {
            let imgDataBase64 = this.result; //base64数据
            // 打开或创建一个数据库
            let request = indexedDB.open('databaseName', 6);
            // 处理数据库升级
            request.onupgradeneeded = function(event) {
                let db = event.target.result;
                // 创建对象存储（表）并设置主键
                if (!db.objectStoreNames.contains("storeName")) {
                    // 数据库不存在，可以在此处创建对象存储空间
                    let objectStore = db.createObjectStore("storeName", { keyPath: "id" });
                    objectStore.createIndex('fieldName', 'fieldName', { unique: false });
                }
                if (!db.objectStoreNames.contains("EmoDB")) {
                    // 数据库不存在，可以在此处创建对象存储空间
                    let objectStoreSec = db.createObjectStore('EmoDB', { keyPath: 'id' });
                    // 创建索引
                    objectStoreSec.createIndex('fieldName', 'fieldName', { unique: false });
                }
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
                };//准备写入图片的BASE64数据
                let queryTransaction = db.transaction(['storeName']);
                let queryObjectStore = queryTransaction.objectStore('storeName');
                let query = queryObjectStore.get(1);
                query.onsuccess = function(event) {
                };
                db.close();
            };// 错误处理
            request.onerror = function(event) {
                console.error('Database error:', event.target.error);
            };
        }

    }//图片转base64存储在localstorage部分结束

    function WidthHeightSet(){//背景宽高设定
        if(localStorage.BackgroundPrint==="none"){
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

    function backPrint(BBSmsgBack,Fromer){//背景渲染设定
        let openpic = indexedDB.open('databaseName', 6);//调用数据库读取本地存储的base64图片数据
        openpic.onupgradeneeded = function(event) {//没有调用则创建|选择了新版本数据库而重建
            let db = event.target.result;
            // 创建对象存储（表）并设置主键
            if (!db.objectStoreNames.contains("storeName")) {
                // 数据库不存在，可以在此处创建对象存储空间
                let objectStore = db.createObjectStore("storeName", { keyPath: "id" });
                objectStore.createIndex('fieldName', 'fieldName', { unique: false });
            }
            if (!db.objectStoreNames.contains("EmoDB")) {
                // 数据库不存在，可以在此处创建对象存储空间
                let objectStoreSec = db.createObjectStore('EmoDB', { keyPath: 'id' });
                // 创建索引
                objectStoreSec.createIndex('fieldName', 'fieldName', { unique: false });
            }
        };
        openpic.onsuccess = function(event) {
            let db = event.target.result;
            // 查询数据
            let queryTransaction = db.transaction(['storeName']);
            let queryObjectStore = queryTransaction.objectStore('storeName');
            let query = queryObjectStore.get(1);
            query.onsuccess = function(event) {
                //转换透明度的数值
                let BackimagePrintPlanNum=(Math.round(Number(100-(localStorage.canseenunber*100))*255/100).toString(16))
                if(BackimagePrintPlanNum==="0"&&localStorage.canseenunber==="0"){BackimagePrintPlanNum=""}
                if (localStorage.PrintPicOpen==="false"){//如果用户选择不渲染图片背景
                    bac.setAttribute("style",`background-color:${localStorage.BackGroundColor};`)
                }else{
                    if(event.target.result.name==="空"&&localStorage.localpiclod === "1"){//如果数据库没有本地图片数据
                        if(localStorage.printToBack==="1"){
                            alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                            bac.setAttribute('style', `background-color:${localStorage.BackGroundColor};background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize};  background-attachment:fixed;`);
                            addtarge.setAttribute('style', `background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-color: ${localStorage.BackGroundColor}${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%;`);
                        }else if(localStorage.printToBBS==="1"){
                            alert('数据库无图片相关内容存储，将加载在线图片，请在设置添加本地图片')//如果数据库没有本地图片数据且选择渲染本地图片
                            BBSmsgBack.setAttribute('style', `background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-attachment:fixed;`);
                            Fromer.setAttribute('style', `background-color: ${localStorage.BackGroundColor}${BackimagePrintPlanNum};`);
                        }
                    }else if(localStorage.webpiclod === "1"){
                        if(localStorage.printToBack==="1"){
                            //通过section写入项目留下的标签实现颜色覆盖
                            bac.setAttribute('style', `background-color:${localStorage.BackGroundColor};background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; background-attachment:fixed;`);
                            addtarge.setAttribute('style', `background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-color: ${localStorage.BackGroundColor}${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%;`);
                        }else if(localStorage.printToBBS==="1"){
                            BBSmsgBack.setAttribute('style', `background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-image: url(${localStorage.webimgsrc}); background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize}; b background-attachment:fixed;`);
                            Fromer.setAttribute('style', `background-color: ${localStorage.BackGroundColor}${BackimagePrintPlanNum};`);
                        }
                    }else if(localStorage.localpiclod === "1"){
                        if(localStorage.printToBack==="1"){
                            bac.setAttribute('style', `background-color:${localStorage.BackGroundColor};background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-image: url(${event.target.result.name});background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize};  background-attachment:fixed;`)
                            addtarge.setAttribute('style', `background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-color: ${localStorage.BackGroundColor}${BackimagePrintPlanNum};background-repeat: no-repeat;background-size:cover;display: flex;align-items: center;justify-content: center;position: fixed;pointer-events: none;z-index:0;height:100%;width:100%; `);
                        }else if(localStorage.printToBBS==="1"){
                            BBSmsgBack.setAttribute('style', `background-position:${(()=>{if(localStorage.centerPosition==="none"){return ""}else{return "center"}})()}${Backleft} ${BackTop} ;  background-attachment:fixed; background-image: url(${event.target.result.name});background-repeat: no-repeat; background-size:${localHightSize} ${localWidthSize};background-attachment:fixed;`)
                            Fromer.setAttribute('style', `background-color: ${localStorage.BackGroundColor}${BackimagePrintPlanNum};`);
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
            document.querySelector("#widthsize").disabled=true;
            document.querySelector("#heightsize").disabled=true;
        }else{
            document.querySelector("#widthsize").disabled=false;
            document.querySelector("#heightsize").disabled=false;
        }
        if (!document.querySelector("#center").checked){
            document.querySelector("#topp").disabled=false;
            document.querySelector("#leftt").disabled=false;
        }else{
            document.querySelector("#topp").disabled=true;
            document.querySelector("#leftt").disabled=true;
        }
    }
    function addsett(leange1,leange2) {//添加设置项目
        let BoxPrintCheckOn;
        if(localStorage.BoxPrint!=="no"){BoxPrintCheckOn='checked'}else{BoxPrintCheckOn=''}
        let oldaddtarge=document.querySelector("#navbar-collapse")
        let addbott="<button class='fuckyou'>插件设置</button>"
        let addNetMsg=`<div id="MegNew" style="display: none;">
        <div style="z-index:10001; position: sticky ;height:28px;width:100%;top: 0;left:0;background-color: rgba(36,70,88,0.4);backdrop-filter: blur(5px);">
    <button id="Msgexit" class="fuckyou3">X</button><span>反馈方式&更新日志</span>
    </div>
    <div style="z-index:10001; position: sticky ;height:auto;width:100%;right: 0;left:0;top: 30px;backdrop-filter: blur(5px);font-size: 13px">
    <p style="margin: 0">使用指南：<a href="https://boyshelpboys.com/thread-2012.htm#tutorial">点击进入</a><br>可以通过以下方式向我反馈：<br> 在此链接下面回复BUG（推荐）：<a href="https://boyshelpboys.com/thread-2012.htm">BHB聊天室背景更换</a><br>前往GitHub仓库提交issue：<a href="https://github.com/M27-IAR/BHB_BbsBackGroundSetting/issues">GitHub仓库</a><br>私信我修改（不推荐）<a href="https://boyshelpboys.com/user-139020.htm">点击我进入后点击“发私信按钮”</a><br>
    脚本作者：M27IAR&nbsp;&nbsp;&nbsp;完整更新日志请前往以下帖子查看：<a href="https://boyshelpboys.com/thread-2012.htm">BHB聊天室背景更换</a><br>
    <strong>当前版本为v3.1.0.1</strong><br><span id="WebV">服务器端最新版本为：v </span><div style="border-bottom: white 3px solid;height: 0;width: 100%"></div>
    </p>
</div>
<div id="UpdateLog">

</div>
</div>`
        let addmain=`<div id="localsett" >
<div>
<div style="position: sticky ;height:28px;width:100%;top: 0;left:0;background-color: rgba(36,70,88,0.4);backdrop-filter: blur(5px);">
    <button id="exit" class="fuckyou3">X</button><span>插件设置</span>
    </div>
<div>
<span>若出现无法正常使用的情况请清理浏览器缓存后重试</span><button class='fuckyou' style="padding: 0.125rem 0" id='newmsg'>反馈方式&更新日志</button><br>
<input type="checkbox" style="user-select:none;-moz-user-select: none; " name="MsgLightCheck" id="MsgLightCheck" ${(()=>{if(localStorage.MsgLightCheckX==="true"){return "checked"}else{return ""}})()}><label for="MsgLightCheck">启用指示灯</label>
<input style="user-select:none;-moz-user-select: none;" class="SettiingInput" type="checkbox" ${leadermanhide} value="leadermanhide" name="leadermanhide" id="leadermanhide"><label for="leadermanhide">${leange1[1]}</label>
<input style="user-select:none;-moz-user-select: none;" class="SettiingInput" type="checkbox" ${Scrollstylex} name="ScrollSett" id="ScrollSett">${leange2[0]}</input><br>
<div id="PrintPicCheck" style="width:100%;background-color: rgba(36,70,88,0.4);border:1px solid aqua;display: flex;">
<div style="width:5%;${(()=>{if(localStorage.PrintPicplanChk!=="false"){return 'transform: rotate(90deg);'}else{return 'transform: rotate(0deg);'}})()};" id="UnderIcon1">></div><input style="display:none;" ${(function (){if (localStorage.PrintPicplanChk!=="false"){return "checked";}else{return "";}})()} type="checkbox" class="SettiingInput" name="PrintPicplan" id="PrintPicplan" value="PrintPicplan"><label id="PrintPicplanLabel" for="PrintPicplan" style="margin:0;user-select:none;-moz-user-select:none;width: 90%;">图像背景</label>
</div>
<div id="PrintPicBox" style="${(()=>{if (localStorage.PrintPicplanChk!=="false"){return "display:block;";}else{return "display:none;";}})()}">
<input  ${(()=>{if (localStorage.PrintPicOpen!=="false"){return "checked";}else{return "";}})()} type="checkbox" class="SettiingInput" name="PrintPic" id="PrintPic" value="PrintPicplan"><label id="PrintPicplanLabel" for="PrintPic" style="margin:0;user-select:none;-moz-user-select:none;width: auto;">启用图像背景</label><span>&nbsp;背景色</span><input class="SettiingInput ColorSettinr" type="color" id="BackGroundColor" value="${localStorage.BackGroundColor}"><br>
<input class="SettiingInput" type='radio'  name='picloadsele' ${localpiclod} id='localpicon' value="localpicon"  width='100px'><label style="user-select:none;-moz-user-select:none;" for="localpicon">${leange1[10]}</label>
<input class="SettiingInput" type='file' id='webimgsrc' accept='image/*' style='width:50%;'><br> 
<input class="SettiingInput" type='radio' ${webpiclod} name='picloadsele' id='webpicon'  width='100px' value="webpicon"> <label style="user-select:none;-moz-user-select:none;" for="webpicon">${leange1[9]}</label>
<span>${leange1[0]}</span><input class="SettiingInput" type='text'  value='${localStorage.webimgsrc}' name='' id='localimgsrc' style="width:50%;"><br>
<input class="SettiingInput" type='radio' value='1' ${PrintToBackground} name='baklocal' id='printToWebback' value="printToWebback"  width='100px'><label style="user-select:none;-moz-user-select:none;" for="printToWebback">${leange1[13]}</label>
<input class="SettiingInput" type='radio' value='printToBBS' name='baklocal' ${PrintToBBSGround} id='printToBBS'  width='100px'><label style="user-select:none;-moz-user-select:none;" for="printToBBS">${leange1[14]}</label><br>
<span>背景图片透明度</span><input class="SettiingInput RangeSetting" type="range" min="0" max="1" step="0.01" value="${localStorage.canseenunber}" id="notseenumber"><br>
</div>
<hr  id="MsgUrlAddLine">
<div id="IdPrintCheck" style="width:100%;background-color: rgba(36,70,88,0.4);border:1px solid aqua;display: flex;">
<div style="width:5%;${(()=>{if(localStorage.IdPrintCheck!=="false"){return 'transform: rotate(90deg);'}else{return 'transform: rotate(0deg);'}})()};" id="UnderIcon2">></div><input style="display:none;" type="checkbox" class="SettiingInput" name="OpneIDPrint" id="OpenIdPrint" ${(function (){if (localStorage.IdPrintCheck!=="false"){return "checked";}else{return "";}})()}><label style="user-select:none;-moz-user-select:none;width: 90%;margin:0;" for="OpenIdPrint">Id名称渲染</label>
</div>
<hr>
<div id="IdPrintBox" style="${(()=>{if (localStorage.IdPrintCheck!=="false"){return "display:block;";}else{return "display:none;";}})()}">
<span>${leange1[2]}</span><input class="SettiingInput" type='text' onblur='if(!((/[(0-9)]/).test(value)))value=18' value='${localStorage.NameFontSize}' name='size' id='size' size="5"><br>
<span>${leange1[3]}</span>
<input class="SettiingInput ColorSettinr" type="color" id="fontcolor" value="${localStorage.LocalFontColor}"><input class="SettiingInput ColorSettinr"  type="color" id="fontcolorsec" value="${localStorage.LocalFontColorsec}"><br>
<span>${leange1[4]}</span><input class="SettiingInput" type="text" onblur='if(!((/[(0-9)]/).test(value)))value=1' size="5"  value="${localStorage.BorderTextSize}"  name="BorderText" id="BorderText"><br>
</div>
<hr>
<div id="PrintPlanCheck" style="width:100%;background-color: rgba(36,70,88,0.4);border:1px solid aqua;display: flex;">
<div style="width:5%;${(()=>{if(localStorage.PrintPlanCheck!=="false"){return 'transform: rotate(90deg);'}else{return 'transform: rotate(0deg);'}})()};" id="UnderIcon3">></div><input style="display:none;" type="checkbox" class="SettiingInput" name="PrintPlan" id="PrintPlan" ${(function (){if (localStorage.PrintPlanCheck!=="false"){return "checked";}else{return "";}})()}><label style="user-select:none;-moz-user-select:none;width: 90%;margin:0;" for="PrintPlan">渲染定位</label>
</div>
<div id="PrintPlanBox" style="${(()=>{if (localStorage.PrintPlanCheck!=="false"){return "display:block;";}else{return "display:none;";}})()}">
<span>图像渲染方式</span><select style="padding:0;" name="selectBox" id="selectBox"><option value="default" ${(function(){if(BackPrintSelectBox==="default"){return "selected";}})()}>自定义</option><option value="PicFirst" ${(function(){if(BackPrintSelectBox==="PicFirst"){return "selected";}})()}>图像尺寸优先</option><option value="WebFirst" ${(function(){if(BackPrintSelectBox==="WebFirst"){return "selected";}})()}>网站尺寸优先</option></select>
<input class="SettiingInput" type="checkbox" id="center" ${(function (){if (localStorage.centerPosition!=="none"){return "checked";}else{return "";}})()}  value="center"><label for="center">居中渲染</label><br>
<span>${leange1[5]}</span>
<input class="SettiingInput" type='text'  oninput='if(!((/[(0-9)/-]/).test(value)))value=0' value='${localStorage.top}' name='topp' id='topp' size="5"> 
<span>${leange1[6]}</span>
<input class="SettiingInput" type='text' oninput='if(!((/[(0-9)/-]/).test(value)))value=0' value='${localStorage.left}' name='leftt' id='leftt' size="5"><br> <span>${leange1[7]}</span>
<input class="SettiingInput" type='text' onblur='if(!((/[(0-9)]/).test(value))&&value!=="auto")value=100' min='0'  value='${localStorage.widthsize}' name='' id='widthsize' size='5'><br>
<span>${leange1[8]}</span><input class="SettiingInput" type='text' onblur='if(!((/[(0-9)]/).test(value))&&value!=="auto")value=100'  min='0' value=${localStorage.heightsize} name='' id='heightsize' size="5"><hr>
</div>
<hr>
<div id="PrintVisableCheck" style="width:100%;background-color: rgba(36,70,88,0.4);border:1px solid aqua;display: flex;">
<div style="width:5%;${(()=>{if(localStorage.PrintVisable!=="false"){return 'transform: rotate(90deg);'}else{return 'transform: rotate(0deg);'}})()};" id="UnderIcon4">></div><input style="display:none;" type="checkbox" class="SettiingInput" name="PrintVisable" id="PrintVisable" ${(function (){if (localStorage.PrintVisable!=="false"){return "checked";}else{return "";}})()}><label style="user-select:none;-moz-user-select:none;width: 90%;margin:0;" for="PrintVisable">特殊效果</label>
</div>
<div id="BoxPrintSet" style="${(()=>{if (localStorage.PrintVisable!=="false"){return "display:block;";}else{return "display:none;";}})()}">
<input class="SettiingInput" type="checkbox" name="BoxPrintEn" id="BoxPrintEn" value="BoxPrintEn" ${BoxPrintCheckOn}><label for="BoxPrintEn">启用方块特效</label><br>
<span>背景方格大小</span><input class="SettiingInput RangeSetting" type="range" min="50" max="150" step="1" onchange='localStorage.BoxSize=value' value="${localStorage.BoxSize}" id="BoxSizeNum"><br>
<span>边框线设置</span><input class="SettiingInput ColorSettinr" type="color" id="BoxBorderColor" onchange="localStorage.BoxBorderColor=value" value="${localStorage.BoxBorderColor}"><input class="SettiingInput RangeSetting" type="range" min="0" max="99" step="1" onchange='localStorage.BoxBorderCansee=value' value="${localStorage.BoxBorderCansee}" id="BoxPrintCansee"><br>
<span>方片颜色</span><input class="SettiingInput ColorSettinr" type="color" id="BoxColor" onchange="localStorage.BoxColor=value" value="${localStorage.BoxColor}">
</div>
<hr>
<div id="PrintPlanCheck" style="width:100%;background-color: rgba(36,70,88,0.4);border:1px solid aqua;display: flex;">
<div style="width:5%;${(()=>{if(localStorage.TransparencySet!=="false"){return 'transform: rotate(90deg);'}else{return 'transform: rotate(0deg);'}})()};" id="UnderIcon5">></div><input style="display:none;" type="checkbox" class="SettiingInput" name="TransparencySet" id="TransparencySet" ${(function (){if (localStorage.TransparencySet!=="false"){return "checked";}else{return "";}})()}><label style="user-select:none;-moz-user-select:none;width: 90%;margin:0;" for="TransparencySet">透明度设置</label>
</div>
<div id="cantseegive" style="${(()=>{if (localStorage.TransparencySet!=="false"){return "display:block;";}else{return "display:none;";}})()}">
<span>${leange2[1]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum1" value="${Math.ceil((Number("0x"+localStorage.CantSeeset1).toString(10))*100/255)}"><input class="SettiingInput  ColorSettinr" type="color" id="Msgcolor1" value="${localStorage.CantSeeColor1}"><br>
<span style="display: none">${leange2[2]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum2" style="display: none" value="${Math.ceil((Number("0x"+localStorage.CantSeeset3).toString(10))*100/255)}"><input style="display: none" class="SettiingInput ColorSettinr" type="color" id="Msgcolor2" value="${localStorage.CantSeeColor3}">
<span>${leange2[3]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum3" value="${Math.ceil((Number("0x"+localStorage.CantSeeset3).toString(10))*100/255)}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor3" value="${localStorage.CantSeeColor3}"><br>
<span>${leange2[4]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum4" value="${Math.ceil((Number("0x"+localStorage.CantSeeset4).toString(10))*100/255)}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor4" value="${localStorage.CantSeeColor4}"><br>
<span>${leange2[5]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum5" value="${Math.ceil((Number("0x"+localStorage.CantSeeset5).toString(10))*100/255)}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor5" value="${localStorage.CantSeeColor5}"><br>
<span>${leange2[6]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum6" value="${Math.ceil((Number("0x"+localStorage.CantSeeset6).toString(10))*100/255)}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor6" value="${localStorage.CantSeeColor6}"><br>
<span>${leange2[7]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum7" value="${Math.ceil((Number("0x"+localStorage.CantSeeset7).toString(10))*100/255)}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor7" value="${localStorage.CantSeeColor7}"><br>
<span>${leange2[8]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum8" value="${Math.ceil((Number("0x"+localStorage.CantSeeset8).toString(10))*100/255)}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor8" value="${localStorage.CantSeeColor8}"><br>
<span>${leange2[9]}</span><input class="SettiingInput RangeSetting" type="range" id="MsgSeeNum9" value="${Math.ceil((Number("0x"+localStorage.CantSeeset9).toString(10))*100/255)}"><input class="SettiingInput ColorSettinr" type="color" id="Msgcolor9" value="${localStorage.CantSeeColor9}"><br>
<br><button id="reall"  class="fuckyou2">重置颜色|透明度配置</button></div>
<hr>
<button class='fuckyou2' id='save' type="submit">提交</button>
</div>`

        oldaddtarge.insertAdjacentHTML("afterbegin",addbott);
        bac.insertAdjacentHTML("afterbegin",addmain);
        bac.insertAdjacentHTML("afterbegin",addNetMsg)

        let addbutt=document.querySelector("#navbar-collapse > button");
        let adddiv=document.querySelector("#localsett");
        let addaddNetMsg=document.querySelector("#MegNew");
        checkPrint();
        let printSelcetBox=document.querySelector("#selectBox");

        printSelcetBox.addEventListener("change",function(){checkPrint();})
        document.querySelector("#center").addEventListener("click",function(){checkPrint();})
        adddiv.setAttribute('style', 'position: fixed;left:50%;top:50%;overflow:auto; border-radius: 5px;transform: translate(-50%, -50%);width: 330px;height: 550px;border: 1px solid aqua;z-index:10000;display:none;background-color:rgba(40,64,120,0.7);color:#f0f5f9;text-shadow:0 1px 0.5px #32353E,0 -1px 0.5px #32353E,1px 0 0.5px #32353E,-1px 0 0.5px #32353E;')

        let timestamp = new Date().getTime();
        addaddNetMsg.setAttribute('style', `position: fixed;left:50%;top:50%;overflow:auto; border-radius: 5px;transform: translate(-50%, -50%);width: 330px;height: 550px;border: 1px solid aqua;z-index:10000;display:none;background-color:rgba(40,64,120,0.7);color:#f0f5f9;text-shadow:0 1px 0.5px #32353E,0 -1px 0.5px #32353E,1px 0 0.5px #32353E,-1px 0 0.5px #32353E;`)
        $.ajax({//更新日志弹出判断|在线服务器版本号比对提醒
            type:"GET",
            url:`https://m27iarsite.cc/package.json?timestamp=${timestamp}`,
            dataType:"json",
            cache:false,
            success:function(data){
                document.querySelector("#UpdateLog").innerHTML=data.description;
                if(!localStorage.version||localStorage.version!== data.version.toString()){//更新后修改部分选项，理论上不会影响用户
                    document.querySelector("#WebV").innerHTML=`服务器端最新版本为：v${data.version.toString()}，Greayfork请前往以下站点下载更新：<a href="https://greasyfork.dpdns.org/zh-CN/scripts/519010-bhb%E8%81%8A%E5%A4%A9%E5%AE%A4%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E6%9B%B4%E6%8D%A2-%E5%B7%B2%E5%85%A8%E5%B1%80%E5%85%BC%E5%AE%B9">链接1</a><a href="https://greasyfork.org/zh-CN/scripts/519010-bhb%E8%81%8A%E5%A4%A9%E5%AE%A4%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E6%9B%B4%E6%8D%A2-%E5%B7%B2%E5%85%A8%E5%B1%80%E5%85%BC%E5%AE%B9">链接2</a><br>OpenUserJS请前往以下站点更新：<a href="https://openuserjs.org/scripts/M27IAR/BHB%E8%81%8A%E5%A4%A9%E5%AE%A4%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E6%9B%B4%E6%8D%A2%EF%BC%88%E5%B7%B2%E5%85%A8%E5%B1%80%E5%85%BC%E5%AE%B9%EF%BC%89">OpenUserJS链接</a>`
                }else{document.querySelector("#WebV").innerHTML=`服务器端最新版本为：v${data.version.toString()}`}
                addaddNetMsg.setAttribute('style', `position: fixed;left:50%;top:50%;overflow:auto; border-radius: 5px;transform: translate(-50%, -50%);width: 330px;height: 550px;border: 1px solid aqua;z-index:10000;display:${(()=>{if(!localStorage.version||localStorage.version!== data.version.toString()||FirstTime){return "block"}else{return "none"}})()};background-color:rgba(40,64,120,0.7);color:#f0f5f9;text-shadow:0 1px 0.5px #32353E,0 -1px 0.5px #32353E,1px 0 0.5px #32353E,-1px 0 0.5px #32353E;`)
            },
            error:function(){document.querySelector("#WebV").innerHTML="获取服务器数据失败"}
        })

        addbutt.addEventListener("click",function(){//开关设置栏1
            let adddiv=document.querySelector("#localsett")
            if (adddiv.style.display==="block"){
                adddiv.style.display="none";
            }else{
                adddiv.style.display="block";
            }
        });

        document.querySelector("#newmsg").addEventListener("click",function(){
            let addaddNetMsg=document.querySelector("#MegNew");
            if (addaddNetMsg.style.display==="block"){
                addaddNetMsg.style.display="none";
                adddiv.style.display="block";
            }else{
                addaddNetMsg.style.display="block";
                adddiv.style.display="none";
            }
        })
        document.querySelector("#Msgexit").addEventListener("click",function(){{addaddNetMsg.style.display="none";adddiv.style.display="block";}})


        document.querySelector("#OpenIdPrint").addEventListener("click",function(e){
            if (e.target.checked){
                document.querySelector("#IdPrintBox").style.display="block";
                document.querySelector("#UnderIcon2").style.transform="rotate(90deg)";
            }else{
                document.querySelector("#IdPrintBox").style.display="none";
                document.querySelector("#UnderIcon2").style.transform="rotate(0deg)";
            }
        })
        document.querySelector("#PrintPicplan").addEventListener("click",function(e) {
            if (e.target.checked){
                document.querySelector("#PrintPicBox").style.display="block";
                document.querySelector("#UnderIcon1").style.transform="rotate(90deg)";
            }else{
                document.querySelector("#PrintPicBox").style.display="none";
                document.querySelector("#UnderIcon1").style.transform="rotate(0deg)";
            }
        })
        document.querySelector("#PrintPlan").addEventListener("click",function(e) {
            if (e.target.checked){
                document.querySelector("#PrintPlanBox").style.display="block";
                document.querySelector("#UnderIcon3").style.transform="rotate(90deg)";
            }else{
                document.querySelector("#PrintPlanBox").style.display="none";
                document.querySelector("#UnderIcon3").style.transform="rotate(0deg)";
            }
        })
        document.querySelector("#PrintVisable").addEventListener("click",function(e) {
            if (e.target.checked){
                document.querySelector("#BoxPrintSet").style.display="block";
                document.querySelector("#UnderIcon4").style.transform="rotate(90deg)";
            }else{
                document.querySelector("#BoxPrintSet").style.display="none";
                document.querySelector("#UnderIcon4").style.transform="rotate(0deg)";
            }
        })
        document.querySelector("#TransparencySet").addEventListener("click",function(e) {
            if (e.target.checked){
                document.querySelector("#cantseegive").style.display="block";
                document.querySelector("#UnderIcon5").style.transform="rotate(90deg)";
            }else{
                document.querySelector("#cantseegive").style.display="none";
                document.querySelector("#UnderIcon5").style.transform="rotate(0deg)";
            }
        })
        document.querySelector("#BoxPrintEn").addEventListener("click",(e)=> {
            if (e.target.checked){
                localStorage.setItem("BoxPrint","yes");
            }else{
                localStorage.setItem("BoxPrint","no");
            }
        })

        let ScrollSettButt=document.querySelector("#ScrollSett")
        ScrollSettButt.addEventListener("click",function () {SetScroll()})
        let exitbutt=document.querySelector("#exit")//设置的关闭按钮1
        exitbutt.addEventListener("click",function(){adddiv.style.display="none";})//设置的关闭按钮实现1

        let localget=document.querySelector("#save");
        localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
    }

    function ResetSeenum() {//重置透明度
        localStorage.setItem("CantSeeset1","00");
        localStorage.setItem("CantSeeset3","00");
        localStorage.setItem("CantSeeset4","20");
        localStorage.setItem("CantSeeset5","20");
        localStorage.setItem("CantSeeset6","FF");
        localStorage.setItem("CantSeeset7","20");
        localStorage.setItem("CantSeeset8","50");
        localStorage.setItem("CantSeeset9","20");
        localStorage.setItem("CantSeeColor1","#2b2c40");
        localStorage.setItem("CantSeeColor3","#2b2c40");
        localStorage.setItem("CantSeeColor4","#2b2c40");
        localStorage.setItem("CantSeeColor5","#2b2c40");
        localStorage.setItem("CantSeeColor6","#2b2c40");
        localStorage.setItem("CantSeeColor7","#2b2c40");
        localStorage.setItem("CantSeeColor8","#66ccff");
        localStorage.setItem("CantSeeColor9","#2b2c40");
    }
    let nedAddStyle=document.createTextNode(`*{scrollbar-width:none !important; } @media(min-width: 768px) {::-webkit-scrollbar {width: 0px; height: 6px;border-radius: 20px;}::-webkit-scrollbar-track { background: var(--bs-body-bg);}::-webkit-scrollbar-thumb {background: var(--bs-secondary);border-radius: 20px;}::-webkit-scrollbar-thumb:hover {background: var(--bs-primary);}::-webkit-scrollbar-thumb:focus, ::-webkit-scrollbar-thumb:active {background: var(--bs-primary-active);}}`)
    let AddStylesec=document.createTextNode(`@media(min-width: 768px) {::-webkit-scrollbar {width: 3px; height: 6px;border-radius: 20px;}::-webkit-scrollbar-track { background: var(--bs-body-bg);}::-webkit-scrollbar-thumb {background: var(--bs-secondary);border-radius: 20px;}::-webkit-scrollbar-thumb:hover {background: var(--bs-primary);}::-webkit-scrollbar-thumb:focus, ::-webkit-scrollbar-thumb:active {background: var(--bs-primary-active);}} `)

    function ScrollHidden() {//滚动条调整
        let NeedFixStyle=document.querySelector("head");//修改滚动条状态
        NeedFixStyle.insertAdjacentHTML("beforeend",'<style id="style2"></style>');
        let FixStyle=document.querySelector("#style2")
        if (localStorage.scrollstyle==="1"){
            FixStyle.appendChild(nedAddStyle);
        }else{
            FixStyle.appendChild(AddStylesec);
        }
    }
    function SetScroll() {//滚动条样式调整
        let FixStyle=document.querySelector("#style2")
        if (FixStyle.innerHTML==""){
            localStorage.setItem("scrollstyle","1")
            FixStyle.appendChild(nedAddStyle);
        }else{
            localStorage.setItem("scrollstyle","0")
            FixStyle.innerHTML=""
        }
    }
    function leftContentContent() {//左侧栏交互修改
        let TrackerLine=document.querySelectorAll("#layout-menu > nav > ul>li");
        for (let i=0; i<TrackerLine.length; i++) {
            if(i!==TrackerLine.length-1){
            }
            TrackerLine[i].addEventListener('mouseenter', ()=> {
                TrackerLine[i].style.backgroundColor=`${ContentColor}90`;
                TrackerLine[i].style.color="#ffffff";
                TrackerLine[i].querySelector("a").style.color="#ffffff";
            })
            TrackerLine[i].addEventListener('mouseleave', ()=> {
                TrackerLine[i].style.backgroundColor="#00000000";
                TrackerLine[i].querySelector("a").style.color="#a3a4cc"
            })
            TrackerLine[i].addEventListener('click', ()=> {
                TrackerLine[i].style.backgroundColor=`${ContentColor}`;
                TrackerLine[i].style.color="#ffffff";
            })
        }
    }
    function rePrint(webWidth,webHeight) {//绘制启用方格特效时所需方格
        if(localStorage.BoxPrint==="yes"){
            let RGBRed=Number("0x"+localStorage.BoxColor.substring(1,3)),RGBGreen=Number("0x"+localStorage.BoxColor.substring(3,5)),RGBBlue=Number("0x"+localStorage.BoxColor.substring(5))
            printNunber=(Math.ceil((webHeight*1.2)/DIVboxsize))*(Math.ceil(webWidth/DIVboxsize));
            DIVmax.innerHTML="";
            for(let i=0;i<=printNunber;i++){
                let ansRandom=Math.floor((Math.random()*40+10));
                if(ansRandom===0){ansRandom="";}
                let addDIV=`<div id="PrintDIV${i}" class="M27flexDivSet"></div>`
                DIVmax.insertAdjacentHTML("beforeend",addDIV);
                let strDIV=document.querySelector(`#PrintDIV${i}`);
                strDIV.setAttribute("style",`background-color: rgba(${RGBRed},${RGBGreen},${RGBBlue},0.${ansRandom});order: ${i};`);

            }
        }else{
        }
    }
    function changeBackground(){//设置方格定时刷新效果
        let j=0,x=100
        let RGBRed=Number("0x"+localStorage.BoxColor.substring(1,3)),RGBGreen=Number("0x"+localStorage.BoxColor.substring(3,5)),RGBBlue=Number("0x"+localStorage.BoxColor.substring(5))

        for(let i=0;i<=Math.ceil(printNunber*0.5);i++){

            setTimeout(function(){
                let id=Math.floor((Math.random()*printNunber+1))
                if(typeof (arr[i])=="undefined"){
                    arr[i]=id;
                }else{
                    for (let j=0;j<arr[i].length;j++){
                        if(arr[j]===id){
                            while(arr[j]!==id){
                                id=Math.floor((Math.random()*(printNunber+1)))
                            }
                            arr[j]=id;
                        }else{
                            arr[j]=id;
                        }
                    }
                }
                let strDIV=document.querySelector(`#PrintDIV${id}`);
                strDIV.setAttribute("style",`background-color: rgba(${RGBRed},${RGBGreen},${RGBBlue},0.${Math.floor((Math.random()*60+10))});order: ${id};`)

            },x)
            j++
            if(j===10){
                x=x+100
                j=0
            }

        }

    }
    //数据库创建
    let request = indexedDB.open('databaseName', 6);
    // 处理数据库升级
    request.onupgradeneeded = function(event) {
        let db = event.target.result;
        // 创建对象存储（表）并设置主键
        if (!db.objectStoreNames.contains("storeName")) {
            // 数据库不存在，可以在此处创建对象存储空间
            let objectStore = db.createObjectStore("storeName", { keyPath: "id" });
            objectStore.createIndex('fieldName', 'fieldName', { unique: false });
        }
        if (!db.objectStoreNames.contains("EmoDB")) {
            // 数据库不存在，可以在此处创建对象存储空间
            let objectStoreSec = db.createObjectStore('EmoDB', { keyPath: 'id' });
            // 创建索引
            objectStoreSec.createIndex('fieldName', 'fieldName', { unique: false });
        }

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
    };
    // 错误处理
    request.onerror = function(event) {
        console.error('Database error:', event.target.error);
    };
    //初始值部分结束
    let UserListCompCheck=true;
    let TimeOutSet=3000;//超时设定
    let WebGetJSON;//获取的在线列表
    let OnliceUserNum=0;//在线人数计数
    let OnlineUserListJSON;//本地在线列表
    let OldOnlineUserListJSON=[];//历史在线列表，用于比对
    function GetOnliceAndPrint() {//在线用户相关修改
        let ListJsonUserName
        let ListJson
        let UploadCheck=false;
        OnlineUserListJSON=[];
        OnliceUserNum=0;
        for (let i=0;i<WebGetJSON.length;i++){//插入用户数据
            if(WebGetJSON[i][Object.keys(WebGetJSON[i])[0]].isOnline===true){
                OnlineUserListJSON.splice(0,0,WebGetJSON[i]);
            }
        }
        if(OldOnlineUserListJSON.length!==OnlineUserListJSON.length){
            UploadCheck=true
        }else{
            for(let i=0;i<OnlineUserListJSON.length;i++){
                if(Object.keys(OldOnlineUserListJSON[i]).toString()!==Object.keys(OnlineUserListJSON[i]).toString()){
                    UploadCheck=true;
                    break;
                }
            }
        }
        //更新则写入
        if(OnlineUserListJSON.length>0&&UploadCheck){//验证是否为空
            let AddOnLice=document.querySelector("#M27CHANGE");
            AddOnLice.innerHTML=""
            for (let i=0;i<OnlineUserListJSON.length;i++){//插入用户数据
                OnliceUserNum+=1//在线人数计数器
                ListJsonUserName=Object.keys(OnlineUserListJSON[i])//人员ID
                ListJson=OnlineUserListJSON[i]//人员信息
                let UID=ListJson[ListJsonUserName].avatar.substring(ListJson[ListJsonUserName].avatar.lastIndexOf("/")+1,ListJson[ListJsonUserName].avatar.lastIndexOf("."))
                //添加显示信息
                AddOnLice.insertAdjacentHTML("beforeend",`<div class="online-user-item" id="M27-${ListJsonUserName}">
                    <div class="avatar">
                        <img data-UID="${UID}" src="${ListJson[ListJsonUserName].avatar}" alt="${ListJsonUserName}" onerror="this.src='./plugin/msto_chat/assets/default-avatar.png'">
                    </div>
                    <div class="user-info">
                        <h6 class="username">${ListJsonUserName}</h6>
                        <span style="font-size: 10px">最后在线时间：${(new Date((OnlineUserListJSON[i][Object.keys(OnlineUserListJSON[i])[0]].lastActive)*1000)).toString().slice(16,25)}</span>
                    </div>
                    </div>
                `)
            }
        }else{
            for(let i=0;i<OldOnlineUserListJSON.length;i++){//写入时间
                OnliceUserNum+=1//在线人数计数器
                ListJsonUserName=Object.keys(OldOnlineUserListJSON[i])//人员ID
                ListJson=OldOnlineUserListJSON[i]//人员信息
                //更新在线时间
                document.querySelector(`#M27-${ListJsonUserName}>div.user-info>span`).innerHTML=`最后在线时间：${(new Date((OnlineUserListJSON[i][Object.keys(OnlineUserListJSON[i])[0]].lastActive)*1000)).toString().slice(16,25)}`
            }
        }
        document.querySelector('#M27UserNun').innerText=OnliceUserNum
            OldOnlineUserListJSON=OnlineUserListJSON//更新旧数组
    }
    function GetServerStation(MsgLight,MsgPrint) {//信号灯|在线用户部分数据修改
        let nowTime,Time;
        if(UserListCompCheck){
            UserListCompCheck=false;
        $.ajax({//获取服务器状态
                type:"GET",
                url: `https://boyshelpboys.com/plugin/msto_chat/route/app/ajax.php?c=msg&type=signal`,
                async:true,
                timeout:TimeOutSet,
                beforeSend:function(){nowTime=Date.now();},
                complete:function(date,xhr){
                    Time=Date.now();
                    let ReportCode=date.status;
                    if((Time-nowTime)>=TimeOutSet){
                        MsgLight.style.backgroundColor="red";
                        MsgLight.style.boxShadow= "0px 1px 10px #F60303,0px -1px 10px #F60303,1px 0px 10px #F60303,-1px 0px 10px #F60303";
                        MsgLight.style.border="1px solid #F60303";
                        MsgLight.className="linkBadWeb";
                        MsgPrint.innerHTML=`当前收信延迟：${Time-nowTime}<br>收信延迟过高`;
                        TimeOutSet=TimeOutSet+1000;
                        UserListCompCheck=true;
                    }else if(xhr==='success'&&(Time-nowTime>1000)){
                        MsgLight.style.boxShadow= "0px 1px 10px #F6D603,1px 0px 10px #F6D603,-1px 0px 10px #F6D603,0px -1px 10px #F6D603";
                        MsgLight.style.backgroundColor="yellow";
                        MsgLight.style.border="1px solid #F6D603";
                        MsgLight.className="linkOutTime";
                        MsgPrint.innerHTML=`当前收信延迟：${Time-nowTime}<br>网络状态一般`;
                        WebGetJSON=JSON.parse(date.responseText).active_users;
                        GetOnliceAndPrint();
                        TimeOutSet=3000;
                        UserListCompCheck=true;
                    }else if (ReportCode===200&&xhr==="success"){
                        MsgLight.style.backgroundColor="green";
                        MsgLight.style.boxShadow= "0px 1px 10px #77F602,0px -1px 10px #77F602,-1px 0px 10px #77F602,1px 0px 10px #77F602";
                        MsgLight.style.border="1px solid #77F602";
                        MsgLight.className="linkOpen";
                        MsgPrint.innerHTML=`当前收信延迟：${Time-nowTime}<br>网络状态良好`;
                        WebGetJSON=JSON.parse(date.responseText).active_users;
                        GetOnliceAndPrint()
                        TimeOutSet=3000;
                        UserListCompCheck=true;
                    }else if(ReportCode>=400||ReportCode>=500||xhr!=="success"){
                        MsgLight.style.backgroundColor="red";
                        MsgLight.style.boxShadow= "0px 1px 10px #F60303,0px -1px 10px #F60303,1px 0px 10px #F60303,-1px 0px 10px #F60303";
                        MsgLight.style.border="1px solid #F60303";
                        MsgLight.className="linkBadWeb";
                        MsgPrint.innerHTML=`当前收信延迟：${Time-nowTime}<br>但无法正确链接到服务器`;
                    }
                },
                error: function (){
                    MsgLight.style.backgroundColor="red";
                    MsgLight.style.boxShadow= "0px 1px 10px #F60303,0px -1px 10px #F60303,1px 0px 10px #F60303,-1px 0px 10px #F60303";
                    MsgLight.style.border="1px solid red";
                    MsgLight.className="linkBadWeb";
                    MsgPrint.innerHTML=`当前收信延迟：${Time-nowTime}<br>但无法正确链接到服务器`;
                    UserListCompCheck=true;
                },
            })
        }else{
        }
    }
    function MesWebTestPlan(MsgLight,MsgPrint){//信号灯数据获取
        if(document.hasFocus()||localStorage.M27NewBBGPrint==="true"){
            GetServerStation(MsgLight,MsgPrint)
        }else{}
    }
    let PicUrl=[]
    let message;//站长的特殊链接处理
    function renderImage(url, alt = '') {//图片处理
        return `<img src="${url}" alt="${alt}" referrerpolicy="no-referrer" class="chat-image" style="width: 7.5rem;object-fit: contain;">`;
    }
    const mediaPatterns = [
        // 图片
        {
            regex: /https?:\/\/[^\s<>"']+?\.(?:jpg|jpeg|gif|png|webp|avif)(?:@[^@\s<>"']*)?/gi,
            handler: url => {
                if (!message.includes(`[img]${url}[/img]`)) {
                    // 清理B站图片链接中的参数
                    url = url.replace(/@.*$/, '');
                    return renderImage(url);
                }
                return url;
            }
        },
        // 视频
        {
            regex: /https?:\/\/[^\s<>"']+?\.(?:mp4|webm|ogg)(?:\?[^\s<>"']*)?/gi,
            handler: url => {return `<video controls src="${url}" preload="none" style="max-width:18.75rem; border-radius:5px; margin:5px 0;"></video>`;
            }
        },
        // 音频
        {
            regex: /https?:\/\/[^\s<>"']+?\.(?:mp3|wav|m4a)(?:\?[^\s<>"']*)?/gi,
            handler: url => {return `<audio controls src="${url}" preload="none" style="width:15.625rem; margin:5px 0;"></audio>`}

        },
        // B站视频
        {
            regex: /https?:\/\/(?:www\.)?bilibili\.com\/video\/(BV[\w]+)[^\s<>"']*/g,
            handler: (match, bvid) => {return `<iframe src="//player.bilibili.com/player.html?&bvid=${bvid}&high_quality=1&autoplay=0" allowfullscreen="allowfullscreen" style="width:18.75rem; height:12.5rem; border-radius:5px; margin:5px 0;"></iframe>`}
        },
        // 网易云音乐
        {
            regex: /https?:\/\/music\.163\.com\/song\?id=(\d+)(?:&[^&\s<>"']*)?/g,
            handler: (match, songId)=>{return `<iframe src="//music.163.com/outchain/player?type=2&id=${songId}&auto=0&height=66" style="width:22.5rem; height:5.375rem; margin: 0;"></iframe>`}

        }
    ];
    function renderExternalLink(url, title = '') {//聊天室链接处理
        const displayTitle = title || url;
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="M27-link">${displayTitle}</a>`;
    }
    function ImgShowBoxLoad(State,Url){
        if (State==="load"){
            bac.insertAdjacentHTML("afterbegin",`
        <div id="ImgBoxM" style="justify-content:center;align-items:center;background-color: rgba(0,0,0);z-index: 1000000000;position: fixed;display: none;left: 0;right: 0;top: 0;bottom: 0;width: 100%;height: 100%;">
        <div id="ZoomSet" style="display:flex;justify-content:center;align-items:center;height: ${Math.ceil(webHeight*0.9)}px;position: fixed;transition: transform  0.2s ease;">
        <img style="max-width:100%;max-height: 100%;object-fit: contain;justify-content:center;" src="" id="PicIMgPrint" alt="">
        </div>
        </div>`)//图片容纳框
            let ImgShow=document.querySelector("#PicIMgPrint");//灰色背景
            let ImgBoxM=document.querySelector("#ImgBoxM");//图片
            let ZoomSet=document.querySelector("#ZoomSet");//缩放框
            let scale = 1;
            const scaleStep = 0.1; // 每次滚动的缩放步长
            const minScale = 0.1; // 最小缩放比例
            const maxScale = 10; // 最大缩放比例
            ImgBoxM.addEventListener("wheel",(e)=>{
                e.preventDefault();
                if(e.deltaY<0){
                    scale+=scaleStep
                }else{
                    scale-=scaleStep
                }
                scale = Math.min(Math.max(scale, minScale), maxScale);
                ZoomSet.style.transform=`scale(${scale})`;
            })//部分代码来自https://www.cnblogs.com/ai888/p/18613761
            ImgBoxM.addEventListener("click",()=>{//重置图片框状态
                ImgShow.src="";
                ImgBoxM.style.display="none";
                ZoomSet.style.transform=`scale(1)`;
            })
            ImgShow.addEventListener("click",(e)=>{
                e.stopPropagation()
            })
        }else if(State==="show"){
            let ImgShow=document.querySelector("#PicIMgPrint");//灰色背景
            let ImgBoxM=document.querySelector("#ImgBoxM");//图片
            ImgShow.src=Url;
            ImgBoxM.style.display="flex";
        }
    }
    function PicList(State,message,IMGlist){
        if(State==="push"){//图片列表实现
            let Num1=message.indexOf("=");
            let Num2=message.indexOf("alt");
            let InputLink
            if(message.slice(Num1+2,Num2-2).includes("http")){
                InputLink=message.slice(Num1+2,Num2-2)
            }else{
                InputLink="https://boyshelpboys.com/"+message.slice(Num1+2,Num2-2)
            }
            PicUrl.splice(0,0,InputLink);
            IMGlist.insertAdjacentHTML("afterbegin",`<div class="DIVIMGshow"><img class="ListImgSet" src="${InputLink}" alt="${InputLink}"></div>`)
        }
    }

    if (typeof Notification !== 'undefined' && typeof window.Notification !== 'undefined'){
        Notification.requestPermission().then(function(result) {//请求通知权限（哭啦什么都要权限啊
        if (result === 'granted') {
            console.log('允许显示系统通知');
        } else if (result === 'denied') {
            console.log('拒绝显示系统通知');
        } else {
            console.log('默认');
        }
    })
    }else{
        console.log("浏览器不支持Notification")
    }

    let nowurl = window.location.href;//读取当前所在网页

    if (nowurl.includes('boyshelpboys.com/chat.htm')) {//如果当前网页为聊天室页面
        let BBSmsgBack=document.querySelector("#top > div > div > main > section > div")
        backPrint(BBSmsgBack,document.querySelector("#top > div > div > main > section > div > div"),nowurl);
        WidthHeightSet();
        let printstr1=["线上地址","删除左侧导航栏","聊天室名称大小","聊天室名称描边/字体颜色","聊天室名称描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条不显示","历史记录1透明度","顶栏下部透明度","历史记录2透明度","外层边框透明度","顶栏透明度","发送边框透明度","发送框透明度","发送框描边","'聊天留言'透明度"]
        leftANDtop();
        ScrollHidden();
        leftContentContent();
        addsett(printstr1,printstr2,);
        //聊天室页面的独占设置内容
        let AddSetter=`
    <div id="MsgSet" style="width:100%;background-color: rgba(36,70,88,0.4);border:1px solid aqua;display: flex;">
    <div style="width:5%;${(()=>{if(localStorage.MsgSet!=="false"){return 'transform: rotate(90deg);'}else{return 'transform: rotate(0deg);'}})()};" id="UnderIcon6">></div><input style="display:none;" type="checkbox" class="SettiingInput" name="MsgSetCheck" id="MsgSetCheck" ${(function (){if (localStorage.MsgSet!=="false"){return "checked";}else{return "";}})()}><label style="user-select:none;-moz-user-select:none;width: 90%;margin:0;" for="MsgSetCheck">聊天室页面设置</label>
    </div>
    <div id="MsgSetSet" style="${(()=>{if (localStorage.MsgSet!=="false"){return "display:block;";}else{return "display:none;";}})()}">
    <input  ${(()=>{if (localStorage.M27NewBBGPrint!=="false"){return "checked";}else{return "";}})()} type="checkbox" class="SettiingInput" name="BBSprintCheck" id="BBSprintCheck" value="PrintPicplan"><label for="BBSprintCheck" style="margin:0;user-select:none;-moz-user-select:none;width: auto;">启用新的聊天室界面</label><br>
    <span>消息气泡调整</span><input class="SettiingInput RangeSetting" type="range" min="0" max="1" step="0.01" value="${localStorage.MsgBoxTra}"onchange="localStorage.MsgBoxTra=value" id="MsgBoxTra" ><input class="SettiingInput ColorSettinr" type="color" id="MsgBoxColor" onchange="localStorage.MsgBoxColor=value" value="${localStorage.MsgBoxColor}"><br>
    </div><hr>`
        document.querySelector("#MsgUrlAddLine").insertAdjacentHTML("afterend",AddSetter);
        document.querySelector("#BBSprintCheck").addEventListener("click",(e)=>{
            if(e.target.checked){
                localStorage.setItem("M27NewBBGPrint","true");
            }else{
                localStorage.setItem("M27NewBBGPrint","false");
            }
        })
        document.querySelector("#MsgSetCheck").addEventListener("click",function(e) {
            if (e.target.checked){
                document.querySelector("#MsgSetSet").style.display="block";
                document.querySelector("#UnderIcon6").style.transform="rotate(90deg)";
            }else{
                document.querySelector("#MsgSetSet").style.display="none";
                document.querySelector("#UnderIcon6").style.transform="rotate(0deg)";
            }
        })

        //聊天室消息状态指示灯
        let MsgServerTime=` <span id="MsgServer" class="" style="display: ${(()=>{if(localStorage.MsgLightCheckX==='true'){return 'block';}else{return 'none';}})()};border-radius: 50%;border:1px solid gray;height:16px;width:16px;text-align: center;background-color: gray;"></span>`
        document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-header.border-bottom > div").insertAdjacentHTML("afterend",MsgServerTime)
        let MsgLight=document.querySelector("#MsgServer");
        let MsgServerReport=`<div id="MsgBox" style="z-index:1000001;display:none; top: 10px;right:50px;position: absolute;width: 180px;height: 50px;background-color: rgba(40, 64, 120, 0.4);border: 1px solid aqua;"><span id="Msg"></span> </div>`
        document.querySelector("#top > div > div > main > section > div > div > div > div.online-users-panel").insertAdjacentHTML("afterend",MsgServerReport)
        let MsgPrint= document.querySelector("#Msg");
        let OnliceUserList=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-header.border-bottom").nextElementSibling;
        OnliceUserList.innerHTML="";
        OnliceUserList.innerHTML=`<div class="panel-body"><div class="M27-online-users-list" id="M27CHANGE"></div></div>`;
        //指示灯计时器
        GetServerStation(MsgLight,MsgPrint)
        let IntTime=setInterval(()=> {
            MesWebTestPlan(MsgLight,MsgPrint);
        },3000)

        document.querySelector("#MsgLightCheck").addEventListener("click",(e)=>{//调整指示灯的开关
            if(e.target.checked){
                localStorage.setItem("MsgLightCheckX","true");
                MsgLight.style.display="block";
                IntTime=setInterval(()=> {
                    MesWebTestPlan(MsgLight,MsgPrint)
                },3000);
            }else{
                localStorage.setItem("MsgLightCheckX","false");
                MsgLight.style.display="none";
                clearInterval(IntTime);
            }
        })
        MsgLight.addEventListener("click",()=>{//点击指示灯显示相关信息
            if(document.querySelector("#MsgBox").style.display==="none"){
                document.querySelector("#MsgBox").style.display="block";
            }else{
                document.querySelector("#MsgBox").style.display="none";
            }
        })
        //点击页面其他部分则隐藏相关菜单
        document.addEventListener('click',function(){document.querySelector("#MsgBox").style.display="none";document.querySelector(".online-users-panel").style.display="none";})

        let baca=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-body")//聊天历史记录1
        let ul=document.querySelector(".chat-history-body > ul")//聊天历史记录2（位置更靠里）
        let histor=document.querySelector("#top > div > div > main > section")//聊天页面外层边框
        let fackone=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs")//输入框部分
        let msginputbox=document.querySelector("#msg")//输入框自己
        let LiuYanTop=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-header.border-bottom")
        let msgInputBoxOutsite=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.form-send-message.d-flex.justify-content-between.align-items-center.talk.write")
        fackone.className='shadow-xs'//修改输入框部分css，删除上部的渐变黑条
        fackone.setAttribute('style',`padding: .5rem .5rem; position: relative; border-radius: .375rem; margin: 0 1.5rem 1rem 1.5rem;background-color:${localStorage.CantSeeColor6}${localStorage.CantSeeset6}`)

        //阻止冒泡
        LiuYanTop.addEventListener('click',function (e){e.stopPropagation();})//解决点击顶部栏错误消失
        document.querySelector("#M27CHANGE").addEventListener("click",(e)=>{e.stopPropagation();});//解决点击自身错误消失
        document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.chat-toolbar").className="chat-toolbar GameBarFix"

        let addlocalupdate=document.querySelector("#webimgsrc");

        bac.setAttribute('style',`background-color:${localStorage.BackGroundColor};`)//网页背景部分
        LiuYanTop.setAttribute("style",`background-color:${localStorage.CantSeeColor9}${localStorage.CantSeeset9};border:0px !important;`);
        baca.setAttribute('style', `background-color: ${localStorage.CantSeeColor1}${localStorage.CantSeeset1} !important;`)//聊天历史记录1
        ul.setAttribute('style', `background-color: ${localStorage.CantSeeColor3}${localStorage.CantSeeset3} !important;`)//聊天历史记录2（位置更靠里）
        histor.setAttribute('style', `background-color: ${localStorage.CantSeeColor4}${localStorage.CantSeeset4} !important;`)//聊天页面外层边框
        msginputbox.setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7} !important;border:1px solid ${localStorage.CantSeeColor8}${localStorage.CantSeeset8} !important;height:2.5rem !important;`)//输入框部分

        document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.form-send-message.d-flex.justify-content-between.align-items-center.talk.write > div > div").setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7} !important;height:2.5rem;`)
        msgInputBoxOutsite.setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7} !important;height:48px;`)//输入框外框调整

                //站长工具栏启动按钮

            setInterval(function(){
                let ToolBar=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.form-send-message.d-flex.justify-content-between.align-items-center.talk.write > button")
                if(ToolBar.style.height==="") {
                    ToolBar.setAttribute("style","height:40px !important;width:40px !important;border-radius:20px;margin:0  0.3125rem 0 0;")
            }
            },1)

        document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.form-send-message.d-flex.justify-content-between.align-items-center.talk.write > div > button > i").insertAdjacentHTML("beforebegin",`<span style="margin-right: 0.125rem;font-size: 12px">发送</span>`)
        //发送按钮
        let SendButton=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.form-send-message.d-flex.justify-content-between.align-items-center.talk.write > div > button");
        SendButton.className='send-btn send-btn-M27'

        addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64

        let Recolor=document.querySelector("#reall")//重置颜色和透明度配置
        Recolor.addEventListener("click",function(){
            ResetSeenum();
            let DIV2=document.querySelector("#layout-navbar");
            let fackone=document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs")//输入框部分
            let LiuYanTop=document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-header.border-bottom")
            msginputbox.setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7};border:1px solid ${localStorage.CantSeeColor8}${localStorage.CantSeeset8} !important;`)//发送框的调整
            baca.setAttribute('style', `background-color: ${localStorage.CantSeeColor1}${localStorage.CantSeeset1};`)//聊天历史记录1
            ul.setAttribute('style', `background-color: ${localStorage.CantSeeColor3}${localStorage.CantSeeset3};`)//聊天历史记录2（位置更靠里）
            DIV2.setAttribute('style', `background-color:${localStorage.CantSeeColor5}${localStorage.CantSeeset5} !important;backdrop-filter:saturate(100%) !important;`);//顶栏
            fackone.setAttribute('style',`padding: .5rem .5rem; position: relative; border-radius: .375rem; margin: 0 1.5rem 1rem 1.5rem;background-color:${localStorage.CantSeeColor6}${localStorage.CantSeeset6};`)//发送栏外层边框
            LiuYanTop.setAttribute("style",`background-color:${localStorage.CantSeeColor9}${localStorage.CantSeeset9};border:0px !important;`);
        })

        //针对@闪电炫芬批插件的外链头像图片做适配（不在自定义聊天室界面可用
        document.querySelector(".chat-history-body > ul > li:nth-child(1048)  ")
        let oldLen=0
        setInterval(()=> {
            let Liloader= document.querySelectorAll(".chat-history-body > ul > li")
            if (oldLen ===Liloader.length){
            }else{
                for (let i = 0; i < Liloader.length; i++) {
                    let imgfix=Liloader[i].querySelector("div > div.user-avatar.flex-shrink-0.me-4 > div > a > img")
                    if (imgfix!==null&&imgfix.src.includes("https://boyshelpboys.com/.")){
                        let needFix=imgfix.src
                        imgfix.src=needFix.substring(26);
                    }
                }
            }
            oldLen= Liloader.length;
        },1000)

        //站长的全屏内容适配
        document.querySelector("#top > div > div > main > section > div > div > div > div.chat-history-header.border-bottom > div > div > button").addEventListener("click",function (){
            if(document.querySelector("#layout-navbar").style.display==="none"){
                document.querySelector("#layout-navbar").style.display="flex"
                //FixStyleFive.innerHTML="";
                histor.setAttribute('style', `background-color: ${localStorage.CantSeeColor4}${localStorage.CantSeeset4} !important;z-index:275 !important;`)
                if (localStorage.leaderhide==="0"){
                    document.querySelector("#layout-menu").style.display="flex";
                }
            }else{
                document.querySelector("#layout-navbar").style.display="none";
                document.querySelector("#top > div").style.backdropFilter="none";
                //FixStyleFive.appendChild(nedAddStyleFive);
                histor.setAttribute('style', `background-color: ${localStorage.CantSeeColor4}${localStorage.CantSeeset4} !important;z-index:275 !important;`)
                if (localStorage.leaderhide==="0"){
                    document.querySelector("#layout-menu").style.display="none";
                }
            }
        })
        histor.setAttribute('style', `background-color: ${localStorage.CantSeeColor4}${localStorage.CantSeeset4} !important;z-index:275 !important;`)

        //表情功能 暂时搁置
        let MojPack=`<button id="MojPack" class="toolbar-btn">😀</button>`
        let ToolBar= document.querySelector("#top > div > div > main > section > div > div > div > div.shadow-xs > div.chat-toolbar.GameBarFix > div");
        ToolBar.insertAdjacentHTML("afterend",MojPack)
        let MojPackOut=document.querySelector("#MojPack");
        let adddiv4=`<div id="MojPackBack" ></div>`
        bac.insertAdjacentHTML("beforeend",adddiv4)
        let adddiv4Out=document.querySelector("#MojPackBack");
        adddiv4Out.setAttribute('style','overflow:auto; border-radius: 5px;position: absolute;top: 40%;left: 20%;transform: translate(0%, -45%);width: 70%;height: 45%;border: 1px solid gray;z-index:1;display:none;background-color:rgba(30, 32, 34, 0.70);color:#f0f5f9;flex-wrap:wrap;flex-direction:row;justify-content:space-around;align-items:center;z-index:1000000;')
        MojPackOut.addEventListener('click',()=>{if(adddiv4Out.style.display==="none" ){adddiv4Out.style.display="flex"}else{adddiv4Out.style.display="none"}})
        let MojPackAdd=`<div class="M27MojPackImg la la-plus-circle" title="点击添加图片" style="text-align: center;line-height: 100px; font-size: 80px;" id="MojPackAddImg" ></div>`
        adddiv4Out.insertAdjacentHTML("afterbegin",MojPackAdd);
        let MojPackAddGet=document.querySelector("#MojPackAddImg");


        //在线人数重写
        document.querySelector("div.chat-history-header.border-bottom > div > div").nextElementSibling.remove();
        document.querySelector("div.chat-history-header.border-bottom > div > div").insertAdjacentHTML('afterend',`<button id="M27ChangeUserList" class="M27-online-users-btn" title="在线用户"><i class="la la-users" style="font-size: 20px;"></i><span style="font-size: 12px;color: ${localStorage.statelyThemeColor};min-width: 20px;text-align: center;position: absolute;top: 2px;right: 2px;padding: 0 2px;"  id="M27UserNun">0</span></button>`)
        document.querySelector("#M27ChangeUserList").addEventListener("click",()=>{
            if (document.querySelector("div.chat-history-header.border-bottom").nextElementSibling.style.display==="none"||document.querySelector("div.chat-history-header.border-bottom").nextElementSibling.style===""){
                document.querySelector("div.chat-history-header.border-bottom").nextElementSibling.setAttribute("style","display: block;")
            }else{
                document.querySelector("div.chat-history-header.border-bottom").nextElementSibling.setAttribute("style","display: none;")
            }
        })
        document.querySelector("#M27CHANGE").addEventListener("click",(e)=>{
            console.log(e.target)
            if (e.target.className==="username"){
                document.querySelector("#msg").value+="@"+e.target.innerHTML+" ";
            }else if(e.target.src!==undefined){
                window.open(`https://boyshelpboys.com/user-${e.target.getAttribute("data-UID")}.htm`)
            }
        })

        //自定义消息页面
        if(localStorage.M27NewBBGPrint==="true"){
            setInterval(()=>{if(typeof c === 'undefined' ){}else{clearInterval(c);}},1);//删除站长原本的消息获取
        //添加样式表
        let NeedFixStyleSix=document.querySelector("head");
        NeedFixStyleSix.insertAdjacentHTML("beforeend",'<style id="style6"></style>');
        let FixStyleSix=document.querySelector("#style6")
        let MsgBoxRed=Number("0x"+localStorage.MsgBoxColor.substring(1,3)),MsgBoxGreen=Number("0x"+localStorage.MsgBoxColor.substring(3,5)),MsgBoxBlue=Number("0x"+localStorage.MsgBoxColor.substring(5))
        let InnetStyle=document.createTextNode(`
        #M27-OnliceUser{display:flex;position: fixed;right: -48%;top:0;bottom: 0;background-color: #66ccff50;width: 50%;height:100%;backdrop-filter:  blur(5px);z-index: 100001;transition:all 0.3s ease 0.1s;}
        #M27-OnliceUser:hover{right: 0%;}
        .ListImgSet{max-height:100px;max-width:100%;}
        .DIVIMGshow{border:3px solid gray;margin:3px;}
        #SelectList{width:3%;flex-direction:row;flex-wrap:wrap;display:flex;position: sticky;height:100%}
        #MsgIMGShowLocal{width:97%;flex-direction:row;flex-wrap:wrap;display:flex;position: relative;overflow:scroll;}
        @media(max-width:600px){
        #M27-OnliceUser{position: fixed;right: -63%;top:0;bottom: 0;background-color: #66ccff50;width: 70%;backdrop-filter:  blur(5px);z-index: 100001;transition:all 0.3s ease 0.1s;}
        #M27-OnliceUser:hover{right: 0%;}
        #SelectList{width:10%;flex-direction:row;flex-wrap:wrap;display:flex;position: sticky;height:100%}
        #MsgIMGShowLocal{width:90%;flex-direction:row;flex-wrap:wrap;display:flex;position: relative;overflow:scroll;}
        }
        .M27-MsgBox{
        list-style:none;
        padding: 0;
        margin: 0;
        display: flex;
        width: 99%;
        height: auto;
        font-size: 1rem;
        justify-content: space-around;
        }
        .M27-MsgAvatar{
        margin: 0.375rem;
        width: 2.25rem;
        height: 2.25rem; 
        align-items: center;
        justify-items: center;
        display: flex;
        top: 0.125rem;
        left: 0.125rem;
        }
        .M27-MsgAvatarImg{
        font-size: 6px;
        overflow: hidden;
        width: 2.25rem;
        height: 2.25rem;
        }
        .M27-MsgContent{
        width: 95%;
        align-items: flex-start;
        justify-items: center;
        display: flex;
        flex-direction: column;
        }
        .M27-userName{
        font-size: 12px;
        }
        .M27-ChatMssageText{
        background-color: orange;
        padding: 0.375rem;
        margin:0.375rem 0 0 0.375rem;
        max-width:80% ;
        height: auto; 
        white-space: normal;
        color:#FFFFFF;
        position: relative;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        border-radius:0rem .375rem .375rem .375rem;
        padding: .75rem 1rem;
        backdrop-filter: blur(5px) !important;
        background-color: rgba(${MsgBoxRed},${MsgBoxGreen},${MsgBoxBlue},${localStorage.MsgBoxTra}) !important;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25) !important;
        }
        .M27-link{
        display:block;
        margin:5px 0; 
        word-break:break-all;
        }
        `)
        FixStyleSix.appendChild(InnetStyle);
        bac.insertAdjacentHTML('afterbegin',`
        <div id="M27-OnliceUser"> 
        <div id="SelectList"><button style="width: 100%;" id="SelectButton"></button><button style="width: 100%;" id="ImgListButton"></button></div>
        <div id="MsgIMGShowLocal"></div>
        </div>`)

        let MsgPageNum=0;//消息页数
        let MsgNum=0//消息条数
        let MsgId;//最新消息id
        let MsgIdcheck=true;//消息id验证
        let MgsList=[]//处理后的消息记录
        let LoadMsgList=[]//服务器端获取的消息记录
        let PrintNumCunt=0;//累计渲染消息计数
        let IMGlist=document.querySelector("#MsgIMGShowLocal");
        ImgShowBoxLoad("load")//加载图像展示框
            let LoadMsgListProxy=new Proxy(LoadMsgList,{
            set(target, p, newValue) {
                target[p]=newValue;
                let SlotCheck=false;//验证数组空槽
                let SlotCheckArray=Array.from(target)
                for (let i=0;i<=target.length-1;i++){
                    if(SlotCheckArray[i]===null || SlotCheckArray[i]===undefined || SlotCheckArray[i]===""){
                        SlotCheck=false;
                        break;
                    }else{
                        SlotCheck=true;
                    }
                }//验证数组空槽结束
                if (SlotCheck && target.length===MsgPageNum){//调整数据格式并填充
                    for (let i=0;i<=target.length-1;i++){
                        target[i].forEach(item=>{
                            let InputJSON={msg:`${JSON.parse(item).msg}`,name:`${JSON.parse(item).name}`,pic:`${JSON.parse(item).pic}`,time:`${JSON.parse(item).time}`,id:`${JSON.parse(item).id}`,msgboxID:`${i}`}
                            MsgListProxy.push(InputJSON)
                        });
                    }
                }
            }
        })
        let MsgListProxy=new Proxy(MgsList,{
            set(target, p, newValue) {
                if (p!=="length"){
                target.push(newValue)
                    if (target.length>=MsgNum){
                        document.querySelector(".chat-history-body > ul").style.display="none"//隐藏原来的消息列表
                        document.querySelector(".chat-history-body").insertAdjacentHTML("beforeend",`<ul class="M27-list-unstyled chat-history talk" data-base-href="../plugin/msto_chat/route/" id="M27-MsgList"></ul>`);//添加新的消息列表
                        ul=document.querySelector('#M27-MsgList')//重新对ul赋值使其对应新消息列表
                        ul.setAttribute('style', `background-color: ${localStorage.CantSeeColor3}${localStorage.CantSeeset3};`)
                        ul.innerHTML=""
                        ul.addEventListener("click",function(e){
                            if (e.target.className.includes("M27-userName")){//点击名字@对方
                                document.querySelector("#msg").value+="@"+e.target.getAttribute('data-username')+" ";
                            }else if (e.target.className.includes("chat-image")){//点击图片进入图片展示页面
                                let ImgLoadTest=new Image()
                                if (e.target.src!=null){//图片加载检测
                                    ImgLoadTest.src=e.target.src
                                    ImgLoadTest.onload=()=>{
                                        ImgShowBoxLoad("show",e.target.src)
                                    }
                                    ImgLoadTest.onerror=()=>{
                                        console.log("链接无法加载")
                                    }
                                }
                            }
                        })
                        let UserId=document.querySelector("#statelyMyInfoModal > ul > div > div:nth-child(1) > div.flex-grow-1 > a").innerHTML
                        //渲染全部消息
                            for (let y=0;y<MgsList.length;y++){
                                if(MgsList[y].name){
                                    message=MgsList[y].msg//修正特殊消息内容
                                    message = message.replace(/\[img](.*?)\[\/img]/g, (match, url) => {
                                        // 清理B站图片链接中的参数
                                        url = url.replace(/@.*$/, '');
                                        return renderImage(url);
                                    });
                                    mediaPatterns.forEach(pattern => {
                                        message = message.replace(pattern.regex, pattern.handler);
                                    });
                                    message = message.replace(/https?:\/\/[^\s<>"']+/g, url => {
                                        // 检查是否是已处理过的媒体链接
                                        if (url.match(/\.(jpg|jpeg|gif|png|webp|avif|mp4|webm|ogg|mp3|wav|m4a)(?:@[^@\s<>"']*)?$/i) || url.includes('bilibili.com/video') || url.includes('douyin.com/video') || url.includes('music.163.com/#/song')) {
                                            return url;
                                        }
                                        // 检查URL是否已经被转换为HTML标签
                                        if (/<(?:img|video|audio|iframe)[^>]*>/.test(url)) {
                                            return url;
                                        }
                                        return renderExternalLink(url);
                                    });
                                    if(message.includes("<img src=")){//图片列表实现
                                        PicList("push",message,IMGlist);
                                    }
                                    //点击头像跳转实现
                                    let UID=MgsList[y].pic.substring(MgsList[y].pic.lastIndexOf("/")+1,MgsList[y].pic.lastIndexOf("."))
                                    if (UID.includes('avatar')||UID===""){
                                        UID="https://boyshelpboys.com/chat.htm"
                                    }else{
                                        UID=`https://boyshelpboys.com/user-${UID}.htm`
                                    }
                                    //消息内容填充
                                    ul.insertAdjacentHTML("beforeend",`<li data-index="${MgsList[y].id}" id="M27-${MgsList[y].id}" class="M27-MsgBox">
                                        <div class="M27-MsgAvatar" style="box-shadow: 0 1px 5px ${(()=>{if (MgsList[y].name===UserId){return "red";}else{return "blue";}})()},0 -1px 5px ${(()=>{if (MgsList[y].name===UserId){return "red";}else{return "blue";}})()},1px 0 5px ${(()=>{if (MgsList[y].name===UserId){return "red";}else{return "blue";}})()},-1px 0 5px ${(()=>{if (MgsList[y].name===UserId){return "red";}else{return "blue";}})()};">
                                            <a href="${UID}" target="_blank"><img src='${MgsList[y].pic}' alt="${MgsList[y].name}" class="M27-MsgAvatarImg"></a>
                                        </div>
                                        <div class="M27-MsgContent">
                                            <div style="width: 100%;height: auto;"><small class="M27-userName" data-username="${MgsList[y].name}" id="M27-${MgsList[y].name}-${MgsList[y].id}">${MgsList[y].name}</small>&emsp;<small style="font-size: small">${new Date(MgsList[y].time*1000).toLocaleString()}</small></div>
                                            <div class="M27-ChatMssageText"><span style="word-break: break-all;">${message}</span></div>
                                        </div></li>`)
                                    //添加点击id@对方的效果
                                    PrintNumCunt+=1;
                                }
                                MsgId=MgsList[y].id//设定最新消息的id
                                document.querySelector(".chat-history-body").scrollTop = document.querySelector(".chat-history-body").scrollHeight;//滚动至底部
                            }
                            let MsgLoadCheck=true
                            setInterval(()=>{
                                let CheckScroll;
                                if (MsgLoadCheck){
                                    MsgLoadCheck=false;
                                    $.ajax({
                                        url:`https://boyshelpboys.com/plugin/msto_chat/route/app/ajax.php?c=msg&type=new&last_id=${MsgId}`,
                                        type:"GET",
                                        dataType:"json",
                                        async:true,
                                        timeout:5000,
                                        success:function(data){
                                            CheckScroll=data.list.length
                                            MsgIdcheck=true
                                            for (let x=0;x<data.list.length;x++){
                                                for (let y=MgsList.length-1;y>=0;y--){//去重
                                                    if (JSON.parse(data.list[x]).id===MgsList[y].id){
                                                        MsgIdcheck=false
                                                        break;
                                                    }
                                                }
                                                if(JSON.parse(data.list[x]).name&&MsgIdcheck){
                                                    message=JSON.parse(data.list[x]).msg
                                                    message = message.replace(/\[img](.*?)\[\/img]/g, (match, url) => {
                                                        // 清理B站图片链接中的参数
                                                        url = url.replace(/@.*$/, '');
                                                        return renderImage(url);
                                                    });
                                                    mediaPatterns.forEach(pattern => {//处理媒体链接
                                                        message = message.replace(pattern.regex, pattern.handler);
                                                    });
                                                    message = message.replace(/https?:\/\/[^\s<>"']+/g, url => {
                                                        // 检查是否是已处理过的媒体链接
                                                        if (url.match(/\.(jpg|jpeg|gif|png|webp|avif|mp4|webm|ogg|mp3|wav|m4a)(?:@[^@\s<>"']*)?$/i) || url.includes('bilibili.com/video') || url.includes('douyin.com/video') || url.includes('music.163.com/#/song')) {
                                                            return url;
                                                        }
                                                        // 检查URL是否已经被转换为HTML标签
                                                        if (/<(?:img|video|audio|iframe)[^>]*>/.test(url)) {
                                                            return url;
                                                        }
                                                        return renderExternalLink(url);
                                                    });
                                                    if(message.includes("<img src=")){//图片列表实现
                                                        PicList("push",message,IMGlist)
                                                    }
                                                    let UID=JSON.parse(data.list[x]).pic.substring(JSON.parse(data.list[x]).pic.lastIndexOf("/")+1,JSON.parse(data.list[x]).pic.lastIndexOf("."))
                                                    if (UID.includes('avatar')||UID===""){
                                                        UID="https://boyshelpboys.com/chat.htm"
                                                    }else{
                                                        UID=`https://boyshelpboys.com/user-${UID}.htm`
                                                    }
                                                    ul.insertAdjacentHTML("beforeend",`<li data-index="${JSON.parse(data.list[x]).id}" id="M27-${JSON.parse(data.list[x]).id}" class="M27-MsgBox">
                                                    <div class="M27-MsgAvatar" style="box-shadow: 0 1px 5px ${(()=>{if (JSON.parse(data.list[x]).name===UserId){return "red";}else{return "blue";}})()},0 -1px 5px ${(()=>{if (JSON.parse(data.list[x]).name===UserId){return "red";}else{return "blue";}})()},1px 0 5px ${(()=>{if (JSON.parse(data.list[x]).name===UserId){return "red";}else{return "blue";}})()},-1px 0 5px ${(()=>{if (JSON.parse(data.list[x]).name===UserId){return "red";}else{return "blue";}})()};">
                                                        <a href="${UID}" target="_blank"><img src='${JSON.parse(data.list[x]).pic}' alt="${JSON.parse(data.list[x]).name}" class="M27-MsgAvatarImg"></a>
                                                    </div>
                                                    <div class="M27-MsgContent">
                                                        <div style="width: 100%;height: auto;"><small class="M27-userName" data-username="${JSON.parse(data.list[x]).name}" id="M27-${JSON.parse(data.list[x]).name}-${JSON.parse(data.list[x]).id}">${JSON.parse(data.list[x]).name}</small>&emsp;<small style="font-size: small">${new Date(JSON.parse(data.list[x]).time*1000).toLocaleString()}</small></div>
                                                        <div class="M27-ChatMssageText"><span style="word-break: break-all;">${message}</span></div>
                                                    </div></li>`)
                                                    PrintNumCunt+=1;
                                                    MgsList.push(data.list[x])
                                                    MsgId=JSON.parse(data.list[x]).id
                                                }else{MsgId=JSON.parse(data.list[x]).id}
                                                if(CheckScroll>0){
                                                    document.querySelector(".chat-history-body").scrollTop =document.querySelector(".chat-history-body").clientHeight+ document.querySelector(".chat-history-body").scrollHeight;
                                                }
                                            }
                                            MsgLoadCheck=true
                                        },
                                        error:function (){console.error("新消息列表获取失败，正在重新获取。");MsgLoadCheck=true;}
                                    })
                                }
                            },1000)
                    }
                }
                return true
            }
        })
        //let MsgGet=
            $.ajax({
                url:'https://boyshelpboys.com/plugin/msto_chat/route/app/ajax.php?c=msg&type=histary',
                type:"GET",
                dataType:"json",
                async:false,
                success:function(data){
                    MsgPageNum=Math.ceil(data.total/10)
                    MsgNum=Math.ceil(data.total)
                    //LoadMsgList.length=MsgPageNum
                    for(let i=1;i<=MsgPageNum;i++){//读取全部消息
                        $.ajax({
                            url:`https://boyshelpboys.com/plugin/msto_chat/route/app/ajax.php?c=msg&type=histary&page=${i}`,
                            type:"GET",
                            dataType:"json",
                            async:true,
                            success:function(data){
                                LoadMsgListProxy[i-1]=data.list.reverse();
                            },
                            error:function(){console.error(`消息组${i}获取失败！`)}
                        });
                    }
                },
                error:function(){console.error('服务器数据获取失败')}
            })
            }

    }else if(nowurl.includes('boyshelpboys.com/plugin')){
            return "";
    }else if(nowurl.includes('boyshelpboys.com/my')){
        bac.setAttribute("style",`background-color:${localStorage.BackGroundColor};`)
        backPrint(bac,addtarge,nowurl);
        let printstr1=["线上地址","删除左侧导航栏","淡色字体大小","淡色字描边/字体颜色","淡色字描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条不显示","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","'*没做*'*没做*"]
        leftANDtop();
        WidthHeightSet();
        ScrollHidden();
        leftContentContent();
        addsett(printstr1,printstr2,);

    }else if(nowurl ==="https://www.boyshelpboys.com/"||nowurl ==="https://boyshelpboys.com/"||nowurl.includes("boyshelpboys.com/#")||nowurl.includes("boyshelpboys.com/index")){
        backPrint(bac,addtarge,nowurl);
        bac.setAttribute("style",`background-color:${localStorage.BackGroundColor};`)
        ScrollHidden()
        leftANDtop();
        WidthHeightSet();
        leftContentContent();

        let Tiezi1=document.querySelector("#top > div > div > main > div > div.col-lg-9.main > div.card-threadlist > div.card.card-body.py-2");
        let Tiezi6=document.querySelector("#top > div > div > main > div > div.col-lg-3.aside > div:nth-child(2)")
        let Tiezi7=document.querySelector("#search_form > div > input")
        Tiezi1.setAttribute('style', `background-color:${localStorage.CantSeeColor1}${localStorage.CantSeeset1};`);//帖子部分外框颜色|透明度
        Tiezi6.setAttribute('style', `background-color: ${localStorage.CantSeeColor6}${localStorage.CantSeeset6} !important;`)//搜索栏背景||边框
        Tiezi7.setAttribute('style', `background-color: ${localStorage.CantSeeColor7}${localStorage.CantSeeset7} !important;border:1px solid ${localStorage.CantSeeColor8}${localStorage.CantSeeset8} !important;height:2.5rem !important;`)//搜索栏输入框背景||描边

        let printstr1=["线上地址","删除左侧导航栏","淡色字体大小","淡色字描边/字体颜色","淡色字描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条不显示","帖子栏1透明度","顶栏而下透明度","*没做*","*没做*","*没做*","搜索框颜色透明度","搜索输入框颜色",'搜索框描边',"*没做*"]
        addsett(printstr1,printstr2,);

        let addlocalupdate=document.querySelector("#webimgsrc");
        let localget=document.querySelector("#save");
        localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
        addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64
        if(document.querySelector("#top > div > div > main > div > div.col-lg-3.aside > div:nth-child(3)") !=null && typeof document.querySelector("#top > div > div > main > div > div.col-lg-3.aside > div:nth-child(3)")!=="undefined"){
            document.querySelector("#top > div > div > main > div > div.col-lg-3.aside > div:nth-child(3)").innerHTML=""
        }
    }else if(nowurl.includes("boyshelpboys.com/thread-")){
        backPrint(bac,addtarge,nowurl);
        leftANDtop();
        WidthHeightSet();
        ScrollHidden();
        rePrint(webWidth,webHeight);
        leftContentContent();

        let printstr1=["线上地址","删除左侧导航栏","聊天室名称大小","聊天室名称描边/字体颜色","聊天室名称描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条不显示","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","'*没做*'*没做*"]
        addsett(printstr1,printstr2,);
        let addlocalupdate=document.querySelector("#webimgsrc");
        let localget=document.querySelector("#save");
        localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
        addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64
        //帖子界面图片放大观看功能
        ImgShowBoxLoad("load")
        document.querySelector("#the_thread_message").addEventListener("click",(e)=>{
            console.log(e.target)
            let ImgLoadTest=new Image()
            if (e.target.src!=null){
                ImgLoadTest.src=e.target.src
                ImgLoadTest.onload=()=>{
                    ImgShowBoxLoad("show",e.target.src)
                }
                ImgLoadTest.onerror=()=>{
                    console.log("链接无法加载")
                }
            }
        });
    }
    else{
        backPrint(bac,addtarge,nowurl);
        leftANDtop();
        WidthHeightSet();
        ScrollHidden();
        rePrint(webWidth,webHeight);
        leftContentContent();

        let printstr1=["线上地址","删除左侧导航栏","聊天室名称大小","聊天室名称描边/字体颜色","聊天室名称描边大小","顶部","左部","背景高度比例(填写0即为auto)","背景宽度比例(填写0即为auto)","在线图片","本地图片","section写入","body-background写入","渲染到网页背景","渲染到聊天室背景"];
        let printstr2=["滚动条不显示","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","*没做*","'*没做*'*没做*"]
        addsett(printstr1,printstr2,);
        let addlocalupdate=document.querySelector("#webimgsrc");
        let localget=document.querySelector("#save");
        localget.addEventListener("click",addtolocal,false);//点击向localst保存数据
        addlocalupdate.addEventListener("change",handleFileSelect,false)//本体提交图片时向DBD保存base64
    }
})();