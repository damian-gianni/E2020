import Head from "next/head";
import WithTemplate from "../../components/Template";
import PersonalCard from "../../components/ui/PersonalCard";
import styled from "styled-components";

const PEOPLE = [
  {
    name: "Ramón Felix",
    lastName: "Moreno",
    facebook: "https://www.facebook.com/raymoren",
    twitter: "https://www.twitter.com/RAMOREN",
    instagram: "https://www.instagram.com/ramoren",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/ramon.jpg",
    ocupation: "Doctor en derecho"
  },
  {
    name: "Damian Ezequiel",
    lastName: "Gianni",
    facebook: "https://www.facebook.com/damian.gianni",
    twitter: "https://www.twitter.com/damian.gianni",
    instagram: "https://www.instagram.com/damian.gianni",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/damian.jpg",
    ocupation: "Front End Developer"
  },
  {
    name: "Leonardo",
    lastName: "Medina",
    facebook: "https://www.facebook.com/leonardo.medina.547",
    twitter: "https://www.twitter.com/LeoAMedina",
    instagram: "https://www.instagram.com/leito.medina",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile: "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/leonardoM.jpg",
    ocupation: "Ingeniero industrial"
  },
  {
    name: "German",
    lastName: "Gruschke",
    facebook: "https://www.facebook.com/german.gruschke",
    twitter: "https://www.twitter.com/germangru",
    instagram: "https://www.instagram.com/ger_gru",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/german.jpg",
    ocupation: "Lic. en Comercialización"
  },
  {
    name: "Ariel Adan",
    lastName: "Issa",
    facebook: "https://www.facebook.com/arieladan.issa",
    instagram: "https://www.instagram.com/ariel_issa_cae",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/ariel.jpg",
    ocupation: null
  },
  {
    name: "Alexis",
    lastName: "Masny",
    facebook: "https://www.facebook.com/profile.php?id=1370105923",
    instagram: "https://www.instagram.com/alexisdecaseros",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/alexis.jpg",
    ocupation: null
  },
  {
    name: "Daniel Osvaldo",
    lastName: "Bonomo",
    facebook: "https://www.facebook.com/dani.bonomo.5",
    instagram: "https://www.instagram.com/daniel.bonomo.7",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/daniel.jpg",
    ocupation: null
  },
  {
    name: "Cristian",
    lastName: "Belate",
    facebook: "https://www.facebook.com/bf.cristian",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/cristian.jpg",
    ocupation: null
  },
  {
    name: "Mauro Nicolas",
    lastName: "Gulisano",
    facebook: "https://www.facebook.com/gulito.bakan",
    twitter: "https://www.twitter.com/Mauro.Gulisano",
    instagram: "https://www.instagram.com/maurooo_nicolas",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/mauro.jpg",
    ocupation: null
  },
  {
    name: "Hernán",
    lastName: "Ivanoff",
    facebook: "https://www.facebook.com/SDCNM",
    imageHeader:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/portada_web.jpg",
    imageProfile:
      "https://estudiantes2020.sfo2.digitaloceanspaces.com/profiles/hernan.jpg",
    ocupation: null
  }
];

const PeopleGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  section:nth-child(4n) {
    margin-right: 0;
  }
`;

export default () => (
  <WithTemplate>
    <Head>
      <title>Estudiantes 2020 || Quienes somos</title>
    </Head>
    <PeopleGroup>
      {PEOPLE.map(person => {
        return <PersonalCard person={person} />;
      })}
    </PeopleGroup>
  </WithTemplate>
);
