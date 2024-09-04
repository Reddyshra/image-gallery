// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Get all images in the gallery
var images = document.querySelectorAll('.gallery-image');

images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}
