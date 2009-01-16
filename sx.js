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
    <p class="box">Header</p>\
    <div class="clearfix">\
        <div class="span-16 first colborder">\
            {CONTENT}\
        </div>\
        <div class="span-6 last small">\
            <p>This sidebar isn\'t in the document source because it\'s semantically not part of the document.</p>\
            <p>This could be for ads or whatever.</p>\
            <hr>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\
        </div>\
    </div>\
    <p class="box">Footer</p>\
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
