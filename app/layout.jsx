

import '@/styles/scss/main.scss';
import Layout from "@/components/layout";

const spotifyApiController = require('../lib/spotifyApiController.jsx');


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
