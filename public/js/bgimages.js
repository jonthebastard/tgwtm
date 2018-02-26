var getBackgroundImages = function() {
    var backgrounds = document.getElementsByTagName("body");
    var images = [];
    var imgString = backgrounds[0].getAttribute("data-backgrounds");
    if (imgString) {
        images = imgString.split(/[\s,]+/).filter(Boolean);
    }
    return images;
};

var preloadBackgrounds = function() {
    var images = getBackgroundImages();
    for(var i = 0; i < images.length; i++)
    {
        // caches images, avoiding white flash between background replacements
        new Image().src = images[i];
    }
};

var rotateBackground = function(count) {
    if (count === undefined || count === null) {
        count = 0;
    }

    var images = getBackgroundImages();
    if (images.length > 0) {
        count = (count+1) % images.length;
        // console.log("rotating background to "+count);

        document.body.style.background = 'url("' + images[count] +'")';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        if (images.length > 1) {
            setTimeout(rotateBackground.bind(null, count), 5000);
        }
    }
};
preloadBackgrounds();
rotateBackground();
