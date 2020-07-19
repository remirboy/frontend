var dropzone;
function setup() {
//  createCanvas(200,200);
//  background(0);
  dropzone = select('#dropzone');
  dropzone.dragOver(ligth);
  dropzone.dragLeave(unligth);
  dropzone.drop(getFile,unligth);
}

function ligth() {
 	changeColor('grey');
}

function unligth(){
	changeColor('white')
}

function changeColor(color){
	dropzone.style('background-color',color);
}

function getFile(file){
	var img = createImg(file.data)
	img.size(120, 120);

}