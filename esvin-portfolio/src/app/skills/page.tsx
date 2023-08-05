import { skills } from "../constants";

const SkillsPage: React.FC = () => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.name}</span>
            {skill.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
