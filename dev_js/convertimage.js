/**
 * Created by thomasroseman on 4/30/16.
 */
// Get an image and save it as a byte value so i can be stored in the database
var p;var canvas = document.createElement("canvas");
var img1=document.createElement("img");

function getBase64Image(){
    p=document.getElementById("fileUpload").value;
    img1.setAttribute('src', p);
    canvas.width = img1.width;
    canvas.height = img1.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img1, 0, 0);
    var dataURL = canvas.toDataURL("image/png");alert("from getbase64 function"+dataURL );
    return dataURL;
}