import Link from "next/link";
import Layout from "../components/layout";

export default () => (
    <Layout title="About">
        <Link href="/">
        <a>Go home</a>
        </Link>
        <p>Dog lover</p>
        <img src="/static/dog.jpeg" alt=""/>
    </Layout>
)
