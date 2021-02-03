import React from "react"
import Layout from "../../components/layout"
import styles from "../shared.post.module.scss"
import { Link } from "gatsby"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SEO from "../../components/seo"
import BG1 from "./img/A01.jpg"

export default function HackIllinois() {
  return (
    <Layout>

      <SEO title={"HackIllinois - Philip Kuo"} />

      <div className={styles.title_container}>
        <Link to="/work" className={styles.back}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
          Back
        </Link>
        <h1>HackIllinois 2020</h1>
      </div>

      <article>
        <img src={BG1}></img>

        <h2>Our Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>

        <img src={BG1}></img>

        <h2>How it all started</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vestibulum odio, ac bibendum justo sodales at. Pellentesque pretium sapien ornare gravida sodales. Cras id ante eget arcu euismod blandit. Etiam feugiat, nunc molestie commodo molestie, elit nulla mollis nisi, hendrerit facilisis dolor est vitae nunc. Pellentesque sodales at massa non facilisis. Mauris facilisis justo lacus, at dictum turpis porta eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam porta eleifend mi at sollicitudin.</p>

      </article>

    </Layout>
  )
}