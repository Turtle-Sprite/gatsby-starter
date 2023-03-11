import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'

export default function Projects({data}) {
  console.log(data)
  const projects = data.projects.edges
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <h3>Projects & Websites I've Created</h3>
      <div className={styles.projects}>
        {projects.map(projects => {
          return (<Link to={"/projects/" + projects.node.frontmatter.slug} key={projects.id}>
            <div>
              <h3>{ projects.node.frontmatter.title }</h3>
              <p> { projects.node.frontmatter.stack } </p>
            </div>
          </Link>)
        })}
      </div>
      <p>Like what you see? Email me at { contact } for a quote.</p>
    </div>
    </Layout>
  )
}

//export page query
export const query = graphql `
query MyQuery {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        id
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
