// 1. قاعدة بيانات الحلقات (تقدر تضيف حلقات هنا بسهولة)
const animeData = [
    {
        title: "ون بيس - One Piece",
        episode: "1100",
        image: "https://image.tmdb.org/t/p/w500/i9Y5vR3f1GjH5m5x6Y5U5z6X6X6.jpg", // رابط صورة حقيقي
        link: "https://example.com/download/op1100",
        quality: "HD"
    },
    {
        title: "سولو ليفيلنج - Solo Leveling",
        episode: "12",
        image: "https://image.tmdb.org/t/p/w500/geCR7oMQCUcnnnPcQmZqrL6H6ST.jpg",
        link: "https://example.com/download/sl12",
        quality: "FHD"
    },
    {
        title: "جوجوتسو كايسن - Jujutsu Kaisen",
        episode: "24",
        image: "https://image.tmdb.org/t/p/w500/hEba8YpS6YmSr6GnJhT66nuUaac.jpg",
        link: "https://example.com/download/jjk24",
        quality: "HD"
    }
];

// 2. وظيفة عرض الحلقات في الصفحة
function displayEpisodes() {
    const grid = document.querySelector('.anime-grid');
    if (!grid) return;

    // مسح المحتوى الحالي (لو فيه)
    grid.innerHTML = '';

    // المرور على كل أنمي في المصفوفة وإنشاء الكارت الخاص به
    animeData.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';

        card.innerHTML = `
            <div class="badge">${anime.quality}</div>
            <img src="${anime.image}" alt="${anime.title}">
            <div class="info">
                <h3>${anime.title} - حلقة ${anime.episode}</h3>
                <button class="dl-btn" onclick="window.open('${anime.link}', '_blank')">تحميل / مشاهدة</button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// 3. وظائف نافذة المطور (Modal)
function showDev() {
    const modal = document.getElementById('devModal');
    if (modal) modal.style.display = 'flex';
}

function closeDev() {
    const modal = document.getElementById('devModal');
    if (modal) modal.style.display = 'none';
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    const modal = document.getElementById('devModal');
    if (event.target == modal) {
        closeDev();
    }
}

// 4. تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayEpisodes();
    console.log("LORD ANIME Engine Started...");
});
