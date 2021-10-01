function copyToClipboard(text) {
    var copyText = text;
    navigator.clipboard.writeText(copyText);

    show();
    setTimeout(hide, 3000);
}

function show() {
    $("#alert").fadeIn(100);
}

function hide() {
    $("#alert").fadeOut(100);
}