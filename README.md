# Reactocats

![SDG](./docs/button.png)

The Octodex is a fun way to celebrate a powerful tool we use for development. In that same spirit, recreate this site.

You'll identify the main Components on the page and create React components for each, breaking down those Components into smaller ones as needed.

Objectives:

- Learn to identify parts of a web site as Components
- Use app-app (GAMMA stack) to build a React project
- Understand and use React components
  Stretch Objectives:
- Understand and use "props" in React

Explorer Mode:

- Create your React app using app-app GAMMA

- If you have done the non-React version of octodex, use your existing HTML as the render() method of your App component. Otherwise, figure out the main components of the page and implement the render() method of App -- Don't forget to replace class= with className=

- Your CSS should be in index.scss -- feel free to copy your previous project's css if you have done the non-React version of this assignment.

- Create a component for an Octocat

  - The Octocat component should use props to customize the data for each usage.
  - You will have a prop for the name, and the image, and the number, etc.
  - Don't worry about supporting more than one author image (for now)

- Use your Octocat component to render all your cats. This might look something like this:
<div>
  <Octocat name="Terracotacat" number="142" other="" props="" go="" here="" />
  <Octocat name="SuncoastCat" number="145" other="" props="" go="" here="" />
</div>

Adventure Mode:

- Place the definition of each Octocat in an array of objects and use map to generate the Octocat components

Epic Mode:

- Put the array of Octocats in an octocats.json file and import that into your app.

OR

- Use the fetch API to retrieve the list of Octocats from this api instead
