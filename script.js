const videoElement = document.getElementById('videoElement');
const pipButtonElement = document.getElementById('pipButtonElement');

pipButtonElement.addEventListener('click', async function() {
    pipButtonElement.disabled = true;

    await videoElement.requestPictureInPicture();

    pipButtonElement.disabled = false;
});

navigator.mediaDevices.getDisplayMedia()
    .then(function (mediaStream) {
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = function (e) {
            videoElement.play();
        };
    })