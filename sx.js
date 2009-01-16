/*
    Super Simple Templating
    Based on the SemantExtreme design
    
    by: Thomas Aylott
        subtleGradient.com
*/

var TEMPLATE = {
    
    css:{
        screen:["screen", "fancy-type"],
        print:["print"],
        ie:["ie"]
    },
    
    content_placer:'{CONTENT}',
    
    html:'\
    <div class="container">\
        <p>Header</p>\
        <hr>\
        {CONTENT}\
        <hr>\
        <p>Footer</p>\
    </div>\
    '
};

var isIE = false /*@cc_on || true@*/;

function sx(){
    var CONTENT = document.body.innerHTML;
    document.body.innerHTML = TEMPLATE.html.replace(TEMPLATE.content_placer, CONTENT);
    var head = document.getElementsByTagName('head')[0];
    for (var media in TEMPLATE.css) {
        if (media=='ie'){
            if (!isIE) continue;
            media = '';
        }
        for (var i=0, href; href = TEMPLATE.css[media][i]; i++){
            var link = document.createElement('link');
            link.setAttribute('href', href + '.css');
            link.setAttribute('rel',"stylesheet");
            link.setAttribute('type',"text/css");
            link.setAttribute('media',media);
            link.setAttribute('charset',"utf-8");
            head.appendChild(link);
        }
    }
};
