import Link from "next/link";
import Layout from "../components/layout";

const Index = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to about</a>
        </Link>
        <div>I fix your page.js</div>
    </Layout>
    
);

export default Index;