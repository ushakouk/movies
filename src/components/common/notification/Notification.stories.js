import Notification from "./Notification";

export default {
  title: 'movies/common/Notification',
  component: Notification
}

const Template = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  message: "Here is text"
}

export const Error = Template.bind({});
Error.args = {
  type: "error",
  message: "Here is text"
}