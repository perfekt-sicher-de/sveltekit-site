import faker from "faker";

export async function get() {
    const team = [
        {
            name: 'Keywan Ghadami',
            avatar: `/keywan.png`,
        },
        {
            name: 'Saad Bin Khalid',
            about: 'Hi there, I am Saad Bin Khalid and I am a Professional Full Stack Developer with over 3 years of fields experience in developing super fast and reliable Web, Mobile and Desktop application. I work in a shared space with a Team of Software Engineers having Expertise from Documenting Softwares to developing. We have expertise in Writing Professional Software Requirement Document with Web and Mobile Development. We mostly help startups to start their business from a Web or Mobile Application',
            avatar: `/saad.webp`,
        }
    ];


    return {
        body: team,
    };
}
