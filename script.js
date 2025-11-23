/* Data content for each language */
const content = {
    sk: {
        hero: `IMS, s.r.o. je mladá a dynamicky sa rozvíjajúca dopravno-logistická spoločnosť, založená v roku 2023 v Bratislave (Slovensko).
Ponúkame spoľahlivé riešenia v oblasti prepravy tovaru a logistiky v celej Európe.`,
        full: `Našou misiou je zabezpečiť pokoj a istotu našich klientov.
Chápeme, že každá zásielka je dôležitou súčasťou podnikania našich partnerov, preto sú všetky naše vozidlá vybavené GPS systémami a online monitorovaním, ktoré umožňujú sledovať pohyb nákladu v reálnom čase.
Naša práca je postavená na princípoch:
rýchlosti a presnosti,
spoľahlivosti a zodpovednosti,
individuálneho prístupu ku každému klientovi.

**Pre investorov a partnerov**
IMS, s.r.o. je otvorená spolupráci a správe dopravných jednotiek súkromných vlastníkov a spoločností.
Ponúkame skúsenosti, zodpovednosť a partnerský prístup, založený na dôvere, transparentnosti a vzájomnom prospechu.
Ak hľadáte spoľahlivého logistického partnera, sme pripravení na spoluprácu.`
    },
    en: {
        hero: `IMS, s.r.o. is a young and dynamically growing transport and logistics company founded in 2023 in Bratislava, Slovakia.
We provide reliable freight transport and logistics solutions across Europe.`,
        full: `Our mission is to ensure peace of mind and confidence for our clients.
We understand that every delivery is an essential part of our partners’ business, which is why all our vehicles are equipped with GPS systems and online tracking, allowing customers to monitor their shipments in real time.
IMS, s.r.o. operates based on the principles of:
speed and precision,
reliability and responsibility,
an individual approach to every client.

**For investors and partners**
IMS, s.r.o. is open to cooperation and the management of transport units from private owners and companies.
We offer experience, reliability, and a partnership-based approach, built on trust, transparency, and mutual benefit.
If you are looking for a dependable logistics partner, we are ready to collaborate.`
    },
    ru: {
        hero: `IMS, s.r.o. — молодая и динамично развивающаяся транспортно-логистическая компания, основанная в 2023 году в Братиславе (Словакия).
Мы предлагаем надёжные решения в области грузоперевозок и логистики по всей Европе.`,
        full: `Наша миссия — обеспечить спокойствие и уверенность клиентов.
Мы понимаем, что каждая доставка — это важная часть бизнеса наших партнёров, поэтому на всех наших транспортных средствах установлены GPS-системы и онлайн-мониторинг, позволяющие клиентам отслеживать перемещение груза в реальном времени.
Работа IMS, s.r.o. строится на принципах:
скорости и точности,
надёжности и ответственности,
индивидуального подхода к каждому клиенту.

**Для инвесторов и партнёров**
IMS, s.r.o. открыта к сотрудничеству и управлению транспортными единицами частных владельцев и компаний.
Мы предлагаем опыт, ответственность и партнёрский подход, основанный на доверии, прозрачности и взаимной выгоды.
Если вы ищете надёжного логистического партнёра — мы готовы к диалогу.`
    }
};

/* Format full text: create paragraphs, detect principles list, detect investor heading */
function formatFullText(rawText, lang) {
    const PRINCIPLES = [
        "rýchlosti a presnosti", "spoľahlivosti a zodpovednosti", "individuálneho prístupu ku každému klientovi",
        "speed and precision", "reliability and responsibility", "an individual approach to every client",
        "скорости и точности", "надёжности и ответственности", "индивидуального подхода к каждому клиенту"
    ];

    const PRINCIPLES_INTRO_REGEX = /(Naša práca je postavená na princípoch:|IMS, s\.r\.o\. operates based on the principles of:|Работа IMS, s\.r\.o\. строится на принципах:)/i;
    const INVESTOR_HEADER_REGEX = /(\*\*For investors and partners\*\*|\*\*Pre investorov a partnerov\*\*|\*\*Для инвесторов и партнёров\*\*)/i;

    const AFTER_PRINCIPLES_SECTION = {
        sk: `Realizujeme prepravy od 1 do 15 ton a v blízkej budúcnosti plánujeme rozšírenie vozového parku pre náklady do 22 ton.<br>
Našimi klientmi sú súkromné osoby, firmy a B2B partneri, ktorým ponúkame flexibilitu, transparentnosť a férové partnerstvo.<br><br>
Tím IMS, s.r.o. tvorí 8 profesionálov, spojených spoločným cieľom – rozvíjať sa, pomáhať klientom a dosahovať výsledky.<br>
Ceníme si zodpovednosť, presnosť, ochotu, spoľahlivosť a iniciatívu – vlastnosti, na ktorých stojí naša povesť a stabilita.<br><br>
Sme hrdí na to, že sme registrovaní v systéme Road Transport – Posting Declaration, čo nám umožňuje oficiálne pôsobiť na medzinárodných trasách v celej Európe aj mimo nej.<br>
V najbližších rokoch plánujeme rozšíriť vozový park a tím vodičov na 10 osôb do konca roku 2026, posilniť naše postavenie na trhu a implementovať nové technológie pre efektívnejšiu a transparentnejšiu prepravu.`,
        en: `We handle transport from 1 to 15 tons and are currently expanding our fleet to handle shipments up to 22 tons.<br>
Our clients include private individuals, companies, and B2B partners, to whom we offer flexibility, transparency, and fair partnership.<br><br>
The IMS, s.r.o. team consists of 8 dedicated professionals united by one goal: to grow, support our clients, and deliver results.<br>
We value commitment, punctuality, responsiveness, reliability, and initiative – the qualities that form the foundation of our reputation and stability.<br><br>
We are proud to be registered in the Road Transport – Posting Declaration system, which allows us to operate officially on international routes throughout Europe and beyond.<br>
In the coming years, we aim to expand our fleet and driver team to 10 members by the end of 2026, strengthen our market position, and implement new technologies to increase transport efficiency and transparency.`,
        ru: `Мы выполняем перевозки от 1 до 15 тонн, а в ближайшее время планируем расширение автопарка для обслуживания грузов до 22 тонн.<br>
Наши клиенты — частные лица, компании и партнёры B2B, которым мы предлагаем гибкость, прозрачность и честное партнёрство.<br><br>
Команда IMS, s.r.o. — это 8 профессионалов, объединённых общей целью: развиваться, помогать клиентам и достигать результата.<br>
Мы ценим исполнительность, пунктуальность, отзывчивость, ответственность и инициативность — качества, на которых основана наша репутация и стабильность.<br><br>
Мы гордимся тем, что зарегистрированы на Road Transport – Posting Declaration, что позволяет нам официально работать на международных маршрутах по всей Европе и за её пределами.<br>
В ближайшие годы мы стремимся увеличить автопарк и команду водителей до 10 человек к концу 2026 года, укрепить позиции на рынке и внедрять новые технологии для повышения эффективности и прозрачности перевозок.`
    };

    let mainContent = "";
    let secondaryContent = "";
    let investorContent = "";
    let principlesHandled = false;

    const blocks = rawText.split(/\n{2,}/).map(b => b.trim()).filter(Boolean);

    blocks.forEach(block => {
        if (INVESTOR_HEADER_REGEX.test(block)) {
            let investorBoxContent = block.replace(INVESTOR_HEADER_REGEX, (match, p1) => `<h3>${p1.replace(/\*\*/g, '').trim()}</h3>`).replace(/\*\*/g, '').replace(/\n/g, "<br>");
            investorContent += `<div class="investor-partner-box">${investorBoxContent}</div>`;
            return;
        }

        if (PRINCIPLES_INTRO_REGEX.test(block) && !principlesHandled) {
            principlesHandled = true;

            const introMatch = block.match(PRINCIPLES_INTRO_REGEX);
            const introText = introMatch[0].trim().replace(/:$/, '');
            const listStart = introMatch.index + introMatch[0].length;
            const listText = block.substring(listStart).trim();

            const matchedPrinciples = PRINCIPLES.filter(p => listText.toLowerCase().includes(p.toLowerCase()));

            mainContent += `<h3>${introText}</h3>
                <ul class="principles-list">
                    ${matchedPrinciples.map(p => `<li>${p}</li>`).join("")}
                </ul>`;

            mainContent += `<div class="after-principles-section">${AFTER_PRINCIPLES_SECTION[lang]}</div>`;
            return;
        }

        const formatted = `<p>${block.replace(/\n/g, "<br>")}</p>`;
        if (mainContent.length < 1500) {
            mainContent += formatted;
        } else {
            secondaryContent += formatted;
        }
    });

    return `
        <div class="main-about-text">${mainContent}</div>
        <div class="secondary-about-text">${secondaryContent}</div>
        ${investorContent}
    `;
}

/* Minimal HTML escaping helper */
function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Language switching and initial rendering */
function changeLanguage(lang) {
    const heroTextElement = document.getElementById('hero-about-us-text');
    const fullTextContainer = document.getElementById('full-about-us-container');
    const buttons = document.querySelectorAll('.lang-btn');

    heroTextElement.innerHTML = (content[lang].hero || '').replace(/\n/g, '<br>');
    fullTextContainer.innerHTML = formatFullText(content[lang].full || '', lang);

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if ((btn.dataset.lang || btn.textContent).toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

/* Initialize default language */
window.addEventListener('DOMContentLoaded', () => {
    changeLanguage('sk');
    setupStickyHeader();
});

/* NEW FUNCTION: Sticky Header Logic */
function setupStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    // Define the area at the top where the header should slide down
    const activationArea = 50; 
    let headerActive = false;

    document.addEventListener('mousemove', (e) => {
        // Only run logic on desktop (to avoid issues on touch devices)
        if (window.innerWidth <= 900) return; 

        // Check if the mouse is in the activation area and the page is scrolled down
        const isNearTop = e.clientY < activationArea;
        const isScrolled = window.scrollY > 0;

        if (isNearTop && isScrolled && !headerActive) {
            header.classList.add('active');
            headerActive = true;
        } else if (!isNearTop && headerActive) {
            header.classList.remove('active');
            headerActive = false;
        }
    });

    // Also make the header appear permanently when scrolled all the way to the top
    document.addEventListener('scroll', () => {
        if (window.innerWidth <= 900) return; 
        
        if (window.scrollY === 0) {
            header.classList.add('active');
            headerActive = true;
        } else if (window.scrollY > 0 && !headerActive) {
             // If scrolled away and header wasn't active (mouse wasn't near top), 
             // ensure it slides away if scroll is initiated from the middle of the screen.
             header.classList.remove('active');
             headerActive = false;
        }
    });

    // Ensure header is visible on page load if the user is at the very top
    if (window.scrollY === 0) {
        header.classList.add('active');
        headerActive = true;
    }
}