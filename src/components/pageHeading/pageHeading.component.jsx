import classes from "./pageHeading.module.css";

const PageHeading = ({ background, title }) => {
  return (
    <div className={classes.container}>
      <img
        src={background}
        alt="background"
        className={classes.backgroundImage}
      />
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeading;
