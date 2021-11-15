import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';

describe('Tests in <CounterApp/>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test('should show the CounterApp component successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show an HTML <h2> element with the value of counter = 100', () => {
        const propValue = 100;
        const wrapper = shallow(<CounterApp value={propValue}/>);
        const contentFound = wrapper.find('h2').text().trim();
        expect(contentFound).toBe(propValue.toString());
    });

    test('should increase the value of the state by 1.', () => {
        wrapper.find('button').at(0).simulate('click');
        const contentFound = wrapper.find('h2').text().trim();
        expect(contentFound).toBe('11');
    });

    test('should decrement the value of the state by 1.', () => {
        wrapper.find('button').at(2).simulate('click');
        const contentFound = wrapper.find('h2').text().trim();
        expect(contentFound).toBe('9');
    });

})