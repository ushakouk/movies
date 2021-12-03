import Button from "./Button";

export default {
  title: 'movies/common/Button',
  component: Button
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Text"
}

export const Primary = Template.bind({});
Primary.args = {
  style: "primary",
  text: "Text"
}

export const Negative = Template.bind({});
Negative.args = {
  style: "negative",
  text: "Text"
}


export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  style: "primary small",
  text: "Text"
}

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  style: "search-icon"
}