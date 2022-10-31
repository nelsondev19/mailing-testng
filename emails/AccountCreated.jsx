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

          <MjmlImage
            cssClass="hero"
            padding="0 0 40px"
            align="center"
            height="40px"
            width="40px"
            alt="Pie & AI Logo"
            src="https://i.ibb.co/0hFCHQL/github-icon.png"
          />
          <MjmlSpacer height="24px" />
          <MjmlText
            padding="0"
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
          >
            Enjoy!
            <br />
            The BookBook Team
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <Footer />
    </MjmlBody>
  </Mjml>
);

export default AccountCreated;