import WithTemplate from "../components/Template";
import Splash from "../components/ui/Splash";
import dynamic from "next/dynamic";

dynamic(async () => await import("../resources/web-notifications"), {
  ssr: false
});

export default () => {
  return (
    <WithTemplate>
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <img
          src="https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-app_128x128.png"
          alt="Logo E2020"
        />
        <strong style={{ display: "block" }}>
          Juntos construimos el futuro
        </strong>
      </div>
      <Splash />
    </WithTemplate>
  );
};
