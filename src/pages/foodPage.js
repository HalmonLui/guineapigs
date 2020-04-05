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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl
            nisi scelerisque eu ultrices vitae. At lectus urna duis convallis
            convallis tellus id. Blandit turpis cursus in hac habitasse. Proin
            fermentum leo vel orci. Ut porttitor leo a diam sollicitudin tempor.
            Sed odio morbi quis commodo. Turpis in eu mi bibendum neque egestas.
            Eu scelerisque felis imperdiet proin. Aliquam malesuada bibendum
            arcu vitae elementum curabitur vitae nunc sed. Augue mauris augue
            neque gravida. Ac tincidunt vitae semper quis lectus nulla at
            volutpat diam. In eu mi bibendum neque egestas congue quisque. Augue
            eget arcu dictum varius duis. Turpis egestas sed tempus urna et.
          </p>
        </div>
        <div
          className="food-staple-container pellets-container"
          data-sal="slide-down"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Pellets</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl
            nisi scelerisque eu ultrices vitae. At lectus urna duis convallis
            convallis tellus id. Blandit turpis cursus in hac habitasse. Proin
            fermentum leo vel orci. Ut porttitor leo a diam sollicitudin tempor.
            Sed odio morbi quis commodo. Turpis in eu mi bibendum neque egestas.
            Eu scelerisque felis imperdiet proin. Aliquam malesuada bibendum
            arcu vitae elementum curabitur vitae nunc sed. Augue mauris augue
            neque gravida. Ac tincidunt vitae semper quis lectus nulla at
            volutpat diam. In eu mi bibendum neque egestas congue quisque. Augue
            eget arcu dictum varius duis. Turpis egestas sed tempus urna et.
          </p>
        </div>
        <div
          className="food-staple-container water-container"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Water</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl
            nisi scelerisque eu ultrices vitae. At lectus urna duis convallis
            convallis tellus id. Blandit turpis cursus in hac habitasse. Proin
            fermentum leo vel orci. Ut porttitor leo a diam sollicitudin tempor.
            Sed odio morbi quis commodo. Turpis in eu mi bibendum neque egestas.
            Eu scelerisque felis imperdiet proin. Aliquam malesuada bibendum
            arcu vitae elementum curabitur vitae nunc sed. Augue mauris augue
            neque gravida. Ac tincidunt vitae semper quis lectus nulla at
            volutpat diam. In eu mi bibendum neque egestas congue quisque. Augue
            eget arcu dictum varius duis. Turpis egestas sed tempus urna et.
          </p>
        </div>
      </div>
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FoodPage
