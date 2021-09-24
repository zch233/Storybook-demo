import GupoButton from '../../components/Button.vue';
import { Story } from '@storybook/vue';

export default {
  title: 'Basic/Button 按钮',
  argTypes: {
    size: {
      control: { type: 'radio' },
      description: '按钮大小',
      defaultValue: 'medium',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
      options: ['mini', 'medium', 'large']
    },
    type: {
      control: { type: 'radio' },
      type: { name: 'string', required: false },
      description: '按钮类型',
      table: {
        type: { summary: 'string' },
      },
      options: ['primary', 'success', 'error', 'warning']
    },
  },
};


export const StageExample: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GupoButton },
  template: `
      <GupoButton v-bind="$props" v-on="$listeners">组件</GupoButton>
  `,
});

StageExample.storyName = '示例展示';

export const BaseExample: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GupoButton },
  template: `
      <section>
        <div class="source">
          <GupoButton>默认按钮</GupoButton>
          <GupoButton type="primary">主要按钮</GupoButton>
          <GupoButton type="success">成功按钮</GupoButton>
          <GupoButton type="warning">警告按钮</GupoButton>
          <GupoButton type="info">信息按钮</GupoButton>
          <GupoButton type="error">失败按钮</GupoButton>
        </div>
        <div class="source">
          <GupoButton round>圆角按钮</GupoButton>
          <GupoButton round type="primary">主要按钮</GupoButton>
          <GupoButton round type="success">成功按钮</GupoButton>
          <GupoButton round type="warning">警告按钮</GupoButton>
          <GupoButton round type="info">信息按钮</GupoButton>
          <GupoButton round type="error">失败按钮</GupoButton>
        </div>
      </section>
  `,
});

BaseExample.storyName = '基础用法'

BaseExample.parameters = {
  docs: {
    description: {
      story: '基础的按钮用法。',
    },
  }
}

