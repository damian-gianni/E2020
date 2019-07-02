import dynamic from "next/dynamic";
import Picture from "../../components/ui/Picture";
import { useState } from "react";
const Coverflow = dynamic(async () => await import("react-coverflow"), {
  ssr: false,
  loading: () => <p>...</p>
});

export default ({ resources, section }) => {
  const [displayQ] = useState(() => (window.innerWidth >= 1024 ? 4 : 1));

  return (
    <section id={section}>
      <Coverflow
        media={{
          "@media (max-width: 1024px)": {
            width: "100%",
            height: "300px"
          },
          "@media (min-width: 1024px)": {
            width: "960px",
            height: "480px"
          }
        }}
        displayQuantityOfSide={displayQ}
        navigation={false}
        enableHeading={false}
        id={section}
      >
        {resources.map(resource => (
          <Picture
            image={resource.image}
            alt={resource.alt}
            id={resource.key}
            flipped={resource.flipped}
          />
        ))}
      </Coverflow>
    </section>
  );
};
