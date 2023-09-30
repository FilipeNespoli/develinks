
    function toggleMode() {
        const html = document.documentElement
        html.classList.toggle('light') //adiciona ou remove a class de acordo com a sua existencia ou não

        const img = document.querySelector("#profile img")
        
        if(html.classList.contains('light')) {
             img.setAttribute('src', './assets/avatar.png')
         }else {
            img.setAttribute('src', './assets/avatar.png')
        }

        
    }