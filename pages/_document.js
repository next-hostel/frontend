import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

 
  render() {
    return (
      <Html lang = "en">
        <Head>


        <script src="https://kit.fontawesome.com/8be3ae5bea.js" crossorigin="anonymous"></script>


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js" />

       
        </Head>

        <body>
          <Main />
          <NextScript />


          <script src="https://code.jquery.com/jquery-3.5.1.js"
                integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" 
                 crossOrigin="anonymous">
           </script>


          <script type="text/javascript" src="./Js/navbarSelector.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument