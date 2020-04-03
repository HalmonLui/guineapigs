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
            <Image imgName="transparent_grass_hd.png" />
          </div>
          <div className="rellax dandelion" data-rellax-speed="-25">
            <Image imgName="transparent_dandelions.png" />
          </div>
        </section>
        <section className="section section-index-one">
          <div className="content">
            <p className="rellax" data-rellax-speed="10">
              They are not related to pigs at all. Even though male guinea pigs
              are called boars and females are called sows, they are rodents.
              Their scientific name is ‘Cavia porcellus’, which is why they are
              sometimes referred to as ‘cavies’. The word ‘porcellus’ is latin
              for ‘little pig’. This name may have come about because of the
              pig-like squeaking noises they make.
            </p>
            <p className="rellax" data-rellax-speed="7">
              They don’t come from Guinea. In fact, guinea pigs originate from
              the Andes region of South America. The ‘guinea’ in their name is a
              bit of a mystery. One theory is that they were first brought to
              Europe by Spanish explorers in the 1500s via Guinea in Africa, so
              people thought they came from there, or that it could be a
              corruption of ‘Guiana’, an area in South America.
            </p>
            <p className="rellax" data-rellax-speed="2">
              They like to chat to each other. While they enjoy human affection,
              guinea pigs need to be with others of their own kind and should
              always be kept in pairs or small groups. They communicate using
              several noises, including the well-known ‘wheek-wheek’ call – a
              sign of excitement or to find a friend – and a low ‘purring’
              sound, which they make when they are feeling content and chilled
              out. They also emit a series of short ‘putt-putt’ noises when they
              are exploring.
            </p>
          </div>
          <div className="content">
            <p className="">
              They are not related to pigs at all. Even though male guinea pigs
              are called boars and females are called sows, they are rodents.
              Their scientific name is ‘Cavia porcellus’, which is why they are
              sometimes referred to as ‘cavies’. The word ‘porcellus’ is latin
              for ‘little pig’. This name may have come about because of the
              pig-like squeaking noises they make.
            </p>
            <p className="">
              They don’t come from Guinea. In fact, guinea pigs originate from
              the Andes region of South America. The ‘guinea’ in their name is a
              bit of a mystery. One theory is that they were first brought to
              Europe by Spanish explorers in the 1500s via Guinea in Africa, so
              people thought they came from there, or that it could be a
              corruption of ‘Guiana’, an area in South America.
            </p>
          </div>
        </section>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
