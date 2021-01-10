import { mount } from '@vue/test-utils'
import { Foo } from '../Foo.jsx'

test('Foo', async () => {
  const wrapper = mount(Foo)
  expect(wrapper.html()).toContain('Count: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Count: 1')
  expect(wrapper.html()).toContain('Double: 2')
})
