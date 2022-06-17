import { useSelector } from "react-redux";

const Home = () => {
  const appInfo = useSelector(state => state.app);
  return (
    <>
      {appInfo.name && <h1>{appInfo.name}</h1>}
      {appInfo?.description && <h3>{appInfo.description}</h3>}
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
