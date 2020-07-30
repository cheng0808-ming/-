var list_area = document.getElementsByClassName('list_area')[0];
var list_price = document.getElementsByClassName('list_price')[0];
var list_home = document.getElementsByClassName('list_home')[0];
var list_more = document.getElementsByClassName('list_more')[0];
var area1 = document.getElementsByClassName('area')[0];
var area2 = document.getElementsByClassName('area')[1];
var price1 = document.getElementsByClassName('price')[0];
var home1 = document.getElementsByClassName('home')[0];
var more1 = document.getElementsByClassName('more')[0];
var price2 = document.getElementsByClassName('price')[1];
var home2 = document.getElementsByClassName('home')[1];
var more2 = document.getElementsByClassName('more')[1];
function setRem(){
    var ui = 750;
    var winWid = document.documentElement.clientWidth||document.body.clientWidth;
    console.log(ui,winWid)
    document.getElementsByTagName('html')[0].style.fontSize = (winWid/ui)*100+'px';
}
window.onresize = setRem;
touch.on(area1,'tap',function(){
    list_area.style.display = 'block';
})
touch.on(area2,'tap',function(){
    list_area.style.display = 'none'; 
})
touch.on(price1,'tap',function(){
    list_price.style.display = 'block';
})
touch.on(price2,'tap',function(){
    list_price.style.display = 'none'; 
})
touch.on(home1,'tap',function(){
    list_home.style.display = 'block';
})
touch.on(home2,'tap',function(){
    list_home.style.display = 'none'; 
})
touch.on(more1,'tap',function(){
    list_more.style.display = 'block';
})
touch.on(more2,'tap',function(){
    list_more.style.display = 'none'; 
})