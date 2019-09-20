import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaRegEnvelope, FaLinkedin, FaInstagram, FaTwitterSquare } from "react-icons/fa"
import cx from "classnames"

import styles from "../styles/components/Header.module.scss"
import Name from "./Name"
import InternalLink from "./InternalLink"
import ExternalLink from "./ExternalLink"
import Bird from "./Bird";

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      markdownRemark(id: { eq: "cab5a20e-ec2e-5044-8393-582410a4206f" }) {
        frontmatter {
          twitter
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.left}>
          <InternalLink className={cx(styles.item, styles.name)}
            link="/"
            >
            <Name />
          </InternalLink>
          <span className={cx(styles.item, styles.divider)}>
            |
          </span>
          <ExternalLink className={cx(styles.item, styles.icon)}
            link="mailto:risegal4@gmail.com"
            >
            <FaRegEnvelope />
          </ExternalLink>
          <ExternalLink className={cx(styles.item, styles.icon)}
            link="https://www.linkedin.com/in/rsegal"
            >
            <FaLinkedin />
          </ExternalLink>
          <ExternalLink className={cx(styles.item, styles.icon)}
            link="https://www.instagram.com/riiyaack/"
            >
            <FaInstagram />
          </ExternalLink>
          <ExternalLink className={cx(styles.item, styles.icon)}
            link={data.markdownRemark.frontmatter.twitter}
            >
            <FaTwitterSquare />
          </ExternalLink>
        </nav>
        <nav className={styles.right}>
          <InternalLink className={styles.item}
            link="/work"
            applyActiveClass={true}
            >
            work
          </InternalLink>
          <InternalLink className={styles.item}
            link="/about"
            applyActiveClass={true}
            >
            about
          </InternalLink>
          <InternalLink className={cx(styles.item, styles.misc)}
            link="/misc"
            applyActiveClass={true}
            >
            <Bird />
          </InternalLink>
        </nav>
      </div>
    </header>
  )
}

export default Header