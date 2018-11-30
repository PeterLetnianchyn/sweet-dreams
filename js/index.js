document.querySelector('.about-us').addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('.main').innerHTML = xhr.responseXML;
        }
    }
    xhr.open('GET', 'about-us.html', true);
    xhr.send();
}