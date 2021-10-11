import './styles.css';
import AVATAR from './duy-avatar.png';

export const App = () => {
  return (
    <>
      <h1>
        React App Template {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={AVATAR} alt='My Avatar' />
    </>
  );
};
