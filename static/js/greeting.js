const greetings = {
    ru: {
        text: 'Ассаляму алейкум! Поздравляю с наступающим Рамаданом! Пусть этот благословенный месяц принесёт мир, радость и духовное очищение. Желаю здоровья, благополучия и успехов! С уважением, [name].',
        generate_btn: 'Сгенерировать поздравление'
    },
    en: {
        text: 'As-salamu alaykum! Congratulations on the upcoming Ramadan! May this blessed month bring you peace, joy, and spiritual growth. Wishing you health, prosperity, and success! Best regards, [name].',
        generate_btn: 'Generate Greeting'
    },
    uz: {
        text: 'Assalomu alaykum! Yaqinlashib kelayotgan Ramazon oyi bilan tabriklayman! Ushbu muborak oy sizga tinchlik, quvonch va ma\'naviy yuksalish olib kelsin. Sog\'lik, farovonlik va muvaffaqiyat tilayman! Hurmat bilan, [name].',
        generate_btn: 'Tabrik yaratish'
    },
    ar: {
        text: 'السلام عليكم! أهنئكم بمناسبة اقتراب شهر رمضان المبارك! أسأل الله أن يملأ هذا الشهر حياتكم بالسلام والفرح والتقوى. أتمنى لكم الصحة والبركة والنجاح! مع الاحترام، [name].',
        generate_btn: 'إنشاء تهنئة'
    },
    tj: {
        text: 'Ассалому алайкум! Шуморо бо фарорасии моҳи мубораки Рамазон табрик менамоям! Бигзор ин моҳи пурбаракат ба шумо сулҳ, шодӣ ва покизагии рӯҳонӣ оварад. Ба шумо сиҳатӣ, фаровонӣ ва комёбиҳо таманно дорам! Бо эҳтиром, [name].',
        generate_btn: 'Эҷоди табрик'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = decodeURIComponent(urlParams.get('name') || '');
    const lang = urlParams.get('lang') || 'en';

    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }

    const greetingText = greetings[lang].text.replace('[name]', name);
    document.getElementById('greeting-text').textContent = greetingText;

    // Add generate button after delay
    setTimeout(() => {
        const generateBtn = document.createElement('button');
        generateBtn.className = 'btn btn-primary generate-new-btn';
        generateBtn.innerHTML = `<i class="fas fa-magic"></i> ${greetings[lang].generate_btn}`;
        generateBtn.style.opacity = '0';
        document.querySelector('.greeting-content').appendChild(generateBtn);

        // Trigger animation
        setTimeout(() => {
            generateBtn.style.transition = 'opacity 1s ease-in';
            generateBtn.style.opacity = '1';
        }, 100);

        generateBtn.addEventListener('click', () => {
            window.location.href = '/Ramadan-Kareem/templates/index.html';
        });
    }, 5000);

    // Add fade-in animation for the card
    document.querySelector('.greeting-card').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.greeting-card').style.transition = 'opacity 1s ease-in';
        document.querySelector('.greeting-card').style.opacity = '1';
    }, 100);
});