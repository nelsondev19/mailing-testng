import { MjmlSection, MjmlColumn, MjmlText } from "mjml-react";
import { grayDark, textSm } from "./theme";

export default function Footer() {
  return (
    <MjmlSection cssClass="smooth">
      <MjmlColumn>
        <MjmlText
          cssClass="footer"
          fontSize={textSm}
          color={grayDark}
          align="center"
        >
          © {new Date().getFullYear()} Pie & AI: San
          Salvador
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
}
