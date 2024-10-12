document.addEventListener('DOMContentLoaded', function() {
    let language = 'en';  // Default language is set to English

    // Function to open the modal
    function openModal() {
        document.getElementById("sessionModal").style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById("sessionModal").style.display = "none";
    }

    // Function to attach closeModal listener to the close button
    function addCloseModalListener() {
        document.querySelector('.modal .close').addEventListener('click', closeModal);
    }

    // Attach the openModal function to the "Book a Session" button
    document.querySelector('.contact-btn').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link action
        openModal();
    });

    // Attach closeModal listener on load
    addCloseModalListener();

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        let modal = document.getElementById("sessionModal");
        if (event.target == modal) {
            closeModal();
        }
    };

    // Function to switch the language
    function switchLanguage(lang) {
        language = lang;  // Update the global language variable

        if (language === 'ar') {
            document.title = 'مكتب محمد عز الرجال للمحاماة والاستشارات القانونية';
            document.getElementById('title').innerHTML = 'مكتب محمد عز الرجال للمحاماة والاستشارات القانونية';

            // Change text direction to RTL
            document.body.setAttribute('dir', 'rtl');

            // Navigation links
            document.getElementById('about-us-link').innerHTML = 'عن مكتبنا';
            document.getElementById('our-lawyers-link').innerHTML = 'محامونا';
            document.getElementById('contact-link').innerHTML = 'اتصل بنا';

            // News ticker
            document.querySelector('.news-ticker p').innerHTML = 'مرحباً بكم في مكتب محمد عز الرجال! بخبرة تزيد عن 15 عامًا في تقديم الاستشارات القانونية والاقتصادية المتخصصة، نحن هنا لدعمك في جميع احتياجاتك القانونية. سواء كانت مدنية أو اقتصادية أو قانون الأسرة، فإن فريقنا المتخصص جاهز لتقديم أفضل الاستشارات القانونية والتمثيل القانوني في جميع أنحاء مصر وخارجها.';
            document.querySelector('.news-ticker').classList.remove('news-ticker-ltr');
            document.querySelector('.news-ticker').classList.add('news-ticker-rtl');

            // About Us Section
            document.getElementById('about-title').innerHTML = 'عن مكتب محمد عز الرجال للمحاماة والاستشارات القانونية';
            document.getElementById('about-text').innerHTML = 'نحن متخصصون في تقديم الاستشارات القانونية والاقتصادية، وتسهيل تأسيس وإعادة هيكلة وتوسيع الشركات في جميع أنحاء جمهورية مصر العربية، والتعامل مع مجموعة واسعة من القضايا المدنية والاقتصادية والتجارية والجنائية، وتقديم خدمات مخصصة في قانون الأسرة والتمثيل أمام محاكم الأسرة، بالإضافة إلى إدارة القضايا أمام مجلس الدولة بدقة واستشارات مدروسة في المسائل الإدارية.';

            // Meet Our Lawyers Section
            document.getElementById('lawyers-title').innerHTML = 'تعرف على محامينا';
            document.getElementById('lawyer-name1').innerHTML = 'محمد عز الرجال';
            document.getElementById('lawyer-description1').innerHTML = 'المحامي بالاستئناف العالي ومجلس الدولة';
            document.getElementById('lawyer-brief1').innerHTML = 'المستشار القانوني لشركة بتروجستكس لخدمات البترول بمصر';
            document.querySelector('.contact-btn').innerHTML = 'احجز جلسة';

            // Modal Content Translation
            document.querySelector('.modal-content h3').innerHTML = 'تواصل مع محمد عز الرجال';
            document.querySelector('.modal-content p').innerHTML = 'البريد الإلكتروني: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a><br> الهاتف: <a href="tel:+20123456789">+20 123 456 789</a>';

            // Services Section
            document.getElementById('services').querySelector('h2').innerHTML = 'الخدمات التي نقدمها';
            document.getElementById('service-web').querySelector('h3').innerHTML = 'الاستشارات القانونية والاقتصادية';
            document.getElementById('service-mobile').querySelector('h3').innerHTML = 'تأسيس وتعديل وتوسيع الشركات';
            document.getElementById('service-data').querySelector('h3').innerHTML = 'القضايا المدنية والاقتصادية والتجارية والجنائية';
            document.getElementById('service-custom').querySelector('h3').innerHTML = 'قضايا ومحاكم الأسرة';
            document.getElementById('service-custom').nextElementSibling.querySelector('h3').innerHTML = 'قضايا مجلس الدولة';

            // Contact Us Section
            document.getElementById('contact-title').innerHTML = 'اتصل بنا';
            document.getElementById('contact-info').innerHTML = 'البريد الإلكتروني: info@mee-lawfirm.com | الهاتف: +20 1234 567 890';
            document.getElementById('follow-us').innerHTML = 'تابعنا على: <a href="#">لينكدإن</a> | <a href="#">فيسبوك</a> | <a href="#">تويتر</a>';

            // Footer Section
            document.querySelector('footer p').innerHTML = '&copy; 2024 مكتب محمد عز الرجال للمحاماة. جميع الحقوق محفوظة.';
            
        } else {
            // Switch to English
            document.title = 'MEE Law Firm - Legal Services';
            document.getElementById('title').innerHTML = 'MEE Law Firm';

            // Change text direction to LTR
            document.body.setAttribute('dir', 'ltr');

            // Navigation links
            document.getElementById('about-us-link').innerHTML = 'About Us';
            document.getElementById('our-lawyers-link').innerHTML = 'Our Lawyers';
            document.getElementById('contact-link').innerHTML = 'Contact';

            // News ticker
            document.querySelector('.news-ticker p').innerHTML = 'Welcome to MEE Law Firm! With over 15 years of experience in providing expert legal and economic consultations, we are here to support you with all your legal needs. Whether it’s civil, economic, or family law, our dedicated team is ready to offer the best legal counsel and representation across Egypt and beyond.';
            document.querySelector('.news-ticker').classList.remove('news-ticker-rtl');
            document.querySelector('.news-ticker').classList.add('news-ticker-ltr');

            // About Us Section
            document.getElementById('about-title').innerHTML = 'About MEE Law Firm';
            document.getElementById('about-text').innerHTML = 'We specialize in providing expert legal and economic consultations, facilitating the establishment, restructuring, and expansion of companies across the Arab Republic of Egypt, handling a wide range of civil, economic, commercial, and criminal cases, offering dedicated services for family law and representation in family courts, and managing cases before the State Council with precise, well-researched counsel in administrative matters.';

            // Meet Our Lawyers Section
            document.getElementById('lawyers-title').innerHTML = 'Meet Our Lawyers';
            document.getElementById('lawyer-name1').innerHTML = 'Mohamed EzzAlRegal';
            document.getElementById('lawyer-description1').innerHTML = 'Attorney at High Court of Appeal and the Council of State';
            document.getElementById('lawyer-brief1').innerHTML = 'Legal Advisor for Petrogistix Egypt Petroleum Services';
            document.querySelector('.contact-btn').innerHTML = 'Book a Session';

            // Modal Content Translation
            document.querySelector('.modal-content h3').innerHTML = 'Contact Mohamed EzzAlRegal';
            document.querySelector('.modal-content p').innerHTML = 'Email: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a><br> Phone: <a href="tel:+20123456789">+20 123 456 789</a>';

            // Services Section
            document.getElementById('services').querySelector('h2').innerHTML = 'Services We Provide';
            document.getElementById('service-web').querySelector('h3').innerHTML = 'Legal and Economic Consultations';
            document.getElementById('service-mobile').querySelector('h3').innerHTML = 'Establishing, modifying and expanding companies';
            document.getElementById('service-data').querySelector('h3').innerHTML = 'Civil, economic, commercial, and criminal cases';
            document.getElementById('service-custom').querySelector('h3').innerHTML = 'Family cases and courts';
            document.getElementById('service-custom').nextElementSibling.querySelector('h3').innerHTML = 'State Council Cases';

            // Contact Us Section
            document.getElementById('contact-title').innerHTML = 'Contact Us';
            document.getElementById('contact-info').innerHTML = 'Email: info@mee-lawfirm.com | Phone: +20 1234 567 890';
            document.getElementById('follow-us').innerHTML = 'Follow us: <a href="#">LinkedIn</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a>';

            // Footer Section
            document.querySelector('footer p').innerHTML = '&copy; 2024 MEE Law Firm. All rights reserved.';
        }

        // Re-attach the event listener for the modal close button after language switch
        addCloseModalListener();
    }

    // Event Listeners for language switch
    document.querySelectorAll('.language-switch button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.innerHTML === 'العربية' ? 'ar' : 'en';
            switchLanguage(lang);
        });
    });

    // Initially set the news ticker to start based on the default language (English)
    document.querySelector('.news-ticker').classList.add('news-ticker-ltr');
});
