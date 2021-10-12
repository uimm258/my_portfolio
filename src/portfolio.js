const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://arelaliu.github.io',
  title: 'Home',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Arela',
  role: 'Front End Engineer',
  description:
    'Dedicated proficient with 5 years of experience in Web Technologies and user interfaces using HTML5, DOM, CSS3, Bootstrap, JavaScript, React, JQuery, NodeJs, Webpack.',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Yamma',
    description: 'Provided users with a compilation of up-to-date U.S. news; users can communicate with each other through corresponding article chat windows. Developed API services to receive the up-to-date U.S. news. The API integrated the front-end with the back-end and guaranteed the functionality of the system.',
    stack: ['React.JS', 'Node.JS', 'HTML', 'CSS', 'PSQL'],
    sourceCode: 'https://yamma-client-git-development-mettys.vercel.app/'
  },
  {
    name: 'Spaced Repetition',
    description:'A self-driven project for tutor use. Developed a website that allows users to learn Chinese words as the quizzing method. Migrated database to Heroku with SQL which allowed the display and translations of words through API calls. Designed and developed the register-and-login system that enables users to save their learning progress.',    
    stack: ['React.JS', 'Node.JS', 'HTML', 'CSS', 'PSQL'],
    sourceCode: 'https://spaced-repetition-lime-two.vercel.app/register'
  },
  {
    name: 'Petful',
    description: 'Designed and developed a website that allows users to sign up and adopt a pet. Implemented an algorithm with linked lists and sorting for the stored database of dogs and cats to display available pets and to handle the adopting events. Took full ownership of the whole project.',
    stack: ['React.JS', 'Node.JS', 'HTML', 'CSS', 'PSQL'],
    sourceCode: 'https://petful-client-app.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'arela.liu0520@gmail.com',
}

export { header, about, projects, skills, contact }
