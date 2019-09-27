import Users from '../components/Users';
import { Provider } from 'react-redux';
import store from '../redux/store/index';

const Index = () => (
    <Provider store={store}>
        <Users />
    </Provider>
);

export default Index;
