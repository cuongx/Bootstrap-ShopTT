var hoadoa=hoadoa || {};
hoadoa.drawHd=function(){
    $.ajax({
        url: "http://localhost:3000/splay/1",
        method : "GET",
        dataType: "json",
        success: function(data){
            $('#muahangtwo').find('#name').text(data.name);
            $('#muahangtwo').find('#gia').text(data.dobb);
            document.getElementById("anh").setAttribute('src', data.avatarr);
        }
      })
    }

   

hoadoa.init=function(){
    hoadoa.drawHd();
}

$(document).ready(function(){
    hoadoa.init();
})