import Head from "./components/Head";
import Footer from "./components/Footer";
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage,
} from "mjml-react";
import {
  leadingTight,
  leadingRelaxed,
  textBase,
  textLg,
} from "./components/theme";

const SubscribedEvent = () => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <MjmlSection padding="0">
        <MjmlColumn>
          <MjmlImage
            cssClass="hero"
            padding="0 0 40px"
            align="center"
            height="100px"
            width="100px"
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
            align="center"
          >
            Gracias por confirmar tu asistencia esperamos que llegues con ganas
            de aprender y hacer networking con la comunidad.
          </MjmlText>
          <MjmlText
            fontSize={textBase}
            lineHeight={leadingRelaxed}
            cssClass="paragraph"
            align="center"
          >
            <a
              href="https://twitter.com/@pieaisv"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/pieaisv"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/company/pieaisv/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://youtube.com/@pieaisv"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <Footer />
    </MjmlBody>
  </Mjml>
);

export default SubscribedEvent;
