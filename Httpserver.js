const http = require('http')

//Create a server using http

const server = http.createServer(function(req,res){
//Header
res.writeHead(200,{'Content-Type':'text/html'});

//Send bak some  information

//res.end("Welcome to My http Server node js project Zuri Assignment!");
res.end(



    
    <html >
    
      <body>
    
        <div class="site">
        
            <nav class="nav">
                <ul class="nav__list">
                  <a href="home.html">
                    <li class="nav__item">Home</li>
                </a>
                    <a href="Project.html">
                    <li class="nav__item">Projects</li>
                </a>
                <a href="Contact.html">
                    <li class="nav__item">Contact Me</li>
                </a>
                <a href="hobbies.html">
                    <li class="nav__item">Hobbies</li>
                </a>
                
                </ul>
            </nav>
       
            <div class="hero">
               </div>
            
            <section class="section">
                <h2>A Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis voluptatibus corporis. Voluptate, cumque?</p>
            </section>
                  
                </div>
          
            <section class="section">
                <h2>A Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis voluptatibus corporis. Voluptate, cumque?</p>
            </section>
            <section class="section">
                <h2>A Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis voluptatibus corporis. Voluptate, cumque?</p>
            </section>
            <section class="section">
                <h2>A Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis voluptatibus corporis. Voluptate, cumque?</p>
            </section>
            <section class="section">
                <h2>A Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis voluptatibus corporis. Voluptate, cumque?</p>
            </section>
        
    
        <section>
          <div class="row">
            <h2 class="section-heading">My Services</h2>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-webdev"></i>
                </div>
                <h3>Front -End Design</h3>
                <p>
                  I can design beutiful Websites for you with Affordable Price and reasonable time
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-brush"></i>
                </div>
                <h3>C# Development</h3>
                <p>
                    Dear customer If you are looking for Desktop app for your Company I am here to satisfy your needs
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-wrench"></i>
                </div>
                <h3>Service Heading</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-truck-pickup"></i>
                </div>
                <h3>Service Heading</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-broom"></i>
                </div>
                <h3>Service Heading</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="icon-wrapper">
                  <i class="fas fa-plug"></i>
                </div>
                <h3>Service Heading</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>Author: Hagernesh Tadesse</p>
          <p><a href="mailto:hege@example.com">wubhager23@gmail.com</a></p>
        </footer>
    </body>
    </html>


)

});

//Create port
server.listener(4000,'127.0.0.1');
console.log("Created your server successfully! ");