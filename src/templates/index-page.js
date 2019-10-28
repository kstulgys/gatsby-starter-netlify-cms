import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import { Box, Text, ThemeProvider, CSSReset, ColorModeProvider, Flex, Image } from "@chakra-ui/core"

const Header = ({ image, title, subheading }) => (
  <Flex
    backgroundImage={`url(https://images.unsplash.com/photo-1505526484636-f0a465cf6d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80)`}
    // backgroundColor="purple.900"
    height="100vh"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    position="relative"
  >
    <Flex flex="1" justify="center" align="center" flexDir="column">
      <Text
        textTransform="uppercase"
        px="10"
        py="6"
        textShadow="0 5px 10px rgba(0,0,0,1)"
        bg="rgba(0,0,0,.5)"
        boxShadow="xl"
        position="relative"
        fontSize="6xl"
        fontWeight="semibold"
        color="gray.200"
        // style={{ mixBlendMode: "overlay" }}
      >
        {title}
      </Text>
      <Text
        mt="4"
        // textTransform="uppercase"
        px="10"
        py="6"
        textShadow="0 5px 10px rgba(0,0,0,1)"
        bg="rgba(0,0,0,.6)"
        boxShadow="xl"
        position="relative"
        fontSize="6xl"
        fontWeight="medium"
        color="gray.200"
        fontSize="4xl"
        mb="10%"
      >
        {subheading}
      </Text>
    </Flex>
  </Flex>
)

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro, helloworld }) => (
  <Box>
    <Header image={image.childImageSharp} title={title} subheading={subheading} />
    <Box minHeight="100vh" as="section" width="full" maxWidth="5xl" mx="auto" px="4">
      <Flex pt="20">
        <Box width="50%" p="4" pl="0">
          <Box
            overflow="hidden"
            // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
            pt="56.25%"
            position="relative"
          >
            <Box
              border="0"
              left=" 0"
              position="absolute"
              top="0"
              allowFullScreen={true}
              width="full"
              height="full"
              as="iframe"
              title="sodyba-video"
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1123021504414978%2Fvideos%2F1836175046432950%2F"
              frameBorder="0"
            />
          </Box>
        </Box>

        <Box width="50%" p="4" pr="0">
          <Text fontSize="xl" fontWeight="semibold" mb="2">
            {mainpitch.title}
          </Text>
          <Text>{mainpitch.description}</Text>
        </Box>
      </Flex>
      <Box mt="20">
        <Flex height="56" width="64" bg="purple.300">
          hi
        </Flex>
      </Box>
    </Box>
    {/* <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </Box>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  helloworld: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        helloworld={frontmatter.helloworld}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        helloworld
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
