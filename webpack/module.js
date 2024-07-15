const menuItems = document.querySelectorAll('.menu-item');
const contentBlocks = document.querySelectorAll('.content-block');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        contentBlocks.forEach(block => {
            block.classList.remove('active');
        });

        const contentId = this.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');

        menuItems.forEach(menu => {
            menu.classList.remove('active');
        });

        this.classList.add('active');
    });
});