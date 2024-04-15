interface IPersonalProject {
  title: string;
  date: string;
  url: string;
  description: string;
}

export const personalProjects : IPersonalProject[] = [
  {
    title: "Nick Hakim Online Store",
    url: "https://nickhakim.com",
    date: "2024",
    description: "Developed a website for artist Nick Hakim, along with <a href='https://peter.digital' target='_blank'>Peter Campanelli</a>"
  },
  {
    title: "Baby Keem Online Store",
    url: "https://keem.science",
    date: "2022",
    description: "Developed a shopify merchandise store for rapper Baby Keem, along with <a href='https://peter.digital' target='_blank'>Peter Campanelli</a>"
  },
  {
    title: "What Are You Cooking?",
    url: "https://whatareyou.cooking",
    date: "2022",
    description: "Recipe sharing website with Sign-In with Google, profiles, tags, and search by tags. I used React for building the UI, TypeScript to increase type safety, and Tailwind CSS for styling. <a href='https://github.com/isaacmattern/what-are-you-cooking' target='_blank'>View on GitHub</a>"
  },
  {
    title: "Wordle Solver Bot",
    url: "https://colab.research.google.com/drive/1sj6Yd2Ckswmcwa5ZRH6Uk8mYffwVf07B?usp=sharing",
    date: "2022",
    description: "A Wordle solving bot I wrote in python. No machine learning here, so it's not actually that great ;)"
  },
  {
    title: "Digit Recognition",
    url: "https://github.com/isaacmattern/mnist-digit-recognition",
    date: "2021",
    description: "A project I completed for coursework with three classmates in an Introduction to Artificial Intelligence course. Uses the MNIST Database "
  },  
]