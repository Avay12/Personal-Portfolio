import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  senderEmail: string;
  senderMessage: string;
}

export const EmailTemplate = ({
  senderEmail,
  senderMessage,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from your Portfolio site</Preview>
    <Body className="bg-gray-100">
      <Container>
        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
          <Heading>
            You received the following message from the contact form
          </Heading>
          <Text>{senderMessage}</Text>
          <Hr />
          <Text>The Sendr's email is: {senderEmail}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
