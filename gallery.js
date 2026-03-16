function upDate(previewPic) {
    /* 1) Change the url for the background image of the div with the id = "image" 
       to the source file of the preview image */
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    /* 2) Change the text of the div with the id = "image" 
       to the alt text of the preview image */
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    /* 1) Update the url for the background image of the div with the id = "image" 
       back to the original-image. */
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    /* 2) Change the text of the div with the id = "image" 
       back to the original text. */
    imageDiv.innerHTML = "Hover over an image below to display here.";
