import { getAuthor } from "./authors";
import { getCategory } from "./categories";
export const getPrincipalArticle = () => {
  return articles.find(a => a.principal === true);
};

export const articles = [
  {
    title: "Firmó Tobías Albarracín",
    short_description:
      "A días de concluir su primera semana de entrenamientos tras las vacaciones, Estudiantes se aseguró la llegada de otra cara nueva para reforzar al plantel comandado por Diego Martínez.",
    content:
      "<article><p>A días de concluir su primera semana de entrenamientos tras las vacaciones, Estudiantes se aseguró la llegada de otra cara nueva para reforzar al plantel comandado por Diego Martínez. </p> <p> <strong>Tobías Albarracín</strong>, defensor de último paso por Temperley, firmó este viernes su contrato y se transformó en la cuarta incorporación para afrontar la temporada 2019/20 en la que el Pincha disputará la B Nacional y los 16avos de final de la Copa Argentina. </p> <p> Nacido en La Rioja hace 34 años, el zaguero central de 1,85 m. de estatura viene de jugar en el Gasolero (13 partidos en total, de los cuales fue titular en 12); antes, se había desempeñado en Quilmes (19 encuentros desde el arranque en la temporada 17/18), Guillermo Brown de Puerto Madryn (58 partidos y 1 gol entre 2016 y 2017), Guaraní Antonio Franco (144 encuentros en dos ciclos distintos, 2007-09 y 2013-15) e Independiente de La Rioja, su primer equipo entre 2005 y 2007. A nivel internacional, jugó en Universitario de Sucre, San José y Bolívar de Bolivia y tuvo un paso por el Legia de Varsovia polaco en 2011. </p> <p> Además de Albarracín, el Matador ya había incorporado al mediocampista Rodrigo Melo, el lateral derecho Leonardo Zaragoza y el volante ofensivo Francisco González Metilli. ¡Bienvenido y muchos éxitos, Tobías! </p> </article>",
    image: {
      alt: "tobias albarracin",
      url:
        "http://caestudiantes.com.ar/wp-content/uploads/2019/06/IMG-20190622-WA0012.jpg",
      description: "Tobías Albarracin nuevo refuerzo"
    },
    creation_date: "2019-03-03",
    principal: true,
    slug: "nuevo-refuerzo-tobias-albarracin"
  }
];
