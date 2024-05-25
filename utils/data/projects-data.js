import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Wanderlust',
        description: "Wanderlust is an online marketplace that connects people who wants to rent out their property with people who are looking for accommodations, typically for short stays. Wanderlust offers hosts a relatively easy way to earn some income from their property. Me and my team built an MERN based Webpage. I have developed API using Express, Typescript, and MongoDB. LINK: http://Wanderlust-1n5u.onrender.com",
        tools: ['Express', 'MongoDB', 'reactjs', 'Javascript', 'nodejs','CSS', 'Bootstrap'],
        role: 'FULL STACK Developer',
        code: '',
        demo: 'http://Wanderlust-1n5u.onrender.com',
        image: crefin,
    },
    {
        id: 2,
        name: 'Portfolio Website',
        description: 'I have designed and developed a portfolio Website. I created the UI using NextJS, TailwindCSS, and React.',
        tools: ['NextJS', 'Tailwind CSS', "react", "CSS"],
        role: 'Front End',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Chatbot',
        description: 'An AI Chatbot is an online program that can simulate human-like customer interactions on mobile apps and websites through the use of NLP and Machine Learning. Chatbots run on simple algorithms and relay on scripted responses to provide answers to users. My team built an AI-based real Built AI assistants. AIs latest model and trained using our dataset.',
        tools: ['Python', 'Tensorflow', 'numpy','NLPTK'],
        code: '',
        role: '',
        demo: '',
        image: realEstate,
    }
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },