import { Loader } from '@mantine/core';
import './Loader.scss';

const CustomLoader = () => {
  return (
    <div className="loader-overlay">
      <Loader color="lime" size={100} variant="bars" />
    </div>
  );
};

export default CustomLoader;
