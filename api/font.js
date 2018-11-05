const loadFile = (filename, filetype) =>{
    if (filetype=="js"){
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
},
block = ['https://test.com'],
url = location.href;

for (let i = 0; i < block.length; i++) {
   if (url === block[i]) {
       alert('origin-request-blocked')
   }
   else {
    loadFile('font', 'css');
   }
}
