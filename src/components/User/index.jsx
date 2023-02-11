import { User } from "./styled";

const AboutUser = ({ user }) => {
  const { name, course_module } = user;
  return (
    <User>
      <h1>Olá, {name}</h1>
      <p>{course_module}</p>
    </User>
  );
};
export default AboutUser;
