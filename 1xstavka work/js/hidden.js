function showHiddenTable(){
    document.querySelector('#hidden-table').style.display='block';
    addEventListener('mousemove', function(e){   
        document.querySelector('#hidden-table').style.top = e.pageY + 10 + 'px';
        document.querySelector('#hidden-table').style.left = e.pageX + 10 + 'px';
      });
}

function hideHiddenTable(){
    document.querySelector("#hidden-table").style.display='none';
    console.log(1)
}