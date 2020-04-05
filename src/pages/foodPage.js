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
      <h1>Good Fruits & Vegetables</h1>
      <div className="food-staples">
        <div
          className="food-staple-container fruit-container"
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Fruits</h2>
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
          className="food-staple-container vegetables-container"
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Vegetables</h2>
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
      <h1 id="bad-food-title">Bad Fruits & Vegetables</h1>
      <div className="food-staples">
        <div
          className="food-staple-container bad-food-container"
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Poison</h2>
          <h3>Vegetables</h3>
          <ul>
            <li>
              <p>
                Onion family / garlic family / bulbous plant Plant of the onion
                family (contains leek and chive too) causes flatulence.
              </p>
            </li>
            <li>
              <p>
                Cabbage in higher quantity Cabbage can cause flatulence and
                diarrhea
              </p>
            </li>
            <li>
              <p>Leguminous plants / legume</p>
            </li>
            <li>
              <p>Potato Starch of potato is stodgy for Guinea Pigs</p>
            </li>
            <li>
              <p>Avocado</p>
            </li>
          </ul>
          <h3>Fruits</h3>
          <ul>
            <li>
              <p>
                Stone fruit (all kinds) Contains cyanide and is rich in sugar.
                Can cause diarrhea.
              </p>
            </li>
            <li>
              <p>
                All kinds of exotic fruits like mango, papaya, pomegranate
                Causes serious indigestion and colics.
              </p>
            </li>
            <li>
              <p>Rhubarb Rich in oxialic acid</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FoodPage
