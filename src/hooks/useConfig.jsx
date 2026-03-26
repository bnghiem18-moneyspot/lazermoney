import { createContext, useContext } from 'react';
import config from '../config';

const ConfigContext = createContext(config);

export const ConfigProvider = ({ children, value = config }) => {
  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export default useConfig;
