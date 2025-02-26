const translations = {
    en: {
        title: 'Ramadan Greeting Generator',
        enter_name: 'Enter your name:',
        generate: 'Generate Link',
        copy: 'Copy',
        view: 'View',
        name_required: 'Please enter a name',
        copied: 'Copied!'
    },
    ru: {
        title: 'Генератор поздравлений с Рамаданом',
        enter_name: 'Введите ваше имя:',
        generate: 'Получить ссылку',
        copy: 'Скопировать',
        view: 'Посмотреть',
        name_required: 'Пожалуйста, введите имя',
        copied: 'Скопировано!'
    },
    uz: {
        title: 'Ramazon tabrik generatori',
        enter_name: 'Ismingizni kiriting:',
        generate: 'Havola yaratish',
        copy: 'Nusxa olish',
        view: 'Ko\'rish',
        name_required: 'Iltimos, ismingizni kiriting',
        copied: 'Nusxalandi!'
    },
    ar: {
        title: 'مولد تهنئة رمضان',
        enter_name: 'أدخل اسمك:',
        generate: 'إنشاء رابط',
        copy: 'نسخ',
        view: 'عرض',
        name_required: 'الرجاء إدخال الاسم',
        copied: 'تم النسخ!'
    },
    tj: {
        title: 'Генератори табрикоти Рамазон',
        enter_name: 'Номи худро ворид кунед:',
        generate: 'Эҷоди пайванд',
        copy: 'Нусхабардорӣ',
        view: 'Дидан',
        name_required: 'Лутфан номро ворид кунед',
        copied: 'Нусхабардорӣ шуд!'
    }
};

let currentLang = 'en';
let generatedUrl = '';

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-text').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.getElementById("copy-btn").style="border-radius: 0 10px 10px 0;"
        document.getElementById("view-btn").style="border-radius: 10px 0 0 10px;"
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.getElementById("copy-btn").style="border-radius: 10px 0 0 10px;"
        document.getElementById("view-btn").style="border-radius: 0 10px 10px 0;"
    }
}

document.querySelectorAll('.language-selector button').forEach(button => {
    button.addEventListener('click', () => {
        updateLanguage(button.getAttribute('data-lang'));
    });
});

document.querySelector('.generate-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert(translations[currentLang].name_required);
        return;
    }

    const url = new URL(window.location.href);
    url.pathname = 'Ramadan-Kareem/templates/greeting.html';
    url.searchParams.set('name', encodeURIComponent(name));
    url.searchParams.set('lang', currentLang);

    generatedUrl = url.toString();
    const resultSection = document.querySelector('.result-section');
    document.getElementById('generated-link').value = generatedUrl;
    resultSection.style.display = 'flex';
    setTimeout(() => resultSection.classList.add('show'), 50);
});

document.querySelector('.copy-btn').addEventListener('click', () => {
    const linkInput = document.getElementById('generated-link');
    linkInput.select();
    document.execCommand('copy');

    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = `<i class="fas fa-check"></i> ${translations[currentLang].copied}`;
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
    }, 2000);
});

document.querySelector('.view-btn').addEventListener('click', () => {
    window.location.href = generatedUrl;
});

// Initialize with English
updateLanguage('en');