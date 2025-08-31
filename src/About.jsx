import MyPicture from './assets/My_picture_4.png';

function About() {
  return (
    <section id="about">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 overflow-hidden">
            <img 
              src={MyPicture}
              className="img-fluid w-100 h-100 object-fit-cover"
              alt="Ana Bykova"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About me</h5>
              <p className="card-text">
                <p className="about-me-text">
                  I’m a full stack web developer who enjoys turning ideas into responsive, user-friendly applications. <br /><br />
                  I work with modern technologies like JavaScript, React, Node.js, and MongoDB, handling everything from sleek front-end interfaces to secure back-end systems. 
                  My focus is on writing clean, maintainable code and delivering solutions that are both functional and enjoyable to use. <br /><br />
                  Outside of coding, I love hiking, organizing board game nights, and exploring new creative ideas — all of which keep my problem-solving skills sharp. <br />
                </p>  
              </p>
            </div>
          </div>
        </div>
      </div>        
    </section>
  )
}

export default About
