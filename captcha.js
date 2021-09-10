let mbz_letterBanks = "QWm12FERzxcvbnJop34KLZXCVkertyTYUluGHi56789BNMqwIOPsdfASDaghj";
let mbz_parentElemnt = document.getElementById('captcha') ;
let mbz_get_head = document.getElementsByTagName('head')[0];
let creat_css_links = document.createElement('link');
creat_css_links.rel="stylesheet";
creat_css_links.href="http://mbz3a.rf.gd/cdn/captcha.css";
mbz_get_head.appendChild(creat_css_links);

let mbz_catcha = "" ;
for(var i=0 ; i <6 ; i++){
    let mbz_index = Math.floor(Math.random()*mbz_letterBanks.length);
    var mbz_spans = document.createElement('span');
    mbz_spans.textContent = mbz_letterBanks[mbz_index] ;
    mbz_spans.style.color = "#ff"+Math.floor(Math.random()*10000) ;
    mbz_parentElemnt.appendChild(mbz_spans);
    mbz_catcha += mbz_letterBanks[mbz_index];    
}

mbz_parentElemnt.setAttribute('data-captcha',mbz_catcha );