import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight * 100}%`;

      setScrollProgress(scroll);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <div className="App">
      <div className="scroll-progress" style={{width: scrollProgress}}></div>
      <header className="App-header">
        <h1>Trevor Scholz</h1>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>
      <main>
      <section className="about-me">
        <h2>About Me</h2>
        <p>
        Hey, I'm Trevor, a Computer Science student at the University of Maryland, 
        where I specialize in Data Science and get to build on my love for stargazing through my Astronomy minor. 
        More specifically, I love learning and building my skills in the fields of machine learning, statistics, and data science. 
        I always enjoy trying to merge my passions with my projects.
        Whether it's developing sports betting models that actually work, clustering Spotify tracks by mood, or creating a poker bot 
        to beat my friends, I love implementing my personal interests into my projects to make
        them unique and useful. Believe it or not, I am not always immersed in coding and developing. I enjoy playing and watching my favorite sports
        which include basketball, soccer, and golf. I also love listening to music and sometimes even making my own.
        And if the night is clear? I love looking up at the stars when I get the chance and try to grasp how unreal
        our universe really is. Feel free to get in touch!
        </p>
        <div className="social-links">
            <a href="https://github.com/trevorscholz1/Portfolio" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <img src="/github-icon.png" alt="Github" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/trevor-scholz-014794258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="mailto:trevorscholz1@icloud.com" aria-label="Email">
              <img src="/email-icon.png" alt="Email" className="social-icon" />
            </a>
            <a href="https://github.com/trevorscholz1/Portfolio/blob/main/TrevorScholzResume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
              <img src="/resume-icon.png" alt="Resume" className="social-icon" />
            </a>
          </div>
      </section>
      <h1>Click on the images to view the code on my Github!</h1>
        <section className="project">
          <h2>Astronomy</h2>
          <h3>App</h3>
          <a href="https://github.com/trevorscholz1/Portfolio/tree/main/astronomy" target="_blank" rel="noopener noreferrer">
            <img src="/AstroWorldWeb.png" alt="Astronomy Screenshot" className="project-icon"/>
          </a>
          <p>AstroWorld is an app I have created in Xcode, Swift, and SwiftUI. It utilizes NASA's open API's to create an 
            all in one astronomy app for astronomers of all interest levels to get detailed information right from their phone. 
            It gathers data from complex API's and displays them in an easy to view UI for users. My favorite feature displayed above
            is displaying NASA's Astronomy Picture of the Day</p>
          <p>Technology: Xcode, Swift, SwiftUI, RESTful APIS</p>
          <h3>Backend</h3>
          <a href="https://github.com/trevorscholz1/Portfolio/tree/main/astronomy" target="_blank" rel="noopener noreferrer">
            <img src="/AstronomyWeb.png" alt="Astronomy Screenshot" className="project-icon"/>
          </a>
          <p>This Python script demonstrates a comprehensive approach to astronomical data analysis and visualization. 
            It uses libraries such as NumPy, Pandas, Matplotlib, and Astropy to process and display information about different stars.
            The code begins by creating a DataFrame with star names, coordinates (Right Ascension and Declination), and magnitudes.
            It then leverages Astropy's SkyCoord to convert string representations of celestial coordinates into astronomical objects,
            enabling precise calculations. A scatter plot is generated using Matplotlib, visually representing the stars' positions 
            in the sky, with point sizes reflecting their brightness. The script also performs data analysis, identifying the 
            brightest star in the set and calculating the angular separation between two specific stars. 
          </p>
          <p>Technology: Jupyter Notebook, Python, Pandas, NumPy, Matplotlib, Astropy</p>
        </section>
        <section className="project">
          <h2>Daily Lockz</h2>
          <h3>Website</h3>
          <a href="https://github.com/trevorscholz1/Portfolio/tree/main/daily_lockz" target="_blank" rel="noopener noreferrer">
            <img src="/DailyLockzWeb.png" alt="Daily Lockz Screenshot" className="project-icon"/>
          </a>
          <p>The Daily Lockz Website presents predicted sports scores for all major sports.
            It uses the advanced neural network described below to allow users to view trustworthy predictions
            of their favorite upcoming games. It provides an easy to view UI which allows users to very easily
            find the game their looking for, and what machine learning expects the final score to be.
          </p>
          <p>Technology: React, NodeJS, JavaScript, HTML, CSS, Netlify</p>
          <h3>Backend</h3>
          <a href="https://github.com/trevorscholz1/Portfolio/tree/main/daily_lockz" target="_blank" rel="noopener noreferrer">
            <img src="/DailyLockzModelWeb.png" alt="Daily Lockz Screenshot" className="project-icon"/>
          </a>
          <p>Sports betting, when it comes down to it, is all math.
            I have created this Python script that utilizes machine learning techniques to predict the outcomes of various sports events, 
            including soccer, baseball, basketball, football, and hockey games. It fetches data from a sports API, preprocesses the data, 
            trains a neural network model using TensorFlow and Keras, and generates predictions for upcoming games. 
            The script then simulates game outcomes and calculates the probability of each team winning based on the predicted scores. 
            It identifies potential betting opportunities by comparing the simulated probabilities with the odds offered by bookmakers, 
            highlighting bets with positive expected value (+EV). The predicted bets are saved to a CSV file for use on the Daily Lockz website.
            The data the neural network is trained on is obtained using web scraping and all saved in a PostgreSQL Database. Some file handling is also 
            implemented with C.</p>
            <p>Technology: C, PostgreSQL, Jupyter Notebook, Python, Pandas, Playwright, BeautifulSoup, Matplotlib, NumPy, Scikit-Learn, TensorFlow</p>
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
          <a href="https://github.com/trevorscholz1/Portfolio/tree/main/golf" target="_blank" rel="noopener noreferrer">
            <img src="/GolfWeb.png" alt="Golf Screenshot" className="project-icon"/>
          </a>
          <p>First, I wanted to develop my skills in Ruby, which was a new language to me.
            I decided to create a simple program that acts as a golf scorecard. The program allows for
            the user to enter their score on each hole, one-by-one, for 18 holes of golf.
            Then, I decided to further my app developement skills and create an IOS golf scorecard app as well.</p>
          <p>Technology: Ruby, Xcode, Swift, SwiftUI</p>
        </section>
        <section className="project">
          <h2>Clusterfy</h2>
          <a href="https://github.com/trevorscholz1/Portfolio/tree/main/spotify" target="_blank" rel="noopener noreferrer">
            <img src="/ClusterfyWeb.png" alt="Spotify Screenshot" className="project-icon"/>
          </a>
          <p>Clusterfy uses K-Means clustering from Scikit-Learn to group songs from a specified artist into clusters. 
            The clusters are then displayed in a pandas dataframe, and saved as a csv to be used in Xcode to deploy to the app.
            Clusterfy supports over 300 of today's top artists for users to view, and many more coming in the future. Users can also
            click on a song directly in the app to listen to it on spotify and add it to their own playlists.</p>
          <p>Technology: Spotipy, Pandas, Python, Scikit-Learn, Swift, SwiftUI</p>
        </section>
        <section className="project">
          <h2>Extras</h2>
          <section className="sub-project">
            <h3>Poker</h3>
            <a href="https://github.com/trevorscholz1/Portfolio/tree/main/extras/poker" target="_blank" rel="noopener noreferrer">
            <img src="/PokerWeb.png" alt="Poker Screenshot" className="project-icon"/>
          </a>
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
            <a href="https://github.com/trevorscholz1/Portfolio/tree/main/extras/lego" target="_blank" rel="noopener noreferrer">
            <img src="/LegoWeb.png" alt="LEGO Screenshot" className="project-icon"/>
          </a>
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
