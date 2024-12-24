import { Button } from 'antd';
import '../styles/Home.css'; // Подключение стилей

const Home = () => {
  return (
    <div className="home">
      <h1>Портфолио по дисциплине "Программирование"</h1>
      <p>Студент 4го курса ИВТ Каргаполов Денис</p>
      <Button type="primary" href="/projects">
        Посмотреть проекты
      </Button>
    </div>
  );
};

export default Home;
