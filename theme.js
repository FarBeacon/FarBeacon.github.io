if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector("link[rel*='icon']").href = "images/faviconL.png";
}
else{
    document.querySelector("link[rel*='icon']").href = "images/faviconD.png";
}