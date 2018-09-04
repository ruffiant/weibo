//复制代码
function copyUrl2(txt)
    {
        var oInput = document.createElement('input');
        oInput.value = txt;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        alert('DATAURI复制成功');
    }
    
function urlToDataurl(url) {
          var xhr = new XMLHttpRequest();
          xhr.onload = function() {
              var reader = new FileReader();
              reader.onloadend = function() {
              	alert(reader.result);
              	//copyUrl2(reader.result);
              }
              reader.readAsDataURL(xhr.response);
          };
          xhr.open('GET', url);
          xhr.responseType = 'blob';
          xhr.send();
      }
function genericOnImage(info, tab) {   

var img=urlToDataurl(info.srcUrl);

}   
 
var link = chrome.contextMenus.create({"title":"DATA_URI","contexts":["image"],"onclick":genericOnImage});   
