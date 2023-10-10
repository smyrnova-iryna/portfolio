
const dataUkr = {
    header: {
        linkedIn: "LinkedIn",
        linkedInHref: "https://www.linkedin.com/in/iryna-smyrnova-74461a261/",
        email: "iryna.smyrnova12@gmail.com",
        emailHref: "mailto:iryna.smyrnova12@gmail.com",
        navItems: ["Про мене", "Портфоліо", "Досвід", "Навички", "Резюме", "Контакти"],

    },
    mainSection: {
        about: {
            name: "Ірина Смирнова",
            position: "JUNIOR FRONT-END DEVELOPER",
            description: `Поки без перекладу`,
            phoneNumber: "tel:+380676461393",
            phoneNumberTitle: "+38(067)646-13-93",
            location: "Львів, Україна"
        },
        portfolio: {
            heading: "Портфоліо",
            projects: [
                {
                    title: "Вебсайт компанії UAB «FerroMetals»",
                    description: `Поки без перекладу№2`,
                    link: "https://ferrometals.netlify.app/",
                    linkTitle: "Відвідати сайт"
                }
            ],
            petProjects: {
                heading: "Пет проєкти",
                projects: [
                    {
                        title: "Портфоліо",
                        technologies: "React, GSAP",
                        link: "https://github.com/smyrnova-iryna/portfolio"
                    },
                    {
                        title: "Форма зворотнього зв'язку",
                        technologies: "React, Styled components",
                        link: "https://github.com/smyrnova-iryna/contact-us-form"
                    },
                    {
                        title: "Шаблон вебсайту меблевої компанії",
                        technologies: "HTML, CSS",
                        link: "https://github.com/smyrnova-iryna/furniture"
                    }
                ]
            }
        },
        experience: {
            heading: "Досвід роботи",
            job: {
                title: "React розробниця в UAB «FerroMetals»",
                description: `Поки без перекладу`,
                date: "02.2023 - до сьогодні"
            },
            volunteering: {
                title: "Волонтерство",
                subTitle: "HTML/CSS менторка у CodeClub",
                description: `Поки без перекладу`,
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
                title: "Жорсткі навички",
                skillsList: ["HTML", "CSS", "JavaScript", "React", "Styled components", "MUI", "GSAP", "Git"]
            },
            softSkills: {
                title: "М'які навички",
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