import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { User } from "./styled";

const AboutUser = () => {
  const {user} = useContext(UserContext);
  const {name, course_module } = user;
 
  return (
    <User>
      <h1>Olá, {name}</h1>
      <p>{course_module}</p>
    </User>
  );
};
export default AboutUser;
