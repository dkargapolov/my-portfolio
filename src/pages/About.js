import { Card } from 'antd';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <Card title="Обо мне" bordered={false} style={{ width: 500 }}>
        <p>Я студент 4 курса Каргаполов Денис Андреевич. Обучаюсь на направлении «Информатика и вычислительная техника».</p>
        <p>Университет: РГПУ им. Герцена.</p>
        <p>В этом портфолио вы можете увидеть:</p>
        <ul>
          <li>Различные программы на Python, JS, C, Pascal</li>
          <li>Применение паттернов проектирования</li>
          <li>Креативные решения задач</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;
