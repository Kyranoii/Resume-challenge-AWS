fetch("navbar.html")
    .then(res => res.text())
    .then(html => { const navbar = document.getElementById("navbar");
        if (navbar){ 
            navbar.innerHTML = html;
        } else {
            console.error("Element with id 'navbar' not found" )
        }
    });
