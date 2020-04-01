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
        <h1 className="rellax square">Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax circle"
          style={{ maxWidth: `50px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="one_lettuce_pig.png" />
        </div>
        <h1>Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax"
          data-rellax-speed="7"
          style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="two_multicolored_pigs.jpeg" />
        </div>
        <h1>Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax square"
          style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="one_lettuce_pig.png" />
        </div>
        <h1>Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax circle"
          style={{ maxWidth: `30px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="hd_glasses_pig.jpg" />
        </div>
        <h1 className="rellax square">Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax circle"
          style={{ maxWidth: `50px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="one_lettuce_pig.png" />
        </div>
        <h1>Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax"
          data-rellax-speed="-3"
          style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="one_lettuce_pig.png" />
        </div>
        <h1>Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax square"
          style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="one_lettuce_pig.png" />
        </div>
        <h1>Hi people</h1>
        <p>Are you ready to learn about GuInEaPiGs!?!?!?</p>
        <p>Ez clap noobs</p>
        <div
          className="rellax circle"
          style={{ maxWidth: `30px`, marginBottom: `1.45rem` }}
        >
          <Image imgName="one_lettuce_pig.png" />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
