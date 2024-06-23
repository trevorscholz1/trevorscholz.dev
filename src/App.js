import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trevor Scholz</h1>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/trevorscholz1/Portfolio" target="_blank" rel="noopener noreferrer" className="github-link">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science student at the University of Maryland, specializing in Data Science and minoring in Astronomy. My interests lie in machine learning, statistics, and data science. I enjoy combining my skills to tackle real-world problems and personal projects.
        </p>
      </section>
      <h1>View open-source code for all projects on my GitHub (Linked at top-right)</h1>
        <section className="project">
          <h2>Astronomy</h2>
          <h3>App</h3>
          <img src="/AstroWorldWeb.png" alt="Astronomy Screenshot" />
          <p>AstroWorld is an app I have created in Xcode, Swift, and SwiftUI. It utilizes NASA's open API's to create an 
            all in one astronomy app for astronomers of all interest levels get detailed information right from their phone. 
            It gathers data from complex API's and displays them in an easy to view UI for users.</p>
          <p>Technology: Xcode, Swift, SwiftUI, RESTful APIS</p>
          <h3>Backend</h3>
          <img src="/AstronomyWeb.png" alt="Astronomy Screenshot" />
          <p>In Jupyter Notebook and Python, I have developed a simple script to gather data from constellations and compute 
            simple calculations
            like determining the brightest star out of the data.
          </p>
          <p>Technology: Jupyter Notebook, Python, Pandas, NumPy, Matplotlib, Astropy</p>
        </section>
        <section className="project">
          <h2>Daily Lockz</h2>
          <h3>Website</h3>
          <img src="/DailyLockzWeb" alt="Daily Lockz Screenshot" />
          <p>The Daily Lockz Website presents predicted sports scores for all major sports.
            It uses the advanced neural network described below to allow users to view trustworthy predictions
            of their favorite upcoming games.
          </p>
          <p>Technology: React, NodeJS, JavaScript, Netlify</p>
          <h3>Backend</h3>
          <img src="/DailyLockzModelWeb.png" alt="Daily Lockz Screenshot" />
          <p>Sports betting, when it comes down to it, is all math.
            I have created this Python script that utilizes machine learning techniques to predict the outcomes of various sports events, 
            including soccer, baseball, basketball, football, and hockey games. It fetches data from an odds API, preprocesses the data, 
            trains a neural network model using TensorFlow and Keras, and generates predictions for upcoming games. 
            The script then simulates game outcomes and calculates the probability of each team winning based on the predicted scores. 
            It identifies potential betting opportunities by comparing the simulated probabilities with the odds offered by bookmakers, 
            highlighting bets with positive expected value (+EV). The predicted bets are saved to a CSV file for further analysis or execution.
            The data the neural network is trained on is obtained using web scraping.</p>
            <p>Technology: Jupyter Notebook, Python, Pandas, Playwright, BeautifulSoup, Matplotlib, NumPy, Scikit-Learn, TensorFlow</p>
        </section>
        {/* <section className="project">
          <h2>Daily Stockz</h2>
          <h3>Website</h3>
          <img src="" alt="Daily Stockz Screenshot" />
          <p>Coming Soon...</p>
          <h3>Backend</h3>
          <p>Coming Soon...</p>
        </section> */}
        <section className="project">
          <h2>Golf</h2>
          <img src="/GolfWeb.png" alt="Golf Screenshot" />
          <p>First, I wanted to develop my skills in Ruby, which was a new language to me.
            I decided to create a simple program that acts as a golf scorecard. Then, I decided
            to further my app developement skills and create an IOS golf scorecard app as well.</p>
          <p>Technology: Ruby, Xcode, Swift, SwiftUI</p>
        </section>
        <section className="project">
          <h2>Clusterfy</h2>
          <img src="/ClusterfyWeb.png" alt="Clusterfy Screenshot" />
          <p>Clusterfy uses K-Means clustering from Scikit-Learn to group songs from a specified artist into clusters. 
            The clusters are then displayed in a pandas dataframe, and saved as a csv to be used in Xcode to deploy to the app.
            Clusterfy supports over 100 of today's top artists for users to view, and many more coming in the future. Users can also
            click on a song directly in the app to listen to it on spotify and add it to their own playlists.</p>
          <p>Technology: Spotipy, Pandas, Python, Scikit-Learn</p>
        </section>
        <section className="project">
          <h2>Extras</h2>
          <section className="sub-project">
            <h3>Poker</h3>
            <img src="/PokerWeb.png" alt="Poker Screenshot" />
            <p>As you might have already been able to tell from my previous projects, I have a heavy interest in statistics
              and data science. So I decided to combine this with one of my favorite games: Poker. A winning Poker player
              will often have an idea of their chance of winning before making a decision. This program, created in Java, will
              quickly calculate your probability of winning the hand (based on your cards and the community cards), and determine
              which of the three decisions is best for you: fold, call, or raise.
            </p>
            <p>Technology: Java</p>
          </section>
          <section className="sub-project">
            <h3>LEGO</h3>
            <img src="/LegoWeb.png" alt="LEGO Screenshot" />
            <p>In Rust, I created a LEGO Set Randomizer to build my ability to work with APIs and handle data in Rust. 
              It connects to the Rebrickable API to fetch information about LEGO sets, then randomly selects and displays details 
              about one set. The program utilizes asynchronous programming with tokio and reqwest for efficient API requests, 
              employs serde for JSON deserialization, and demonstrates secure practices by managing the API key through environment 
              variables. Upon execution, it presents comprehensive information about the chosen LEGO set, including its set number, 
              name, release year, theme ID, part count, and image URL if available.</p>
            <p>Technology: Rust, Tokio, Serde, RESTful APIS</p>
          </section>
        </section>
        </main>
      <footer>
        <p>Trevor Scholz Portfolio June 2024</p>
      </footer>
    </div>
  );
}

export default App;
