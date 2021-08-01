import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout' 

const IndexPage = () => {
  return (
      <Layout pageTitle='Home Page' > 
      <p>I´m making this by following the Gatsby tutorial.</p>
      <StaticImage
      alt="Clifford, a pitbull"
      src="../images/pitbull.jpeg"
      />

    </Layout>
  )
}

export default IndexPage
