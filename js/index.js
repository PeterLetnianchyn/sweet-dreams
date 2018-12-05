function myFunction() {
  let link = document.getElementById("myLinks");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
}

document.querySelector('.about-us').addEventListener('click', getHtmlAjaxAboutUs);

function getHtmlAjaxAboutUs() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('#main').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'about-us.html', true);
    xhr.send();
}

document.querySelector('.production').addEventListener('click', getHtmlAjaxProduction);

function getHtmlAjaxProduction() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('#main').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'production.html', true);
    xhr.send();
}
document.querySelector('.our-team').addEventListener('click', getHtmlAjaxOurTeam);

function getHtmlAjaxOurTeam() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('#main').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'our-team.html', true);
    xhr.send();
}

document.querySelector('.contact').addEventListener('click', getHtmlAjaxContact);

function getHtmlAjaxContact() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('#main').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'contact.html', true);
    xhr.send();
}

document.querySelector('.category-pastry').addEventListener('click', getHtmlAjaxPastry);

function getHtmlAjaxPastry() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('#main').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'pastries.html', true);
    xhr.send();
}

document.querySelector('.category-cake').addEventListener('click', getHtmlAjaxCake);

function getHtmlAjaxCake() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('#main').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'cake.html', true);
    xhr.send();
}

document.querySelector('.category-other-sweets').addEventListener('click', getHtmlAjaxOtherSweets);

function getHtmlAjaxOtherSweets() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           document.querySelector('#main').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'other-sweets.html', true);
    xhr.send();
}
