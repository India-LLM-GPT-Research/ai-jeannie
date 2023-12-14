import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Quick content generation",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        AI Jeannie can generate quick and accurate epic descriptions, user story
        descriptions, and acceptance criteria based on Project Definition
        configured.
      </>
    ),
  },
  {
    title: "Customizable templates",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        AI Jeannie provides customizable prompt templates for epic descriptions,
        user story descriptions, and acceptance criteria. Users can modify the
        templates to suit their needs.
      </>
    ),
  },
  {
    title: "Integration with multiple AI providers",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        AI Jeannie integrates with OpenaI, Azure OpenAI and Google Vertex
        provider models to generate high-quality content.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}