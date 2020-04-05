const links = document.querySelectorAll('.category__link');

let ticking = false;
const updateFunc = () => {
    ticking = false;
    block.classList.toggle('hidden');
};

Array.from(links).forEach((link) => {

    $(link).hover(function (evt) {
        let index = link.dataset.index;
        $('.category__main').addClass('hidden');
        const block = document.querySelector('.category__main[data-index="' + index + '"]');
        block.classList.remove('hidden');
    }, function (evt) {
        let index = link.dataset.index;
        const block = document.querySelector('.category__main[data-index="' + index + '"]');
        if (!Array.from(link.children).includes(evt.target)){
            block.classList.add('hidden');
        }
    })
    $('.category__main').each(function () {
        $(this).hover(function (evt) {
            $(evt.currentTarget).removeClass('hidden');
        }, function (evt) {
            $(evt.currentTarget).addClass('hidden');
        });
    })

})

let categories = document.querySelectorAll('.category');

Array.from(categories).forEach((category) => {
    $(category).hover(function (evt) {
        let index = evt.currentTarget.dataset.index;
        let subIndex = Number(evt.currentTarget.dataset.sub) + 1;

        // if (Number(evt.currentTarget.dataset.sub) === 0){
        //     $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub!="' + subIndex + '"]').each(function () {
        //         $(this).addClass('d-none');
        //     })
        // }
        if (index) {
            // $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub!="0"]').addClass('d-none');

            const block = $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-index="' + index + '"][data-sub="' + subIndex + '"]');
            block.removeClass('d-none');
        }
    }, function (evt) {

        let subIndex = Number(evt.currentTarget.dataset.sub);
        console.log(subIndex);
        // const block = $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub="' + subIndex + 1 + '"]');
        // if (subIndex === 1){
        const block = $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub="' + subIndex + 1 + '"]');
        console.log(block);
        // if (subIndex > 0 && !Array.from(block).includes(evt.target.parentElement)) {
        block.each(function () {
            $(this).addClass('d-none');
        })
        //    }
        //  }
    })
})
