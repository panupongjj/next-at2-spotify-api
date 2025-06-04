
import Script from 'next/script';

function GoogleAnalytic() {


  return (
    <div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ID}`}
        strategy="afterInteractive" 
      />
      <Script id = "google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.G_ID}');
        `}
      </Script>
    </div>
  );
}

export default GoogleAnalytic;