import { shallowMount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  const wrapper = shallowMount(BaseButton, {
    propsData: {
      text: 'foo',
    },
  });

  it('displays the text', () => {
    expect(wrapper.text()).toEqual('foo');
  });
});
