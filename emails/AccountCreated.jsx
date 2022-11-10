import Head from "./components/Head";
import Footer from "./components/Footer";
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage,
  MjmlSpacer,
} from "mjml-react";
import {
  leadingTight,
  leadingRelaxed,
  textBase,
  textLg,
} from "./components/theme";
  
const AccountCreated = () => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <MjmlSection padding="0">
        <MjmlColumn>
          <MjmlImage
            cssClass="hero"
            padding="0 0 40px"
            align="center"
            height="200px"
            width="200px"
            alt="Pie & AI Logo"
            src="https://i.ibb.co/tLqpPFK/pieai.png"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection padding="0 24px" cssClass="smooth">
        <MjmlColumn>
          <MjmlText
            cssClass="paragraph"
            padding="0"
            fontSize={textLg}
            lineHeight={leadingTight}
            align="center"
            fontWeight={"900"}
          >
            Pie & AI: San Salvador
          </MjmlText>
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Gracias por confirmar tu asistencia esperamos que llegues con ganas de aprender y hacer networking con la comunidad.
          </MjmlText>
          
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Recuerda seguirnos en las redes sociales.
          </MjmlText>
          <MjmlText
            padding="24px 0 0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
            align="center"
          >
              <a href="https://www.mailing.run" target="_blank" rel="noreferrer">
            Twitter
          </a> |   <a href="https://www.mailing.run" target="_blank" rel="noreferrer">
            GitHub
          </a> |  <a href="https://www.mailing.run" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          
          </MjmlText>
          <MjmlSpacer height="24px" />
        </MjmlColumn>
      </MjmlSection>
      <Footer />
    </MjmlBody>
  </Mjml>
);

export default AccountCreated;