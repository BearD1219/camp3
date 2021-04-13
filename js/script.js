document.addEventListener('DOMContentLoaded', main());
function main() {
    window.addEventListener('scroll', function(e) {
        let y = scrollY;
        let header = document.querySelector('.header-menu-wrap');
        let headerContent = document.querySelector('.header-content');
        if(y > 200 && !header.classList.contains('scroll')) {
            header.classList.add('scroll');
            header.firstElementChild.classList.add('scroll');
            headerContent.classList.add('scroll');
        } 
        if(y < 200  && header.classList.contains('scroll')) {
            header.classList.remove('scroll');
            header.firstElementChild.classList.remove('scroll');
            headerContent.classList.remove('scroll');
        }
    });
    let links = document.querySelectorAll('[data-link]');
    for(let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let mobileNav = document.getElementById('nav-bar');
            let body = document.querySelector('body');
            let linkName = link.getAttribute('data-link');
            let burger = document.getElementById('menu-burger');
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                body.classList.remove('active');
                burger.classList.remove('close');
            }
            if (linkName == 'top') {
                window.scrollTo({top: 0, behavior: 'smooth'});
            } else {
                let mesure = document.getElementById(linkName).offsetTop;
                let headerHeight = document.querySelector('.header-menu-wrap').scrollHeight;
                window.scrollTo({top: mesure - headerHeight, behavior: 'smooth'});
            }         
        })

    }
    let burger = document.getElementById('menu-burger');
    burger.addEventListener('click', function() {
        let mobileNav = document.getElementById('nav-bar');
        let body = document.querySelector('body');
        if (!mobileNav.classList.contains('active')) {
            mobileNav.classList.add('active');
            body.classList.add('active');
            this.classList.add('close');
        } else {
            mobileNav.classList.remove('active');
            body.classList.remove('active');
            this.classList.remove('close');
        }
    });

}
