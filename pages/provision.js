import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">


<Head>
                <title>Mayan Punk</title>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <meta property="og:title" content="MayanPunk" key="ogtitle" />
                <meta property="og:description" content="Curated collection of Generative MayanPunk made from 550 Mayan hieroglyphs. 
         " key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://mayanpunk.com/" key="ogurl"/>
                <meta property="og:site_name" content="https://mayanpunk.com/" key="ogsitename" />
                <meta name="twitter:card" content="summary_large_image" key="twcard"/>
                <meta property="twitter:domain" content="MayanPunk" key="twdomain" />
                <meta property="twitter:url" content="https://mayanpunk.com/" key="twurl" />
                <meta name="twitter:title" content="MayanPunk" key="twtitle" />
                <meta name="twitter:description" content="Curated collection of Generative MayanPunk made from 550 Mayan hieroglyphs. 
         " key="twdesc" />
        
          </Head>

          <div >
            <div className="flex items-center justify-between w-full border-b-2	pb-6">
              <a href="/" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a>
              <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
                <a href="#home" className="text-2xl Poppitandfinch text-white hover:text-black m-6">Home</a>
                <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
                <a href="/mint" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
                <a href="/features" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Features</a>
                <a href="/mayans" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mayans</a>
                <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
                <a href="https://linktr.ee/mayanpunk" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
                <a href="/provision" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Provision</a>
                <a href="/contract" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Contract</a>
              </nav>
            </div>
          </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       


    

                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau Montserrat-Light text-7xl text-center">Provision </h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
           
        
                  </div>
                </div>

              

       
        
       
        



   
                <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
              <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
              <a href="/mint" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
              <a href="/features" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
              <a href="/mayans" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">User Guide</a>
              <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint Guide</a>
              <a href="/linktree" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
            </nav>
          </div>
              </div>
              
            </div>
       


            
   
    )
  }