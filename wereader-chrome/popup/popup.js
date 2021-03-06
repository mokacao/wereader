//页面加载完毕后开始执行
window.onload = function () {
    //获取 vid
    getuserVid(function(userVid){
        const bg = chrome.extension.getBackgroundPage()
        //获取 vid 失败则提醒
        if (!userVid) {
            bg.aler("似乎出了一点问题...请确保正常登陆后刷新重试~")
            window.close()
        }
        //遍历按钮绑定点击事件
        const ids = ["getComment","getComment_text","getComment_html","getBookMarks","getThisChapter","getAll","getBookContents","getBestBookMarks","getMyThoughts","inject-copyBtn","inject-deleteMarks","testBtn"]
        ids.forEach(id=>{
            document.getElementById(id).addEventListener('click', function(){
                listener(this.id)
            }, false)
        });
        //点击调用该函数
        function listener(id){
            switch(id){
                case "getComment":
                    let choose = document.getElementById("choose")
                    choose.style.display = (choose.style.display != "block") ? "block" : "none"
                    return
                case "getComment_text":
                    bg.getComment(userVid, false)
                    break
                case "getComment_html":
                    bg.getComment(userVid, true)
                    break
                case "getBookMarks":
                    let chooseMark = document.getElementById("choose_mark")
                    chooseMark.style.display = (chooseMark.style.display != "block") ? "block" : "none"
                    return
                case "getThisChapter":
                    bg.copyBookMarks(false)
                    break
                case "getAll":
                    bg.copyBookMarks(true)
                    break
                case "getBookContents":
                    bg.copyContents()
                    break
                case "getBestBookMarks":
                    bg.copyBestBookMarks()
                    break
                case "getMyThoughts":
                    bg.copyThought()
                    break
                case "inject-copyBtn":
                    chrome.tabs.executeScript({ file: 'inject/inject-copyBtn.js' }, function (result) {
                        bg.catchErr("popup.js=>copyBtn")
                    })
                    break
                case "inject-deleteMarks":
                    chrome.tabs.executeScript({ file: 'inject/inject-deleteMarks.js' }, function (result) {
                        bg.catchErr("popup.js=>deleteMarks")
                    })
                    break
                case "testBtn":
                    //bg.logStorage("sync")
                    //bg.callgetBookMarks()
                    //bg.callgetMyThought()
                    //bg.callgetContents()
                    break
                default:
                    break
            }
            window.close()
        }
    })
    
}

//从当前页面获取 userVid
function getuserVid(callback){
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		chrome.cookies.get({url: tabs[0].url,name: 'wr_vid'}, function (cookie) {
            if(chrome.runtime.lastError){
                chrome.extension.getBackgroundPage().catchErr("popup.js => chrome.cookies.get()")
                callback(null)
            }else{
			    cookie == null ? callback(null) : callback(cookie.value.toString())
            }
		})
	})
}
