function showImage(src) {
    const largeImage = document.getElementById('largeImage');
    largeImage.src = src;

    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));

    const activeThumbnail = [...thumbnails].find((thumbnail) => thumbnail.src.includes(src));
    if (activeThumbnail) {
        activeThumbnail.classList.add('active');
    }
}

function showImage(src) {
    console.log(`Clicked on: ${src}`);
    const largeImage = document.getElementById('largeImage');
    if (largeImage) {
        largeImage.src = src;
        console.log(`Large image updated to: ${src}`);
    }
}