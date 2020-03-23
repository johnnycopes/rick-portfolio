import React, { useState } from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import styles from "../styles/templates/resume.module.scss"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FadeWrapper from "../components/FadeWrapper"
import Button from "../components/Button"

const ResumeTemplate = ({ data, transitionStatus }) => {
  const resume = data.markdownRemark.frontmatter.resume.publicURL
  const correctPassword = process.env.GATSBY_RESUME_PASSWORD
  const [ showResume, setShowResume ] = useState(localStorage && localStorage.getItem("rickSegal:showResume") || false);
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(false)

  const handleChange = (event) => {
    setPassword(event.target.value)
  }

  const submit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setError(false)
      setShowResume(true)
      localStorage && localStorage.setItem("rickSegal:showResume", true)
    } else {
      setError(true)
      setPassword("")
    }
  }

  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
    >
      <SEO title="resume" />
      <FadeWrapper status={transitionStatus}>
        <div className={styles.wrapper}>
          {
            showResume ?
            <iframe className={styles.resume}
              title="RickSegalResume"
              src={resume}
            >
            </iframe> :
            <form className={styles.form}
              onSubmit={submit}
            >
              <FontAwesomeIcon className={styles.icon}
                icon={faLock}
              />
              <div className={styles.inputField}>
                <input className={styles.input}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                />
                <Button>
                  submit
                </Button>
              </div>
              {error && <p className={styles.error}>Incorrect password</p>}
            </form>
          }
        </div>
      </FadeWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ResumeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        resume {
          publicURL
        }
      }
    }
  }
`

export default ResumeTemplate