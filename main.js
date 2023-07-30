Webcam.set({
    height : "350",
    width : "300",
    image_format : "jpg",
    jpg_quality : "92"
});

camera = document.getElementById("camera");
 
 Webcam.attach('#camera');

  function take_snapshot(){
    webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML ='<img id = "captured_image" src="'+data_uri+'"/>';
});
  }

  console.log("ml5 version :" , ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8TzzXuFp9/', modelLoaded);

  function modelLoaded(){
    console.log("Model Loaded");
  }



function check(){
img = document.getElementById("captured_image");
classifier.classify(img , gotresult);
}

function gotresult(error , result){
  console.error(error);

} else {
  console.log(results);
document.getElementById("result_gestures_name").innerHTML= results[0].label;

gesture = result[0].label;
speak();

if (results[0].label == happy)
document.getElementById("update_gesture").innerHTML = "&#128522;";

if (results[0].label == sad)
document.getElementById("update_gesture").innerHTML = "&#128532;";

if (results[0].label == angry)
document.getElementById("update_gesture").innerHTML = "&#128548;";
}
