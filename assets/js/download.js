var downloadButton=document.getElementById("downloadButton");
downloadButton.addEventListener("click",() => {
    var url="Reon CV.pdf";
    var filename="Reon CV.pdf";
    var link = document.createElement('a');
    link.href = url;
    link.download=filename;
    link.click();
});