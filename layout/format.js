
import Header from "../components/header"
import Head from "next/head"
import Footer from "../components/footer"


export default function format({children}) {
    return(
        <>
        <Head>Submission School BJJ</Head>
        <Header></Header>
        <main> {children}</main>
        <Footer></Footer>
        </>
   )

}
