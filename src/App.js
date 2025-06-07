import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./App.css";

const TextFileDisplay = ({ file }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch text file");
        return response.text();
      })
      .then((data) => setText(data))
      .catch((err) => setText("Error loading file."));
  }, [file]);

  return <p>{text}</p>;
};

function ImageCarousel({ images, link }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button prev">
        <ChevronLeft />
      </button>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="carousel-image-link"
      >
        <div className="image-wrapper">
          <img
            src={images[currentIndex]}
            alt={`Project screenshot ${currentIndex + 1}`}
            className={`project-icon ${imageLoaded ? "loaded" : ""}`}
            onLoad={handleImageLoad}
          />
          {!imageLoaded && <div className="image-placeholder" />}
        </div>
      </a>
      <button onClick={nextSlide} className="carousel-button next">
        <ChevronRight />
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;

      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  const projectImages = {
    astronomy: [
      "/AppScreenshots/AstroWorldScreenshots/screen_1.png",
      "/AppScreenshots/AstroWorldScreenshots/screen_2.png",
      "/AppScreenshots/AstroWorldScreenshots/screen_3.png",
      "/AppScreenshots/AstroWorldScreenshots/screen_4.png",
    ],
    dailyLockz: [
      "AppScreenshots/DailyLockzScreenshots/ss1.png",
      "AppScreenshots//DailyLockzScreenshots/ss2.png",
      "AppScreenshots//DailyLockzScreenshots/ss3.png",
    ],
    dailyStockz: ["AppScreenshots/DailyStockzScreenshots/screen_1.png"],
    clusterJam: [
      "/AppScreenshots/ClusterJamScreenshots/screen_1.png",
      "/AppScreenshots/ClusterJamScreenshots/screen_2.png",
      "/AppScreenshots/ClusterJamScreenshots/screen_3.png",
      "/AppScreenshots/ClusterJamScreenshots/screen_4.png",
    ],
    holeInOne: ["AppScreenshots/HoleInOneScreenshots/screen_1.png"],
    lego: ["/LegoScreenshot.png"],
    poker: ["/PokerScreenshot.png"],
  };

  return (
    <div className="App">
      <div className="scroll-progress" style={{ width: scrollProgress }}></div>
      <header className="App-header">
        <h1>Trevor Scholz</h1>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hey, I'm Trevor, a Computer Science student at the University of
            Maryland, where I specialize in Data Science with an Astronomy
            minor. More specifically, I love learning and building my skills in
            the fields of machine learning, statistics, and data science. On top
            of this, I enjoy creating mobile and web apps where I try to merge
            my passions with my projects, and I have several apps released on
            the iOS App Store. Outside of developement, I enjoy playing and
            watching my favorite sports which include basketball, soccer, and
            golf, and love listening to music, sometimes even making my own.
            Don't hesitate to reach out!
          </p>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingTop: "10px",
            }}
          >
            <a
              href="https://linktr.ee/trevorscholz1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#007bff",
                padding: "10px 20px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              LinkTree
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/trevorscholz1/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <img
                src="/github-icon.png"
                alt="Github"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/trevor-scholz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/linkedin-icon.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
            <a href="mailto:trevorscholz1@icloud.com" aria-label="Email">
              <img src="/email-icon.png" alt="Email" className="social-icon" />
            </a>
            <a
              href="https://github.com/trevorscholz1/Portfolio/blob/main/TrevorScholzResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <img
                src="/resume-icon.png"
                alt="Resume"
                className="social-icon"
              />
            </a>
          </div>
        </section>
        <h1>Click on the images to view the code on my Github</h1>
        <section className="project">
          <h2>Astronomy</h2>
          <ImageCarousel
            images={projectImages.astronomy}
            link="https://github.com/trevorscholz1/Portfolio/tree/main/astronomy"
          />
          <div className="text-file">
            <TextFileDisplay file="/AppScreenshots/AstroWorldScreenshots/about.txt" />
          </div>
          <p>
            Technology: Swift, SwiftUI, Skyfield, Jupyter Notebook, Python,
            Pandas, NumPy, 3D Objects, Firebase
          </p>
        </section>
        <section className="project">
          <h2>Daily Lockz</h2>
          <ImageCarousel
            images={projectImages.dailyLockz}
            link="https://github.com/trevorscholz1/Portfolio/tree/main/daily_lockz"
          />
          <p>
            The Daily Lockz Website presents predicted sports scores for all
            major sports. It uses the advanced neural network described below to
            allow users to view trustworthy predictions of their favorite
            upcoming games. It provides an easy to view UI which allows users to
            very easily find the game they're looking for, and what machine
            learning expects the final score to be. Sports betting, when it
            comes down to it, is all math. I have created this Python script
            that utilizes machine learning techniques to predict the outcomes of
            various sports events, including soccer, baseball, basketball,
            football, and hockey games. It fetches data from a sports API,
            preprocesses the data, trains a neural network model using
            TensorFlow and Keras, and generates predictions for upcoming games.
            The script then simulates game outcomes and calculates the
            probability of each team winning based on the predicted scores. It
            identifies potential betting opportunities by comparing the
            simulated probabilities with the odds offered by bookmakers,
            highlighting bets with positive expected value (+EV). The predicted
            bets are saved to a CSV file for use on the Daily Lockz website. The
            data the neural network is trained on is obtained using web scraping
            and all saved in a PostgreSQL Database. Some file handling is also
            implemented with C.
          </p>
          <p>
            Technology: React, NodeJS, JavaScript, HTML, CSS, Netlify, C,
            PostgreSQL, Jupyter Notebook, Python, Pandas, Playwright,
            BeautifulSoup, Matplotlib, NumPy, Scikit-Learn, TensorFlow
          </p>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingTop: "10px",
            }}
          >
            <a
              href="https://dailylockz.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#007bff",
                padding: "10px 20px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Visit Daily Lockz Website
            </a>
          </div>
        </section>
        <section className="project">
          <h2>Daily Stockz</h2>
          <ImageCarousel
            images={projectImages.dailyStockz}
            link="https://github.com/trevorscholz1/Portfolio/tree/main/daily_stockz"
          />
          <p>Daily Stockz</p>
          <p>Technology: Python, yfinance, Scikit-Learn</p>
        </section>
        <section className="project">
          <h2>ClusterJam</h2>
          <ImageCarousel
            images={projectImages.clusterJam}
            link="https://github.com/trevorscholz1/Portfolio/tree/main/spotify"
          />
          <div className="text-file">
            <TextFileDisplay file="/AppScreenshots/ClusterJamScreenshots/about.txt" />
          </div>
          <p>
            Technology: MusicKit, Spotify Web API, ShazamKit, Pandas, Python,
            Scikit-Learn, Swift, SwiftUI
          </p>
        </section>
        <section className="project">
          <h2>HoleInOne</h2>
          <ImageCarousel
            images={projectImages.holeInOne}
            link="https://github.com/trevorscholz1/Portfolio/tree/main/golf"
          />
          <p>
            First, I wanted to develop my skills in Ruby, which was a new
            language to me. I decided to create a simple program that acts as a
            golf scorecard. The program allows for the user to enter their score
            on each hole, one-by-one, for 18 holes of golf. Then, I decided to
            further my app developement skills and create an IOS golf scorecard
            app as well.
          </p>
          <p>Technology: Ruby, Xcode, Swift, SwiftUI</p>
        </section>
        <section className="project">
          <h2>Extras</h2>
          <section className="sub-project">
            <h3>Poker</h3>
            <a
              href="https://github.com/trevorscholz1/Portfolio/tree/main/extras/poker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/PokerScreenshot.png"
                alt="Poker Screenshot"
                className="project-icon"
              />
            </a>
            <p>
              As you might have already been able to tell from my previous
              projects, I have a heavy interest in statistics and data science.
              So I decided to combine this with one of my favorite games: Poker.
              A winning Poker player will often have an idea of their chance of
              winning before making a decision. This program, created in Java,
              will quickly calculate your probability of winning the hand (based
              on your cards and the community cards), and determine which of the
              three decisions is best for you: fold, call, or raise.
            </p>
            <p>Technology: Java</p>
          </section>
          <section className="sub-project">
            <h3>LEGO</h3>
            <a
              href="https://github.com/trevorscholz1/Portfolio/tree/main/extras/lego"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/LegoScreenshot.png"
                alt="LEGO Screenshot"
                className="project-icon"
              />
            </a>
            <p>
              In Rust, I created a LEGO Set Randomizer to build my ability to
              work with APIs and handle data in Rust. It connects to the
              Rebrickable API to fetch information about LEGO sets, then
              randomly selects and displays details about one set. The program
              utilizes asynchronous programming with tokio and reqwest for
              efficient API requests, employs serde for JSON deserialization,
              and demonstrates secure practices by managing the API key through
              environment variables. Upon execution, it presents comprehensive
              information about the chosen LEGO set, including its set number,
              name, release year, theme ID, part count, and image URL if
              available.
            </p>
            <p>Technology: Rust, Tokio, Serde, RESTful APIS</p>
          </section>
        </section>
      </main>
      <footer>
        <p>
          Trevor Scholz Portfolio{" "}
          {new Date().toLocaleString("default", { month: "long" })}{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
