import { Card } from 'antd';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Лабораторная работа 3',
    description: '6 семестр. Измерение времени выполнения функций с использованием декораторов посредством модуля timeit.',
    link: 'https://replit.com/@gtbsilver/sem6-t1-lr3-1?v=1#main.py',
  },
  {
    title: 'Лабораторная работа 1-2',
    description: 'Считывание данных с csv файлов, применение гетеров, создание графиков на основе числовых данных.',
    link: 'https://replit.com/@gtbsilver/sem6-lr1-2?v=1#README.md',
  },
  {
    title: 'Лабораторная работа 8',
    description: '5 семестр. Применение паттернов проектирования, создание классов, реализация наследования.',
    link: 'https://replit.com/@gtbsilver/PROGA23-LR8?v=1#main.py',
  },
  {
    title: 'Лабораторная работа 5',
    description: '5 семестр. Работа с апи стороннего сервиса, использование библиотеки requests, применение гетеров и сетеров.',
    link: 'https://replit.com/@gtbsilver/PROGA23-LR5?v=1#main.py',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          extra={<a href={project.link} target="_blank" rel="noopener noreferrer">Подробнее</a>}
          style={{ margin: '20px', width: 500 }}
        >
          <p>{project.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
