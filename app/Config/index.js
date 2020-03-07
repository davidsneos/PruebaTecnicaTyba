// Simple React Native specific changes
import DevConfig from 'Config/Environments/DevConfig';
import ProdConfig from 'Config/Environments/ProdConfig';

const AppConfig = __DEV__ ? DevConfig : ProdConfig;
export {AppConfig};
