document.querySelector('a[href="#ajuda"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.querySelector('#ajuda');
   
   
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
})