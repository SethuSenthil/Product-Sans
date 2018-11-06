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
block = ['https://dhanush427.github.io/'],
url = window.location.hostname;

for (let i = 0; i < block.length; i++) {
   if (url === block[i]) {
    loadFile('https://sethusenthil.com/Product-Sans/api/font.css', 'css');
   }
   else {
    loadFile('https://sethusenthil.com/Product-Sans/api/font.css', 'css');
   }
}
