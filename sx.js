/*
    Super Simple Templating
    Based on the SemantExtreme design
    
    by: Thomas Aylott
        subtleGradient.com
*/

var TEMPLATE = {
    content_placer:'{CONTENT}',
    css:{
        screen:"http://tripledoubleyou.subtlegradient.com/c/blueprint/screen.css",
        print:"http://tripledoubleyou.subtlegradient.com/c/blueprint/print.css",
        ie:"http://tripledoubleyou.subtlegradient.com/c/blueprint/ie.css"
    },
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
        var link = document.createElement('link');
        if (media=='ie'){
            if (!isIE) continue;
            media = '';
        }
        link.setAttribute('href', TEMPLATE.css[media]);
        link.setAttribute('rel',"stylesheet");
        link.setAttribute('type',"text/css");
        link.setAttribute('media',media);
        link.setAttribute('charset',"utf-8");
        head.appendChild(link);
    }
};
