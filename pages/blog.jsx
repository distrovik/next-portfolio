import Head from "next/head";
import Layout from "@/components/layout";

export default function Blog () {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <main>
                <div style={{height: "100vh"}}>
                <h1>Blog</h1>
                </div>
            </main>
        </Layout>
    )
}