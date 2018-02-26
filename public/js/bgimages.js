String.prototype.hashCode = function(){
    // djb2 hash algorithm
    var hash = 5381;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash >>> 0;
};

var getBackgroundImages = function() {
    var images = [];
    var imgString = document.getElementById("hero").getAttribute("data-backgrounds");
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

        document.getElementById("hero").style.background = 'url("' + images[count] +'")';
        document.getElementById("hero").style.backgroundSize = "cover";
        document.getElementById("hero").style.backgroundPosition = "center";
        document.getElementById("hero").style.backgroundAttachment = "fixed";
        if (images.length > 1) {
            setTimeout(rotateBackground.bind(null, count), 5000);
        }
    }
};
preloadBackgrounds();
rotateBackground();
