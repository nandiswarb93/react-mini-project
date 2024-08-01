import { useParams } from "react-router-dom";
const Recipe = () => {
  const param = useParams();
  return (
    <>
      {console.log(param)}
      <h1>Recipe {param.id}</h1>
    </>
  );
};
export default Recipe;
