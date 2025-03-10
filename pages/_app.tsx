// import "../assets/globals.css"

import GlobalStyle from "./styles/index.js"
import PageLayout from "../components/PageLayout.js"
import { LoginCtxProvider } from "../context/LoginCtx"
import { ORG_InputCtxProvider } from "../context/ORG_Input"
import {ORG_CtxIndividualSpeechtherapist_Provider} from "../context/ORG_Ctx_IndividualSpeechtherapist"

function MyApp({ Component, pageProps }) {
  return (
    <LoginCtxProvider>
      <ORG_InputCtxProvider>
        <ORG_CtxIndividualSpeechtherapist_Provider>
        <PageLayout>
          <GlobalStyle />
          <link rel="icon" href="/favicon.ico" />

          <Component {...pageProps} />
        </PageLayout>
        </ORG_CtxIndividualSpeechtherapist_Provider>
      </ORG_InputCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp
