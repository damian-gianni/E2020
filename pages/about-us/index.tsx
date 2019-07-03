import Head from "next/head";
import WithTemplate from "../../components/Template";
import PersonalCard from "../../components/ui/PersonalCard";

const PEOPLE = [
  {
    name: "Damian",
    lastName: "Gianni",
    facebook: "https://www.facebook.com/damian.gianni",
    twitter: "https://www.twitter.com/damian.gianni",
    instagram: "https://www.instagram.com/damian.gianni",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/damian.jpg",
    ocupation: "Front End Developer"
  }
];

export default () => (
  <WithTemplate>
    <Head>
      <title>Estudiantes 2020 || Quienes somos</title>
    </Head>
    <>
      {PEOPLE.map(person => {
        return <PersonalCard person={person} />;
      })}
    </>
  </WithTemplate>
);
