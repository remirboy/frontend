let user_id;

$(login = function(user){
  user.onclick=function(){
 $('#deleteModal').modal('show')
  this.user=user;
  user_id=user.value;
  document.getElementById('user').value = user_id;
  console.log(user_id);
  }
});

function putUser(user_id) {
	for (var i = 0; i <10000; i++) 
		console.log( document.getElementById('user').value);
}
