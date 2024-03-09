import './App.css';

function App() {

  
  return (

    <>
    <div className="App">
      
      <header className="App-header">
        <div className='Title'>
          <p>Delia Yichen Liu</p>
        </div>
        <nav>
          <ul className='Nav'>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">CV</a>
            </li>
            <li>
              <a href="#portfolio">Philosophy</a>
            </li>
            <li>
              <a href="#contact">Web dev</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="Main-content">
        <section className="Page-left">
          <div className='Intro'>
          <h1>Hey there!  </h1>
          <br/><br/>
          <p>
            My name is Delia.
            <br/><br/>
             I am{' '}
            <span style={{color:"#262b1e",fontWeight:"700"}}>
            a philosophy graduate student 
            </span>
            {' '}and {' '}
            <span style={{color:"#262b1e",fontWeight:"700"}}>a software developer</span>. 
            <br/><br/>
            Before joining Carnegie Mellon University, I received my MSc in Philosophy of Science from the LSE and BA in Philosophy from the University of Sheffield.  For my graduate and undergraduate theses, I wrote about mental imagery and reductionism. 
            <br/><br/>
            My research career started at University of Cambridge, where I was awarded an advanced diploma for my project on moral Turing test. My main interests in philosophy are AI ethics, philosophy of cognitive science, and their intersection. 
            <br/><br/>
            As a developer, I specialize in both front-end and back-end development, primarily using Python and JavaScript.
            <br/><br/>
            I live in London with my husband and two cats.
          </p>
          </div>
          <div className='Social-buttons'>
              <ul className='Icons'>
                <li>
                <img src="linkedin.svg" alt='LinkedIn' />
                </li>
                <li>
                <img src='github.svg' alt='GitHub' />
                </li>
              </ul>
          </div>
        </section>
        <section className="Hero-image"></section>
      </main>
      <footer className="App-footer">
    <p>© {new Date().getFullYear()} Delia Y Liu. All Rights Reserved. </p>
    <p className="Image-credit">
    Photo by <a href="https://www.pexels.com/@mathias-reding-2334615" target="_blank" rel="noopener noreferrer">Mathias Reding</a> on 
    <a href="https://www.pexels.com/photo/dwarf-statuette-on-stump-near-bright-maple-leaves-on-meadow-5662144/" target="_blank" rel="noopener noreferrer">Pexels</a>
  </p>
      
    </footer>
    </div>
    
    </>
  );
}

export default App;
