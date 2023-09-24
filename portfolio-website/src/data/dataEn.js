
const dataEn = {
    header: {
        linkedIn: "LinkedIn",
        linkedInHref: "https://www.linkedin.com/in/iryna-smyrnova-74461a261/",
        email: "iryna.smyrnova12@gmail.com",
        emailHref: "mailto:iryna.smyrnova12@gmail.com",
        navItems: ["Portfolio", "Experience", "Skills", "CV", "ContactMe"],

    },
    mainSection: {
        about: {
            name: "IRYNA SMYRNOVA",
            position: "JUNIOR FRONT-END DEVELOPER",
            description: `I  have practical experience of implementing projects on React according 
            to the principles of responsive web design. I have confirmation of main 
            hard skills (React, JavaScript, CSS, HTML) on my LinkedIn profile according 
            to the results of relevant tests. Since February 2023 I have been 
            developing corporate website of the Lithuanian company UAB 
            «FerroMetals».`,
            phoneNumber: "tel:+380676461393",
            phoneNumberTitle: "+38(067)646-13-93",
            location: "Lviv, Ukraine"
        },
        portfolio: {
            heading: "Portfolio",
            projects: [
                {
                    title: "UAB «FerroMetals» company`s website",
                    description: `I  have practical experience of implementing projects on React according 
                    to the principles of responsive web design. I have confirmation of main 
                    hard skills (React, JavaScript, CSS, HTML) on my LinkedIn profile according 
                    to the results of relevant tests. Since February 2023 I have been 
                    developing corporate website of the Lithuanian company UAB 
                    «FerroMetals».`,
                    link: "https://ferrometals.netlify.app/",
                    linkTitle: "Go to site"
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
            job: {
                title: "React Developer in UAB «FerroMetals»",
                description: `I  am responsible for developing and designing of the company's 
                corporate website (in the activity "Woodworking machines production 
                and sale")`,
                date: "02.2023 - up to now"
            },
            volunteering: {
                title: "Volunteering",
                subTitle: "HTML/CSS mentor in CodeClub",
                description: `As a volunteer mentor in the charitable organization "The Charitable Foundation "Покоління.ЮЕЙ"" was responsible for teaching HTML/CSS course for students in the age group of 12-15 years, including the preparation and presentation of lectures, preparation and checking of homeworks.`,
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
                contactInformation: "Contact information"
            }
        }
    },
    footer: {}
}

export default dataEn