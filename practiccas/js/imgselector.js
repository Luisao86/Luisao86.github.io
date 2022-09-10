const main_img = document.querySelector('.main_img')
const thumbnail = document.querySelectorAll('.thumbnail')

thumbnail.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        main_img.src = this.src
    })
})

