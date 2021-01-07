let trips=[];

function addTrip(trip){
  var trip=event.target.textContent;
  trips.push(trip);
  console.log(trips);
  alert('Вы добавили '+trip);
}

function destroyTrips(){
    trips=[];
    console.log(trips);
}

function destroyLastTrip(){
  trips.pop();
  console.log(trips);
  alert('Удалена последняя остановка');
}
function printAll(){
    let b = document.getElementById("array");
    trips.forEach(e => b.innerHTML += "<li>" + e + "</li>");
}

function cleanModal(){
    let b = document.getElementById("array");
    trips.forEach(e => b.innerHTML += "<li>" + ' ' + "</li>");
}

modal = function() {
    document.getElementById("hide").style.display = "block";
    document.getElementById("table").style.display = "block";
    cleanModal();
    printAll();
  }

  