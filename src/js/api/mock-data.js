
module.exports.textFieldData = [
    {
        borderClass: 'd-flex flex-column flex-sm-row',
        type: 'PromoTextFields',
        child: {
            name: 'promocode',
            placeholder: 'NJTON564YNN565N56',
            title: 'Если для получения скидки необходимо вводить код',
            subtitle: '(например интернет-магазин), то вы можете указать его здесь.  Если ничего вводить не нужно, то оставьте поле пустым.',
            label: 'Код для скидки',
            validations: false,
            inputClassName: '',
            borderClass:"",
            header: 'd-flex flex-column',
            type: 'TextField',
            data: '',
            state: true
        }
    },
    {
        borderClass: 'd-flex flex-column flex-sm-row',
        type: 'PromoTextFields',
        child: {
            name: 'sale_min',
            placeholder: '1000',
            title: 'Если скидка действует при заказе от определенной суммы,',
            subtitle: ' то необходимо указать откакой суммы именно. Если скидка действует независимо от суммы заказа, то оставьте поле пустым.',
            label: 'Скидка действует при заказе от',
            inputType:'number',
            validations: false,
            toggled: [3,4,5,6],
            inputClassName: 'promo-form__input--price',
            borderClass: '',
            type: 'TextField',
            data: '',
            state: true
        }
    },
    {
        borderClass: 'd-flex flex-column',
        type: 'PromoCheckboxes',
        child:
            {
                name: 'sale_min',
                placeholder: '',
                title: 'Если у вас есть бесплатная доставка, то вы можете отметить этот пункт.',
                subtitle: 'Если бесплатной доставки нет, то ничего отмечать не нужно.',
                label: '',
                inputClassName: '',
                borderClass: ' d-flex',
                type: 'Checkbox',
                toggled: [6],
                data: '',
                child: {
                    name: 'sale_min',
                    placeholder: '1000',
                    title: 'Есть бесплатная доставка',
                    subtitle: 'Если бесплатная доставка действует при заказе от определенной суммы, то необходимо указать это здесь.',
                    label: 'Действует при заказе от',
                    type: 'TextField',
                    validations: false,
                    inputType:'number',
                    titleClass:'flex-column flex-sm-row promo-form__border mt-3 pt-3 p-r',
                    inputClassName: 'promo-form__input--price',
                    borderClass: '',
                    data: '',
                    state: false
                },
                state: false,
            }
    },
    {
        borderClass: 'flex-column',
        type: 'PromoTextFields',
        id: 'title',
        state:true,
        child: {
            name: 'sale_name',
            placeholder: 'Скидки до 30% в Desigual! Зарядись энергией Desigual!',
            title: 'Введите заголовок (названии акции), максимум 64 символа.',
            subtitle: 'Лайфхак: вы можете указать в заголовке имя своего бренда (пример в строке), что поможет пользователям отслеживать все ваши акции и возможно сделает вас более узнаваемым.',
            label: '',

            validations: true,
            type: 'TextField',
            inputClassName: 'promo-form__input--number w-100',
            width: 'w-100',
            borderClass: 'w-100',
            header: 'w-100 d-flex flex-column',
            data: '',
            state: true
        }
    },
    {
        borderClass: 'd-flex flex-column w-100',
        type: 'PromoCheckboxes',
        child: {
            name: Math.random(),
            placeholder: '',
            title: 'Если у вас есть видео на YouTube о том, чем вы занимаетесь',
            subtitle: ' или продаете, вы можете указать здесь ссылку на него.',
            label: '',
            inputClassName: '',
            type: 'Checkbox',
            width: 'w-100 ',
            borderClass: 'd-flex  w-100',
            header: 'w-100 d-flex flex-column',
            data: '',
            child: {
                name: 'sale_name',
                placeholder: 'https://www.youtube.com/watch?v=4kwHJWwJxnU',
                title: '',
                subtitle: '',
                type: 'TextField',
                validations: false,
                label: 'Ссылка на ролик',
                titleClass:'mt-3',
                inputType:'url',
                pattern:'http(?:s?):\\/\\/(?:www\\.)?youtu(?:be\\.com\\/watch\\?v=|\\.be\\/)([\\w\\-\\_]*)(&(amp;)?‌​[\\w\\?‌​=]*)?',
                inputClassName: 'w-100',
                borderClass: 'w-100 promo-form__border pt-3 p-r',
                width: 'w-100 mt-2 pt-2',
                header: 'd-none',
                data: '',
                state: false
            },
            state: false,
        },

    },
]

module.exports.social = [
    {name: 'Веб-сайт', url: '', id: 1, value: [{id: 1, data: ''}], status: true},
    {name: 'Электронная почта', id: 2, value: [{id: 1, data: '12'}], url: '', status: false},
    {name: 'Вконтакте', id: 3, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Instagram', id: 4, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Youtube', id: 5, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'LinkedIn', id: 6, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Одноклассники', id: 7, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'МойМир', id: 8, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'MainFace', id: 9, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Twitter', id: 10, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Tumblr', id: 11, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Pinterest', id: 12, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Foursquare', id: 13, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Telegram', id: 14, value: [{id: 1, data: ''}], url: '', status: true},
    {name: 'WhatsUp', id: 15, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Viber', id: 16, value: [{id: 1, data: ''}], url: '', status: false},
    {name: 'Skype', id: 17, value: [{id: 1, data: ''}], url: '', status: false}
]

module.exports.types = [
    {name: 'Просто скидка', status: false},
    {name: 'Купон на скидку', status: false},
    {name: 'Подарок при покупке', status: false},
    {name: '2 по цене 1', status: false},
    {name: '3 по цене 2', status: false},
    {name: 'Кэшбек', status: false},
    {name: 'Конкурс', status: false},
]

module.exports.validation = {
    type: false,
    area: false,
    title: false,
    city: false,
    days: false,
    agreement: false
}