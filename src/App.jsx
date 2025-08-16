import axios from 'axios';
import './App.css'
import FormBuilder from './views/FormBuilder'
function App() {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const postData = {
      "agreeOnTakeTest": true,
      "name": "Sivaramakrishnan N",
      "email": "shivamaya192@gmail.com",
      "yearOfExperience": 2,
      "rateOptimization": 4,
      "github": "https://github.com/SivaramakrishnanN-wd/",
      "linkedin": "https://www.linkedin.com/in/sivaramakrishnann-wd/",
      "phone": "8973044050",
      "techstack": [
        "ReactJS",
        "Redux",
        "Redux-Toolkit",
        "typescript",
        "JavaScript",
        "NodeJS",
        "ExpressJS"
      ],
      "relocatable": true,
      "goal": "I want to do the job which is closed my heart with complete intension",
      "achievement": "To develop my technical knowledge to support our company",
      "why": "Inspried by application form",
      "reason": "To exlore more",
      "currentSalary": 3.5,
      "expectedSalary": 7,
      "noticePeriod": 45,
      "react": 2,
      "typescript": 2,
      "next": 1,
      "sass": 2,
      "figma": 2,
      "semanticHtml": 2,
      "storybook": 2,
      "seo": 2,
      "lottie": 0,
      "mobileDevelopment": 0
    }
    console.log("postData",postData)
    try {
      const response = await axios.post('https://asia-northeast1-willeder-official.cloudfunctions.net/api/apply/frontend', postData);
      console.log('Post successful:', response.data);
      // Handle successful response, e.g., update state, show success message
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle errors, e.g., display error message to the user
    }
  };
  return (
    <>
      <button onClick={handleSubmit}>Click</button>
      <FormBuilder />
    </>
  )
}

export default App
