function ajax(url, successCb) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      successCb(xhr.responseText);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}