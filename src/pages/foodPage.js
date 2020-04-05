import React from "react"
import { Link } from "gatsby"
import Rellax from "rellax"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FoodPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="section food-section-1">
      <h1>Fundamentals</h1>
      <div className="food-staples">
        <div
          className="food-staple-container hay-container"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Hay</h2>
        </div>
        <div
          className="food-staple-container pellets-container"
          data-sal="slide-down"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Pellets</h2>
        </div>
        <div
          className="food-staple-container water-container"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Water</h2>
        </div>
      </div>
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FoodPage
