import Head from "next/head";
import dynamic from "next/dynamic";
import WithTemplate from "../../../components/Template";

const DynamicProject = dynamic(
  async () => await import("../../../components/Project"),
  {
    ssr: false,
    loading: () => <p>...</p>
  }
);

export default () => (
  <WithTemplate>
    <DynamicProject />
  </WithTemplate>
);
