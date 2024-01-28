
const dataEn = {
    header: {
        linkedIn: "LinkedIn",
        linkedInHref: "https://www.linkedin.com/in/iryna-smyrnova-74461a261/",
        email: "iryna.smyrnova12@gmail.com",
        emailHref: "mailto:iryna.smyrnova12@gmail.com",
        navItems: [["About", "About"], ["Portfolio", "Portfolio"], ["Experience", "Experience"], ["Skills", "Skills"], ["CV", "CV"], ["Contacts", "Contacts"]],

    },
    mainSection: {
        about: {
            name: "IRYNA SMYRNOVA",
            position: "FRONTEND DEVELOPER",
            description: `I offer high-quality site development that complies principles of cross-browser
             compatibility and adaptive design. Layout can be done according to a ready-made layout design 
             or according to the whishes given regarding the design and structure of the site and the materials
              avaliable. If necessary the site pages can place elements of vector graphics and animation. Examples
               of my projects can be found more detailed in the Portfolio section.`,
            phoneNumber: "tel:+380676461393",
            phoneNumberTitle: "+38(067)646-13-93",
            location: "Lviv, Ukraine"
        },
        portfolio: {
            heading: "Portfolio",
            projects: [
                {
                    title: "UAB «FerroMetals» company`s website",
                    description: 'Development of UAB "Ferrometals" company`s website included formation of the website structure (header, footer, navigation panel and web pages), implementation of mechanism of instant changing language without reloading the site, implementation of callback request function and contact form. A feature of the project is work with complicated graphic design, presented in the desktop version of the site, which included in-depth work with SVG (adaptive version of the site retains the initial aspect ratios of geometric shapes and degree measures of angles even with dynamic changes in screen size).',
                    link: "https://ferrometals.netlify.app/",
                    linkTitle: "Go to site"
                },
                {
                    title: "Website for Individual Entrepreneur Kyryllova T.V.",
                    description: "The project represents multipage website for renting offices in Dnipro city, Ukraine. It's structure contains main page with common information and details pages. The website also includes animation implemented using GSAP technology (glowing windows on the house icons, tickers in the details description etc).",
                    link: "https://smyrnova-iryna.github.io/HouseRent/",
                    linkTitle: "Go to site (development in progress)"
                }
            ],
            petProjects: {
                heading: "Pet projects",
                projects: [
                    {
                        title: "Portfolio",
                        technologies: "React, GSAP",
                        link: "https://github.com/smyrnova-iryna/portfolio"
                    },
                    {
                        title: "Contact-us form",
                        technologies: "React, Styled components",
                        link: "https://github.com/smyrnova-iryna/contact-us-form"
                    },
                    {
                        title: "Furniture company website template",
                        technologies: "HTML, CSS",
                        link: "https://github.com/smyrnova-iryna/furniture"
                    }
                ]
            }
        },
        experience: {
            heading: "Experience",
            job: [{
                title: "React developer in UAB «FerroMetals»",
                description: `I was responsible for developing of the company's 
                corporate website (in the activity "Woodworking machines production 
                and sale").`,
                date: "02.2023 - up to now"
            },
            {
                title: "React Developer in Individual Entrepreneur Kyryllova T.V.",
                description: `I was responsible for developing the website for renting offices in Dnipro city, Ukraine.`,
                date: "01.2024 - up to now"
            },
        ],
            volunteering: {
                title: "Volunteering",
                subTitle: "HTML/CSS mentor in CodeClub",
                description: `As a volunteer mentor in the charitable organization "The Charitable Foundation "Покоління.ЮЕЙ"" I was responsible for teaching HTML/CSS course for students in the age group of 12-15 years including preparation and presentation of lectures, preparation and checking of homeworks.`,
                date: "04.2023 - 06.2023"
            },
            courses: {
                title: "Courses",
                coursesList: [
                    {
                        title: "React Online Marathon in Softserve IT Academy",
                        date: "10.2022 - 12.2022"
                    },
                    {
                        title: "HTML5/CSS3/JavaScript Fundamentals course in Softserve IT Academy",
                        date: "09.2022 - 10.2022"
                    },
                    {
                        title: "Python Pro in Hillel IT School",
                        date: "02.2022 - 06.2022"
                    },
                    {
                        title: "Python Introduction in Hillel IT School ",
                        date: "10.2021 - 01.2022"
                    }
                ]
            },
            languages: {
                title: "Languages",
                languagesList: [
                    {
                        title: "Ukrainian",
                        level: "Native"
                    },
                    {
                        title: "English",
                        level: "B2"
                    }
                ]
            }
        },
        skills: {
            heading: "Skills",
            hardSkills: {
                title: "Hard skills",
                skillsList: ["HTML", "CSS", "JavaScript", "React", "Styled components", "MUI", "GSAP", "Git"]
            },
            softSkills: {
                title: "Soft skills",
                skillsList: ["Teamwork", " Time management", "Critical thinking", "Communication", "Creativity", "Learnability", "Attention to details"]
            }
        },
        cV:  {
            heading: "CV",
            download: "Download",
            view: "View"
        },
        contactMe: {
            heading: "Contact me",
            contactsList: {
                github: "https://github.com/smyrnova-iryna"
            },
            contactForm: {
                title: "Contact me",
                name: "Name",
                subject: "Message",
                contactInformation: "Contact information",
                submitText: "Send"
            }
        }
    },
    footer: {
        contacts: {
            phone: "Call",
            email: "Email",
            linkedIn: "LinkedIn",
            github: "Github"
        }
    }
}

export default dataEn