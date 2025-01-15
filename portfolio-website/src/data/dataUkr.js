
const dataUkr = {
    header: {
        linkedIn: "LinkedIn",
        linkedInHref: "https://www.linkedin.com/in/iryna-smyrnova-74461a261/",
        email: "iryna.smyrnova12@gmail.com",
        emailHref: "mailto:iryna.smyrnova12@gmail.com",
        navItems: [["About", "Про мене"], ["Portfolio", "Портфоліо"], ["Experience", "Досвід"], ["Skills", "Навички"], ["CV", "Резюме"], ["Contacts", "Контакти"]],

    },
    mainSection: {
        about: {
            name: "ІРИНА СМИРНОВА",
            position: "FRONTEND DEVELOPER",
            description: `Пропоную якісну розробку сайтів, що відповідають принципам кросбраузерності та адаптивного дизайну. Верстка може 
            бути виконана за готовим макетом або з нуля – орієнтуючись на висловлені побажання щодо дизайну та структури сайту із використанням
             наданих матеріалів. За необхідності сторінки сайту можуть містити елементи векторної графіки та анімації. З прикладами моїх робіт можна детальніше ознайомитись у розділі Портфоліо.`,
            phoneNumber: "tel:+380676461393",
            phoneNumberTitle: "+38(067)646-13-93",
            location: "Львів, Україна"
        },
        portfolio: {
            heading: "Портфоліо",
            projects: [
                {
                    title: "Вебсайт компанії UAB «FerroMetals»",
                    description: `Розробка вебсайту UAB "Ferrometals" включала формування структури вебсайту (оформлення хедера, футера, 
                        навігаційної панелі та вебсторінок), реалізацію механізму зміни мови вебсторінки без перезавантаження сайту, 
                        реалізацію фукціоналу запиту на зворотній дзвінок та контакт-форми. Особливістю проекту є робота з графічним 
                        оформленням, представлена у десктопній версії сайту, що передбачала поглиблену роботу з SVG (адаптивна версія
                        сайту на вимогу замовника зберігає стартові співвідношення сторін геометричних фігур та градусну міру кутів
                        навіть при динамічній зміні розмірів екрану). `,
                    link: "https://ferrometals.netlify.app/",
                    linkTitle: "Відвідати сайт"
                },
                {
                    title: "Вебсайт для ФОП Кириллова Т.В.",
                    description: "Проєкт являє собою мультисторінковий вебсайт для оренди офісів у місті Дніпро. Структура вебсайту включає головну сторінку з основною інформацією та сторінки з детальнішим описом. Вебсайт також містить елементи анімації, впроваджені з використанням технології GSAP. ",
                    link: "https://smyrnova-iryna.github.io/HouseRent/",
                    linkTitle: "Відвідати сайт"
                }
            ]
        },
        experience: {
            heading: "Досвід роботи",
            job: [
                {
                    title: "Front-end Developer у AdversterX",
                    description: `На посаді Front-end Developer в AdversterX я відповідала за розробку landing page та багатосторінкових вебсайтів різної складності на основі макетів Figma, а також вносила зміни в існуючі проекти компанії з використанням таких технологій: Gulp, Pug, SCSS, VanillaJS. Окрім того, мала досвід виправлення багів інших розробників. За час роботи я реалізувала 63 повноцінні вебсайти.`,
                    date: "09.2024 - up to now"
                },
                {
                    title: "React Developer у ФОП Кириллова Т.В.",
                    description: `Відповідала за розробку вебсайту для оренди житла у місті Дніпро.`,
                    date: "01.2024 - до сьогодні"
                },
                {
                    title: "React developer в UAB «FerroMetals»",
                    description: `Відповідала за розробку корпоративного вебсайту компанії (за напрямком "Виробництво і продаж деревообробних верстатів").`, 
                    date: "02.2023 - 09.2024"
                },
            ], 
            volunteering: {
                title: "Волонтерство",
                subTitle: "HTML/CSS менторка у CodeClub",
                description: `В якості менторки-волонтерки у благодійній організації "Благодійний Фонд "Покоління.ЮЕЙ"" відповідала за викладання курсу HTML/CSS студентам вікової групи 12-15 років, що включало підготовку та проведення лекцій, підготовку та перевірку домашніх завдань.`,
                date: "04.2023 - 06.2023"
            },
            courses: {
                title: "Курси",
                coursesList: [
                    {
                        title: "React Online Marathon у Softserve IT Academy",
                        date: "10.2022 - 12.2022"
                    },
                    {
                        title: "HTML5/CSS3/JavaScript Fundamentals курс у Softserve IT Academy",
                        date: "09.2022 - 10.2022"
                    },
                    {
                        title: "Python Pro курс у Hillel IT School",
                        date: "02.2022 - 06.2022"
                    },
                    {
                        title: "Python Introduction курс у Hillel IT School ",
                        date: "10.2021 - 01.2022"
                    }
                ]
            },
            languages: {
                title: "Мови",
                languagesList: [
                    {
                        title: "Українська",
                        level: "Носій"
                    },
                    {
                        title: "Англійська",
                        level: "B2"
                    }
                ]
            }
        },
        skills: {
            heading: "Навички",
            hardSkills: {
                title: "Хард скілс",
                skillsList: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Sass", "Tailwind CSS",  "Styled components", "MUI", "GSAP", "Git"]
            },
            softSkills: {
                title: "Софт скілс",
                skillsList: ["Командна робота", "Управління часом", "Критичне мислення", "Комунікабельність", "Креативність", "Здібність до навчання", "Увага до деталей"]
            }
        },
        cV:  {
            heading: "Резюме",
            download: "Завантажити",
            view: "Переглянути"
        },
        contactMe: {
            heading: "Контакти",
            contactsList: {
                github: "https://github.com/smyrnova-iryna"
            },
            contactForm: {
                title: "Зв'язатись зі мною",
                name: "Ім'я",
                subject: "Повідомлення",
                contactInformation: "Контактна інформація",
                submitText: "Надіслати"
            }
        }
    },
    footer: {
        contacts: {
            phone: "Дзвінок",
            email: "Електронна пошта",
            linkedIn: "LinkedIn",
            github: "Github"
        }
    }
}

export default dataUkr