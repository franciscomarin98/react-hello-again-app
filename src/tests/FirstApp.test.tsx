import {render} from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('Test in <FirstApp />', () => {
    test('should show the title message: Hello World', () => {
        const msg = 'Hello World';
        const wrapper = render(<FirstApp title={msg}/>);
        expect(wrapper.getByText(msg)).toBeInTheDocument();
    })
})