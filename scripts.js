document.addEventListener('DOMContentLoaded', function () {
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
        let closeButton = document.querySelector('.modal .close');
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
    }

    // Attach the openModal function to the "Book a Session" button
    let bookSessionButton = document.querySelector('.contact-btn');
    if (bookSessionButton) {
        bookSessionButton.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default link action
            openModal();
        });
    }

    // Attach closeModal listener on load
    addCloseModalListener();

    // Close the modal if the user clicks outside of it
    window.onclick = function (event) {
        let modal = document.getElementById("sessionModal");
        if (event.target == modal) {
            closeModal();
        }
    };

    // Function to switch the language
    function switchLanguage(lang) {
        language = lang;  // Update the global language variable

        const modalTitle = document.getElementById('modal-title');
        const modalEmail = document.getElementById('modal-email');
        const modalPhone = document.getElementById('modal-phone');


        if (language === 'ar') {
            document.title = 'مكتب محمد عز الرجال للمحاماة والاستشارات القانونية';
            let titleElement = document.getElementById('title');
            if (titleElement) {
                titleElement.innerHTML = 'مكتب محمد عز الرجال للمحاماة والاستشارات القانونية';
            }

            // Change text direction to RTL
            document.body.setAttribute('dir', 'rtl');

            // Navigation links
            document.getElementById('about-us-link').innerHTML = 'عن مكتبنا';
            document.getElementById('our-lawyers-link').innerHTML = 'محامونا';
            document.getElementById('services-link').innerHTML = 'الاستشارات';
            document.getElementById('clients-link').innerHTML = 'عملاؤنا';
            document.getElementById('contact-link').innerHTML = 'اتصل بنا';

            // News ticker
            document.querySelector('.news-ticker p').innerHTML = 'الأستشارات القانونية جزء لا يتجزأ من صميم عمل المحامي، فهو يوفر الوقاية من النزاعات المحتملة، ويجنب صاحب الاستشارة الكثير من المتاعب المحتملة ، ويرشده إلى أكثر الطرق أماناً واستقراراً ، ولهذا لا يقدم محامونا خدماتهم الاستشارية إلا بعد بحثٍ ودراسة معمقة .  ونؤسس لأصحاب المشاريع رؤية قانونية اقتصادية آمنة ومثمرة.';
            document.querySelector('.news-ticker').classList.remove('news-ticker-ltr');
            document.querySelector('.news-ticker').classList.add('news-ticker-rtl');

            // About Us Section
            document.getElementById('about-title').innerHTML = 'عن مكتب محمد عز الرجال للمحاماة والاستشارات القانونية';
            document.getElementById('about-text').innerHTML = 'تشهد أروقة المحاكم والدوائر الحكومية بخبرتنا الطويلة في أعمال المحاماة والتناضل القضائي، وتشهد أروابنا على الجدية والإتقان ، ويشهد عملاؤنا على التفاني والإنجاز  طوال سنوات خبرتنا في كافة فروع القانون .. فنحن نستثمر الخبرة ؛ فردية وجماعية  . ولأن نصوص القانون المصري وحده تجاوزت 5 ملايين نص، هذا بخلاف القانون الدولي الخاص والعام والاتفاقيات والدساتير الدولية، وكل فرع من فروع القانون يتكئ على الآخر، فالتخصص هو ما  يتيح لك التفوق، دون أن تفقد صلتك بزملائك في التخصصات القانونية الأخرى، بما يضمن تحقيق الهدف بكفاءة .. حيث يقدم مكتب محمد عز الرجال للمحاماة والاستشارات كافة خدمات التقاضي أمام المحاكم بكافة درجاتها وأنواعها ، مدني ، تجاري ، جنائي، إداري ، اقتصادي، تحكيم ، كلاً في تخصصه ، وهذا عمل يتطلب مؤسسة.';

            // Meet Our Lawyers Section
            document.getElementById('lawyers-title').innerHTML = 'تعرف على محامينا';
            document.getElementById('lawyer-name1').innerHTML = 'محمد عز الرجال';
            document.getElementById('lawyer-description1').innerHTML = 'المحامي بالاستئناف العالي ومجلس الدولة';
            document.querySelector('.contact-btn').innerHTML = 'احجز جلسة';

            // Modal Content Translation
            document.querySelector('.modal-content h3').innerHTML = 'تواصل مع محمد عز الرجال';
            document.querySelector('.modal-content p').innerHTML = 'البريد الإلكتروني: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a><br> الهاتف: <a href="tel:+20123456789">+ 20 123 456 789</a>';

            // Services Section
            document.getElementById('services').querySelector('h2').innerHTML = 'الاستشارات القانونية';

            // Modal title and content in Arabic
            updateServiceModalText('service-web', 'الاستشارات القانونية والاقتصادية', 'الاستشارات القانونية والاقتصادية', `1. تقديم المشورة القانونية.<br>
                2. كتابة وبحث كافة العقود المدنية والتجارية وعقود الشركات.<br>
                3. المرافعة وأقامة كافة القضايا أمام كافة المحاكم الجنائية (الجنح – الجنايات).<br>
                4. المرافعة وأقامة كافة القضايا المدنية أمام كافة المحاكم المدنية بجميع درجاتها.<br>
                5. المرافعة وأقامة كافة القضايا التجارية أمام كافة المحاكم التجارية بجميع درجاتها.<br>
                6. المرافعة وأقامة كافة القضايا العمالية أمام كافة المحاكم العمالية بجميع درجاتها.<br>
                7. المرافعة وأقامة كافة القضايا أمام المحاكم الاقتصادية بجميع درجاتها.<br>
                8. المرافعة وأقامة كافة الطعون الضريبية أمام كافة المحاكم بجميع درجاتها.<br>
                9. تسجيل جميع الوحدات بمأمورية الشهر العقاري والتوثيق.`);

            updateServiceModalText('service-mobile', 'تأسيس وتعديل وتوسيع الشركات', 'تأسيس وتعديل وتوسيع الشركات', `1. تقديم المشورة القانونية والاقتصادية قبل تأسيس شركتك.<br>
                2. تأسيس وإنشاء كافة شركات الأشخاص.<br>
                3. تأسيس وإنشاء كافة شركات الأموال وفق القانون 159 لسنة 1981.<br>
                4. تأسيس وإنشاء كافة شركات الأموال وفق القانون 72 لسنة 2017.<br>
                5. تعديل كافة الشركات (دمج – تغيير قوانين – إنهاء – تصفية – محو).<br>
                6. إنشاء فروع للشركات المصرية والأجنبية.<br>
                7. إنهاء ومنح إقامة المستثمرين وتجديدها.<br>
                8. خدمة تجديد السجل التجاري القائم.<br>
                9. القيد في سجل المصدرين والمستوردين واستخراج بطاقات الاستيراد والتصدير.<br>
                10. قيد الشركات الأجنبية بالهيئة العامة على الرقابة على الصادرات والواردات.`);

            updateServiceModalText('service-data', 'القضايا المدنية والاقتصادية والتجارية والجنائية', 'القضايا المدنية والاقتصادية والتجارية والجنائية', 'نحن نغطي القضايا المدنية، الاقتصادية، التجارية، والجنائية بفاعلية، مع التركيز على الاستشارات القانونية الدقيقة والإجراءات المحكمة لضمان النتائج المثلى.');

            updateServiceModalText('service-custom', 'قضايا ومحاكم الأسرة', 'قضايا ومحاكم الأسرة', `1. تقديم المشورة القانونية حول النزاعات الأسرية.<br>
                2. المرافعة والحضور وأقامة كافة القضايا أمام محاكم الأسرة بجميع درجاتها.<br>
                3. استصدار قرارات التمكين وتنفيذها.<br>
                4. قضايا النفقة بأنواعها وتنفيذها.`);

            updateServiceModalText('service-council', 'قضايا مجلس الدولة', 'قضايا مجلس الدولة', `1. تقديم المشورة القانونية حول القضايا الإدارية.<br>
                2. المرافعة والحضور وأقامة كافة الطعون أمام المحاكم الإدارية والتأديب.<br>
                3. المرافعة والحضور وأقامة كافة الطعون أمام القضاء الإداري.<br>
                4. المرافعة والحضور وأقامة كافة الطعون أمام المحكمة الإدارية العليا.<br>
                قضايا الإلغاء، التعويض، التأديب، العقود الإدارية، محو الاسم من السجلات الجنائية، التخطي في التعيين، تسويات الأفراد، ورصيد الإجازات.`);
            updateServiceModalText('service-contract', 'صياغة العقود', 'صياغة العقود', 'صياغة العقود تحتاج إلى مُحرر جيد قادر على بحث الفكرة قبل الكلمة، بحيث تقي الأطراف من النزاعات وتمنح العقد القوة القانونية والنفاذ.');
        updateServiceModalText('service-ip', 'حماية الملكية الفكرية', 'حماية الملكية الفكرية', 'نحن نقدم الحماية الكاملة لحقوق الملكية الفكرية، بما في ذلك العلامات التجارية والنماذج الصناعية وبراءات الاختراع.');
        updateServiceModalText('service-tax', 'الطعون الضريبية', 'الطعون الضريبية', 'لدينا قسم خاص بالشؤون المالية لتحرير مذكرات الطعون الضريبية وضمان أفضل النتائج.');
        updateServiceModalText('service-social', 'الخدمات الاجتماعية', 'الخدمات الاجتماعية', 'نحن نساهم في المبادرات والخدمات المجتمعية التي تحمي حقوق الإنسان.');
        updateServiceModalText('service-labor', 'قانون العمل', 'قانون العمل', 'نحرص على حماية حقوق العمال وضمان تنفيذ القوانين التي تكفل حقوقهم.');
        updateServiceModalText('service-admin', 'القانون الإداري', 'القانون الإداري', 'نحن نغطي القضايا المتعلقة بالقانون الإداري واللوائح التنظيمية التي تتعلق بالموظفين العموميين والمؤسسات الحكومية.');
        updateServiceModalText('service-Felonies', 'الجنايات', 'الجنايات', 'المتهم بريء حتى تثبت إدانته .. ولهذا فنحن ندافع بشرفٍ من أجل العدالة وإنفاذ القانون بما يوفر الطمأنينة للأفراد أمام الدولة.');

        // Contact Us Section
            document.getElementById('clients-title').innerHTML = 'عملاؤنا';
            document.getElementById('contact-title').innerHTML = 'اتصل بنا';
            document.getElementById('location-title').innerHTML = 'عنواننا';
            document.getElementById('contact-email').innerHTML =
            modalEmail.innerHTML = 'البريد الإلكتروني: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a>';
            document.getElementById('contact-phone').innerHTML = 
            modalPhone.innerHTML = 'الهاتف: <a href="tel:+201063606886"> ‎ +20 1063606886</a>';

            document.getElementById('follow-us').innerHTML =
                'تابعنا على: <a href="https://wa.me/message/C4DG267ASJ5HB1">واتساب</a> | ' +
                '<a href="https://www.facebook.com/mohamedezzelrega?mibextid=JRoKGi">فيسبوك</a> | ' +
                '<a href="https://t.me/+201063606886">تيليجرام</a>';
    
            // Footer
            document.querySelector('footer p').innerHTML =
                '&copy; 2024 مكتب محمد عز الرجال للمحاماة. جميع الحقوق محفوظة.';

                modalTitle.innerHTML = 'تواصل مع محمد عز الرجال';
                modalEmail.innerHTML = 'البريد الإلكتروني: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a>';
                modalPhone.innerHTML = 'الهاتف: <a href="tel:+201063606886"> ‎ +20 1063606886</a>';
    
        } else {
            // Switch to English
            document.title = 'MEE Law Firm - Legal Services';
            document.getElementById('title').innerHTML = 'MEE Law Firm';

            // Change text direction to LTR
            document.body.setAttribute('dir', 'ltr');

            // Navigation links
            document.getElementById('about-us-link').innerHTML = 'About Us';
            document.getElementById('our-lawyers-link').innerHTML = 'Our Lawyers';
            document.getElementById('services-link').innerHTML = 'Consultations';
            document.getElementById('clients-link').innerHTML = 'Our Clients';
            document.getElementById('contact-link').innerHTML = 'Contact';

            // News ticker
            document.querySelector('.news-ticker p').innerHTML = 'Legal consultations are an integral part of a lawyers core work. They provide protection from potential disputes, help the client avoid many possible troubles, and guide them toward the safest and most stable paths. This is why our lawyers only offer their consultation services after thorough research and deep study. We establish a secure and fruitful legal and economic vision for entrepreneurs.';
            document.querySelector('.news-ticker').classList.remove('news-ticker-rtl');
            document.querySelector('.news-ticker').classList.add('news-ticker-ltr');

            // About Us Section
            document.getElementById('about-title').innerHTML = 'About MEE Law Firm';
            document.getElementById('about-text').innerHTML = 'The halls of courts and government departments bear witness to our long-standing expertise in legal practice and litigation. Our robes reflect our seriousness and precision, and our clients testify to our dedication and achievements throughout the years in all branches of law. We invest in experience, both individually and collectively. Since the texts of Egyptian law alone exceed 5 million provisions, not to mention private and public international law, agreements, and international constitutions, each branch of law is interconnected. Specialization is what enables excellence without losing connection with colleagues in other legal specialties, ensuring that the goal is achieved efficiently. The law office of Mohamed EzzElRegal offers all litigation services before courts of all levels and types—civil, commercial, criminal, administrative, economic, and arbitration—each in its specialization. This requires an institution.';

            // Meet Our Lawyers Section
            document.getElementById('lawyers-title').innerHTML = 'Meet Our Lawyers';
            document.getElementById('lawyer-name1').innerHTML = 'Mohamed EzzAlRegal';
            document.getElementById('lawyer-description1').innerHTML = 'Attorney at High Court of Appeal and the Council of State';
            document.querySelector('.contact-btn').innerHTML = 'Book a Session';

            // Modal Content Translation
            document.querySelector('.modal-content h3').innerHTML = 'Contact Mohamed EzzAlRegal';
            document.querySelector('.modal-content p').innerHTML = 'Email: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a><br> Phone: <a href="tel:+20123456789">+20 123 456 789</a>';

            // Services Section
            document.getElementById('services').querySelector('h2').innerHTML = 'Services We Provide';

            // Modal title and content in English
            updateServiceModalText('service-web', 'Legal and Economic Consultations', 'Legal and Economic Consultations', `1. Providing legal advice.<br>
                2. Drafting and reviewing all civil, commercial, and corporate contracts.<br>
                3. Pleading and filing all criminal cases (misdemeanors and felonies) in all criminal courts.<br>
                4. Pleading and filing all civil cases in all civil courts of all levels.<br>
                5. Pleading and filing all commercial cases in all commercial courts of all levels.<br>
                6. Pleading and filing all labor cases in all labor courts of all levels.<br>
                7. Pleading and filing all economic cases in all economic courts of all levels.<br>
                8. Pleading and filing all tax appeals in all courts of all levels.<br>
                9. Registering all units with the real estate registration authority and notarization.`);

            updateServiceModalText('service-mobile', 'Establishing, Modifying, and Expanding Companies', 'Establishing, Modifying, and Expanding Companies', `1. Providing legal and economic advice before establishing your company.<br>
                2. Establishing and creating all partnerships.<br>
                3. Establishing and creating all corporations according to Law No. 159 of 1981.<br>
                4. Establishing and creating all corporations according to Law No. 72 of 2017.<br>
                5. Merging, law modifications, dissolutions, liquidations, and deletions.<br>
                6. Creating branches for Egyptian and foreign companies.<br>
                7. Completing and renewing investor residence permits.<br>
                8. Renewing existing commercial registrations.<br>
                9. Registering import and export cards for foreign companies.<br>
                10. Registering companies with the General Organization for Export and Import Control.`);

            updateServiceModalText('service-data', 'Civil, Economic, Commercial, and Criminal Cases', 'Civil, Economic, Commercial, and Criminal Cases', 'We cover civil, economic, commercial, and criminal cases with effective legal counsel, focusing on precise advice to guarantee optimal results.');

            updateServiceModalText('service-custom', 'Family Cases and Courts', 'Family Cases and Courts', `1. Providing legal advice on family disputes.<br>
                2. Pleading and attending all cases before family courts at all levels.<br>
                3. Obtaining and enforcing enabling orders.<br>
                4. Alimony cases of all types and their enforcement.`);

            updateServiceModalText('service-council', 'State Council Cases', 'State Council Cases', `1. Providing legal advice on administrative cases.<br>
                2. Pleading, attending, and filing all appeals before administrative and disciplinary courts.<br>
                3. Pleading, attending, and filing all appeals before the administrative judiciary.<br>
                4. Pleading, attending, and filing all appeals before the Supreme Administrative Court.<br>
                Administrative contracts, removal of names from criminal records, and more.`);
                updateServiceModalText('service-contract', 'Contract Drafting', 'Contract Drafting', 'Our contract drafting services ensure strong legal protection, preventing future disputes.');
                updateServiceModalText('service-ip', 'Intellectual Property Protection', 'Intellectual Property Protection', 'We provide full protection for intellectual property rights, including trademarks, industrial designs, and patents.');
                updateServiceModalText('service-tax', 'Tax Appeals', 'Tax Appeals', 'Our tax appeal department drafts memos and secures the best outcomes for tax appeals.');
                updateServiceModalText('service-social', 'Social Services', 'Social Services', 'We contribute to community initiatives that protect human rights.');
                updateServiceModalText('service-Felonies', 'Felonies Services', 'Felonies Services', 'The defendant is innocent until proven guilty... Therefore, we honorably defend justice and the enforcement of the law, ensuring individuals peace of mind before the state.');
                updateServiceModalText('service-admin', ' Administrative Law', 'We handle administrative law cases at all levels in the State Council courts, whether they relate to public employees, government institutions, decisions, regulations, or contracts.');
                updateServiceModalText('service-labor', 'Labor Law', 'Labor Law', 'The rights of workers are essential for their continued employment. We ensure that workers, often the weaker party, are protected against powerful corporations and economic forces.');

                // Contact Us Section.
            document.getElementById('clients-title').innerHTML = 'Our Clients';
            document.getElementById('contact-title').innerHTML = 'Contact Us';
            document.getElementById('location-title').innerHTML = 'Our Location';
            document.getElementById('contact-email').innerHTML = 
            modalEmail.innerHTML = 'Email: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a>';
            document.getElementById('contact-phone').innerHTML = 
            modalPhone.innerHTML = 'Phone: <a href="tel:+201063606886">+20 1063606886</a>';
            document.getElementById('follow-us').innerHTML = 'Follow us: <a href="https://wa.me/message/C4DG267ASJ5HB1">WhatsApp</a> | <a href="https://www.facebook.com/mohamedezzelrega?mibextid=JRoKGi">Facebook</a> | <a href="https://t.me/+201063606886">Telegram</a>';

            // Footer Section
            document.querySelector('footer p').innerHTML = '&copy; 2024 MEE Law Firm. All rights reserved.';
            modalTitle.innerHTML = 'Contact Mohamed EzzElRegal';
            modalEmail.innerHTML = 'Email: <a href="mailto:mezzalregal@lawfirm.com">mezzalregal@lawfirm.com</a>';
            modalPhone.innerHTML = 'Phone: <a href="tel:+201063606886">+20 1063606886</a>';

        }

        // Re-attach the event listener for the modal close button after language switch
        addCloseModalListener();
    }

    // Helper function to update service modal content
    function updateServiceModalText(serviceId, serviceTitle, modalTitle, modalContent) {
        let serviceTitleElement = document.getElementById(serviceId).querySelector('h3');
        if (serviceTitleElement) {
            serviceTitleElement.innerHTML = serviceTitle;
        }

        let modalTitleElement = document.getElementById(serviceId + '-modal').querySelector('h3');
        if (modalTitleElement) {
            modalTitleElement.innerHTML = modalTitle;
        }

        let modalContentElement = document.getElementById(serviceId + '-modal').querySelector('p');
        if (modalContentElement) {
            modalContentElement.innerHTML = modalContent;
        }
    }

    // Event Listeners for language switch
    document.querySelectorAll('.language-switch button').forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.innerHTML === 'العربية' ? 'ar' : 'en';
            switchLanguage(lang);
        });
    });

    // Initially set the news ticker to start based on the default language (English)
    document.querySelector('.news-ticker').classList.add('news-ticker-ltr');
});

// Function to open the service modal
function openServiceModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close the service modal
function closeServiceModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when user clicks outside of it
window.onclick = function (event) {
    let modals = document.querySelectorAll('.service-modal');
    modals.forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};
