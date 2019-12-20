import { shallow } from 'enzyme'
import { StaticTextBox } from './index'

describe('component', () => {
  const wrapper = shallow(<StaticTextBox />)

  it('exists', () => {
    expect(wrapper).toContainHTML('Text Box')
  })
})
