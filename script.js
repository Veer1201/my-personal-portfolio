document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e){
        if(this.hash != ""){
            e.preventDefault();

            const targetElement = document.querySelector(this.hash);
            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior:'smooth'
                });
            }
        }
    });
});
