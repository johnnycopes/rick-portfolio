import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import cx from "classnames"

import styles from "../styles/templates/misc.module.scss"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FadeWrapper from "../components/FadeWrapper"
import ExternalLink from "../components/ExternalLink"

const MiscTemplate = ({ data, transitionStatus }) => {
  const { websites, songs, instagrams } = data.markdownRemark.frontmatter
  const [ website, setWebsite ] = useState(websites[0])
  const [ song, setSong ] = useState(songs[0])
  const [ instagram, setInstagram ] = useState(instagrams[0])
  const [ fade, setFade ] = useState(false)
  
  const setNewLinks = () => {
    const newWebsite = getNewItemFromArray(websites, website)
    const newSong = getNewItemFromArray(songs, song)
    const newInstagram = getNewItemFromArray(instagrams, instagram)
    setWebsite(newWebsite)
    setSong(newSong)
    setInstagram(newInstagram)
    setFade(true)
  }

  const getNewItemFromArray = (array, currentItem) => {
    const currentItemIndex = array.indexOf(currentItem)
    let newItemIndex = getRandomIndex(array)
    while (newItemIndex === currentItemIndex) {
      newItemIndex = getRandomIndex(array)
    }
    return array[newItemIndex]
  }

  const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length)
  }

  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
      >
      <SEO title="misc" />
      <FadeWrapper status={transitionStatus}>
        <h2 className={styles.header}>
          Random things that I like:
        </h2>
        <div className={cx(
          styles.links,
          { [styles.fade]: fade }
          )}
          onAnimationEnd={() => setFade(false)}
          >
          <ExternalLink className={styles.link}
            link={website.url}
            >
            Website that I like: <span className={styles.link__name}>{website.name}</span>
          </ExternalLink>
          <ExternalLink className={styles.link}
            link={song.url}
            >
            Song that I like: <span className={styles.link__name}>{song.artist} — {song.title}</span>
          </ExternalLink>
          <ExternalLink className={styles.link}
            link={`https://www.instagram.com/${instagram}`}
            >
            Instagram that I like: <span className={styles.link__name}>@{instagram}</span>
          </ExternalLink>
        </div>
        <button className={styles.button}
          onClick={setNewLinks}
          >
          <Img fluid={data.file.childImageSharp.fluid} />
        </button>
      </FadeWrapper>
    </Layout>
  )
}

export const query = graphql`
  query MiscQuery($id: String!) {
    file(name: {eq: "khaled"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        websites {
          name
          url
        }
        songs {
          artist
          title
          url
        }
        instagrams
      }
    }
  }
`

export default MiscTemplate
