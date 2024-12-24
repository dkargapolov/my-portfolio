import { Typography } from 'antd';
import '../styles/Contact.css';

const { Title, Link } = Typography;

const Contact = () => {
  return (
    <div className="contact">
      <Title level={2}>Связаться со мной</Title>
        <p>GitHub: <Link href="https://github.com/dkargapolov" target="_blank">
          dkargapolov
        </Link></p>
        <p>Email: <Link href="mailto:tralling705@gmail.com">
          tralling705@gmail.com
        </Link></p>
      
    </div>
  );
};

export default Contact;