import React from "react"
import Footer from "../components/Footer"
import { Box, Text, ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <Box>
          {children}
          <Footer />
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Layout
