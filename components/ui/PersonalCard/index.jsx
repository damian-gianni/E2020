import {
  Avatar,
  CardContent,
  FooterCard,
  HeaderCard,
  IconFacebook,
  IconTwitter,
  IconInstagram,
  NameLabel,
  OcupationLabel,
  SocialNetworks
} from "./personal-card.styled";

export default ({ person }) => (
  <CardContent id={person.name}>
    <HeaderCard image={person.imageHeader} />
    <FooterCard>
      <Avatar
        src={
          person.imageProfile
            ? person.imageProfile
            : "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/silueta.jpg"
        }
      />
      <NameLabel>
        {person.name} {person.lastName}
      </NameLabel>
      <OcupationLabel>{person.ocupation}</OcupationLabel>
      <SocialNetworks>
        {person.facebook && (
          <IconFacebook
            href={person.facebook}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
        {person.twitter && (
          <IconTwitter
            href={person.twitter}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
        {person.instagram && (
          <IconInstagram
            href={person.instagram}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
      </SocialNetworks>
    </FooterCard>
  </CardContent>
);
