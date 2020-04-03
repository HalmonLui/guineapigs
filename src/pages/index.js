import React from "react"
import Rellax from "rellax"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount() {
    // We can keep a reference to Rellax in case we need it later
    this.rellax = new Rellax(".rellax")
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="section section-top rellax">
          <div
            className="content"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <h1>Hi human!</h1>
            <p>I'm here to teach you all about us!</p>
            <button>Tell me more</button>
          </div>
          <div className="rellax grass" data-rellax-speed="-25">
            <Image imgName="transparent_grass2x.png" />
          </div>
          <div className="rellax dandelion" data-rellax-speed="-25">
            <Image imgName="transparent_dandelions.png" />
          </div>
        </section>
        <section className="section section-index-one">
          <div className="content">
            <p
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              nisl nisi scelerisque eu ultrices vitae. At lectus urna duis
              convallis convallis tellus id. Blandit turpis cursus in hac
              habitasse. Proin fermentum leo vel orci. Ut porttitor leo a diam
              sollicitudin tempor. Sed odio morbi quis commodo. Turpis in eu mi
              bibendum neque egestas. Eu scelerisque felis imperdiet proin.
              Aliquam malesuada bibendum arcu vitae elementum curabitur vitae
              nunc sed. Augue mauris augue neque gravida. Ac tincidunt vitae
              semper quis lectus nulla at volutpat diam. In eu mi bibendum neque
              egestas congue quisque. Augue eget arcu dictum varius duis. Turpis
              egestas sed tempus urna et.
            </p>
            <p
              data-sal="slide-down"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              nisl nisi scelerisque eu ultrices vitae. At lectus urna duis
              convallis convallis tellus id. Blandit turpis cursus in hac
              habitasse. Proin fermentum leo vel orci. Ut porttitor leo a diam
              sollicitudin tempor. Sed odio morbi quis commodo. Turpis in eu mi
              bibendum neque egestas. Eu scelerisque felis imperdiet proin.
              Aliquam malesuada bibendum arcu vitae elementum curabitur vitae
              nunc sed. Augue mauris augue neque gravida. Ac tincidunt vitae
              semper quis lectus nulla at volutpat diam. In eu mi bibendum neque
              egestas congue quisque. Augue eget arcu dictum varius duis. Turpis
              egestas sed tempus urna et.
            </p>
            <p
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              nisl nisi scelerisque eu ultrices vitae. At lectus urna duis
              convallis convallis tellus id. Blandit turpis cursus in hac
              habitasse. Proin fermentum leo vel orci. Ut porttitor leo a diam
              sollicitudin tempor. Sed odio morbi quis commodo. Turpis in eu mi
              bibendum neque egestas. Eu scelerisque felis imperdiet proin.
              Aliquam malesuada bibendum arcu vitae elementum curabitur vitae
              nunc sed. Augue mauris augue neque gravida. Ac tincidunt vitae
              semper quis lectus nulla at volutpat diam. In eu mi bibendum neque
              egestas congue quisque. Augue eget arcu dictum varius duis. Turpis
              egestas sed tempus urna et.
            </p>
          </div>
        </section>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
