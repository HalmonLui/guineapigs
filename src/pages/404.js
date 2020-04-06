import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section-404">
      <div className="content">
        <h1>NOT FOUND</h1>
        <p>The page you're looking for doesn't exist :)</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
