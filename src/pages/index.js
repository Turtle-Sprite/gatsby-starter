import * as React from "react"
import Layout from "../components/layout"
import * as styles from '../styles/index.module.css'
import { Link, graphql } from "gatsby"

export default function Home() {

  return (
  <Layout>
  <section className={styles.header}>
    <div>
      <h2 >Design</h2>
      <h3>Develop & Deploy</h3>
      <p>UX designer & web developer</p>
      <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
    </div>
    <img src="/french-toast.jpg" alt="french toast" style={{ maxWidth: "200px"}}/>
  </section>
  </Layout>
    )
}


