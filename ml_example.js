function PreviewImage() {
    document.getElementById("loading-gif").style.display = 'inline';
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
    oFReader.onload = function(oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
    const image = document.getElementById('uploadPreview');
    const result = document.getElementById('result');
    const probability = document.getElementById('probability');
    const classifier = ml5.imageClassifier('Mobilenet');
    classifier.predict(image, function(results) {
        result.innerText = results[0].className;
        probability.innerText = results[0].probability.toFixed(2) * 100;
        document.getElementById("loading-gif").style.display = 'none';
    });
};
