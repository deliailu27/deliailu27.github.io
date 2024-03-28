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
          <h1>Hello and welcome
             </h1>
          <br/><br/>
          <p>
            My name is Delia.
            <br/><br/>
             I am{' '}
            <span style={{color:'white',fontWeight:"700",cursor:'pointer',textDecoration:"underline"}}>
            a philosophy graduate student 
            </span>
            {' '}and {' '}
            <span style={{color:'white',fontWeight:"700",cursor:'pointer',textDecoration:"underline"}}>a software developer</span>. 
            <br/><br/>
            Before joining Carnegie Mellon University, I received my MSc in Philosophy of Science from the LSE and BA in Philosophy from the University of Sheffield.  For my graduate and undergraduate theses, I wrote about mental imagery and reductionism. 
            <br/><br/>
            My research career started at University of Cambridge, where I was awarded an advanced diploma for my project on moral Turing test. My main interests in philosophy are AI ethics, philosophy of cognitive science, and their intersection. 
            <br/><br/>
            As a developer, I specialize in both front-end and back-end development, primarily using Python and JavaScript.
            <br/><br/>
           
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
        
      </main>
      <footer className="App-footer">
    <p>© {new Date().getFullYear()} Delia Y Liu. All Rights Reserved. </p>
    <p className="Image-credit">
    Photo by <a href="https://unsplash.com/@jonnyuiux?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonny Caspari</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-diamond-on-a-blurry-background-_XREEr4aw_Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  </p>
      
    </footer>
    </div>
    
    </>
  );
}

export default App;

