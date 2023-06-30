import React from "react";
import portfolioBg from "../assets/portfolioBg.jpg";
import PortfolioCard from "../components/PortfolioCard";
import friendcardsg from "../assets/glc.png";
import todoapp from "../assets/todoapp.png";
import registerLogin from "../assets/RegisterLogin.png";
import textAnalyzer from "../assets/txtanaapp.png";
import weatherapp from "../assets/weather.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      id="portfolio"
      className="text-white bg-cover bg-no-repeat justify-center bg-black w-full py-16 px-8 md:px-24 min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)) ,url(${portfolioBg})`,
        // backgroundImage: `url(${portfolioBg})`,
      }}
    >
      <h1 className="text-center font-extrabold md:text-4xl text-2xl mb-16">
        Recent Portfolio
        {/* <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" /> */}
      </h1>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-10 auto-rows-auto h-full w-full">
        <PortfolioCard
          bgpic={friendcardsg}
          title="A Friends card App"
          short_des="A website for friends cards app"
          description="Developed a responsive Friends cards Application using React JS with React Class Components ,
          used React Material UI for a consistent and visually appealing design that is responsive and mobile
          friendly.
          I used Axios in this project for retrieving data from APIs instead of fetch.
          I used React Router DOM for handling navigation and rendering of different component based
          on the given URL.
           This project is also built using Functional component, React Hooks, Context API, Redux. "
          tech_used={[
            "React",
            "Sass",
            "material UI",
            "Axios",
            "Postman",
          ]}
          website="https://friends-card-application.vercel.app/"
        />
        <PortfolioCard
          bgpic={textAnalyzer}
          title="Text Analyzer"
          short_des="A Text anayzer app."
          description="Developed a responsive Text Utility Application using Functional components, React Hooks, React
          bootstrap for designing.
          In this, I have added basic functionalities to convert your entered text into capital, lower case, copy
          text, reverse text, and clear text, and added a preview section too.
           Another section was added as a text summary for word counts, character counts
          (with and without spaces), and read time.
           Added dark mode functionality to it for a better user experience"
          tech_used={[
            "React",
            "Saas",
            "Redux-toolkit",
            "react-redux",
            "Material UI",
            "React Hooks",
          ]}
          git_repo="https://text-analyser-app.vercel.app/"
        />
        <PortfolioCard
          bgpic={weatherapp}
          title="weatherapp"
          short_des="Weather app"
          description="Developed a responsive Weather Application using Functional components, React Hooks, bootstrap,
          Saas designing, and Axios for API data.
          ● I used the open-weather API to get data on cities. When the user searches for any city, he or she
          will get temperature information for that city."
          tech_used={[
            "React",
            "css",
            "react hooks",
            "Postman",
            "OpenApi",
            "Axios",
          ]}
          git_repo="https://anujyadav-lab.github.io/citiesweather/"
        />
        <PortfolioCard
          bgpic={todoapp}
          title="Todo App"
          short_des="A Todo app for making your daily work routine task!"
          description="A simple to-do app for user to mark their daily work routine, In this I have added functionalities of add,
          delete, marked and update too.
          ● This project is built using functional components, React Hooks, Saas."
          tech_used={["React", "saas", "React-router-dom", "API"]}
          git_repo="https://anujyadav-lab.github.io/todolists/"
        />
        <PortfolioCard
          bgpic={registerLogin}
          title="Simple Register & Login app"
          short_des="A simple reg and login app"
          description="Developed a responsive Register & Login App using react Functional components, React Hooks and used
          local-storage for storing user details. Added validation functionality too."
          tech_used={[
            "React",
            "css",
            "React hooks",
            "vercel",
            "Material UI",
          ]}
          git_repo="https://register-login-app.vercel.app/"
        />

        <PortfolioCard
          title="Ecommerce app"
          short_des="Created responsive Ecommerce app using HTML and CSS only, UI of this project is so attractive.."
          description=""
          tech_used={[
            "HTML",
            "Css",
            "vercel",
          ]}
          git_repo="https://github.com/anujyadav-lab/Ecommerceapp"
        />

       
      </div>
    </div>
  );
};

export default Portfolio;
