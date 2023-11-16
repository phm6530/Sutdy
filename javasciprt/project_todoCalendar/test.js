var body = document.body;
var panel = document.getElementById('panel');
var pContent = document.getElementById('pContent');
var imgCol = document.getElementById('imgCol');

function initTilt() {
  setTransformStyle([pContent, imgCol], "preserve-3d");

  body.addEventListener('mousemove', function(e) {
    tilt(e.pageX, e.pageY);
  });
}

function tilt(cx, cy) {
  var sxPos = (cx / body.clientWidth * 100 - 50) * 2;
  var syPos = (cy / body.clientHeight * 100 - 50) * 2;

  setTransform(pContent, -0.03 * sxPos, 0.03 * syPos, "center center -400");
  setTransform(imgCol, -0.03 * sxPos, 0.03 * syPos, "center center -200");
}

function setTransform(element, rotationY, rotationX, transformOrigin) {
  element.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
  element.style.transformOrigin = transformOrigin;
}

function setTransformStyle(elements, transformStyle) {
  elements.forEach(function(element) {
    element.style.transformStyle = transformStyle;
  });
}

body.addEventListener('mouseleave', function() {
  tilt(body.clientWidth / 2, body.clientHeight / 2);
});

initTilt();

console.clear();