import Navbar from "../components/Navbar";
import Layout from "./layout";

export default function HomePage() {
  return (
    <html>
      <body>
        <Layout>
          <Navbar />
          <div>Welcome to the home page!</div>
        </Layout>
      </body>
    </html>
  );
}
