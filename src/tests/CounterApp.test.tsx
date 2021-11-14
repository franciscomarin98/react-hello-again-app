import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';

describe('Tests in <CounterApp/>', () => {

    test('should show the CounterApp component successfully', () => {
        const wrapper = shallow(<CounterApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show an HTML <h2> element with the value of counter = 100', () => {
        const propValue = 100;
        const wrapper = shallow(<CounterApp value={propValue}/>);
        const contentFound = wrapper.find('h2').text().trim();
        expect(contentFound).toBe(propValue.toString());
    });

})