import FirstApp from '../FirstApp'
import {shallow} from 'enzyme';

describe('Tests in <FirstApp />', () => {
    // React Testing Library
    /*    test('should show the title message: Hello World', () => {
            const msg = 'Hello World';
            const wrapper = render(<FirstApp title={msg}/>);
            expect(wrapper.getByText(msg)).toBeInTheDocument();
        })*/

    // Enzyme
    test('should show the component successfully', () => {
        const msg = 'Hello World';
        const wrapper = shallow(<FirstApp title={msg}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show a <p> HTML element with a message that comes from a prop and its content says: Test', () => {
        const title = 'Hello World';
        const message = 'Test';
        const wrapper = shallow(
            <FirstApp
                title={title}
                message={message}
            />
        );
        const contentFound = wrapper.find('p').text();
        expect(contentFound).toBe(message);
    })
})
