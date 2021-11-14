import FirstApp from '../FirstApp'
import {shallow} from 'enzyme';

describe('Test in <FirstApp />', () => {
    /*    test('should show the title message: Hello World', () => {
            const msg = 'Hello World';
            const wrapper = render(<FirstApp title={msg}/>);
            expect(wrapper.getByText(msg)).toBeInTheDocument();
        })*/

    test('should show the component successfully', () => {
        const msg = 'Hello World';
        const wrapper = shallow(<FirstApp title={msg}/>);
        expect(wrapper).toMatchSnapshot();
    })
})