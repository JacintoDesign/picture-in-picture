const videoElement = document.getElementById("videoElement");
const button = document.getElementById("pipButton");

button.addEventListener("click", async function() {
  // Disable Button
  button.disabled = true;
  // Button Starts Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// Prompt To Select Media Stream On Load, Playing Streaming Video 
navigator.mediaDevices.getDisplayMedia().then(function(mediaStream) {
  videoElement.srcObject = mediaStream;
  videoElement.onloadedmetadata = function(e) {
    videoElement.play();
  };
});
