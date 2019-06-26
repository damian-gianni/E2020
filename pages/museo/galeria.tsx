import Coverflow from "react-coverflow";

export default () => (
  <Coverflow
    width={960}
    height={480}
    displayQuantityOfSide={1}
    navigation={false}
    enableHeading={true}
  >
    <img
      src="https://estudiantes2020.sfo2.digitaloceanspaces.com/museum/IMG_8350.JPG"
      alt="Camiseta 1"
    />
    <img
      src="https://estudiantes2020.sfo2.digitaloceanspaces.com/museum/IMG_8347.JPG"
      alt="Camiseta 2"
      // data-action="http://andyyou.github.io/react-coverflow/"
    />
    <img
      src="https://estudiantes2020.sfo2.digitaloceanspaces.com/museum/IMG_8349.JPG"
      alt="Camiseta 3"
      // data-action="http://andyyou.github.io/react-coverflow/"
    />
    <img
      src="https://estudiantes2020.sfo2.digitaloceanspaces.com/museum/IMG_8348.JPG"
      alt="Camiseta 4"
      // data-action="http://andyyou.github.io/react-coverflow/"
    />
    <img
      src="https://estudiantes2020.sfo2.digitaloceanspaces.com/museum/saenz%20pen%CC%83a.jpg"
      alt="Saenz peña"
      // data-action="http://andyyou.github.io/react-coverflow/"
    />
  </Coverflow>
);
