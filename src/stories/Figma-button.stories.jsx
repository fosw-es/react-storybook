import React from 'react';

import { FigmaButton } from './Figma-button';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: 'Figma/Figma-Button',
    component: FigmaButton,
    decorators: [withDesign],
};

const Template = (args) => <FigmaButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    mode: 'default',
};
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/XQZ70KZhPLc6Ngms52EOmX/Focus-Designsystem-B-team-library?node-id=412%3A11010',
    }
}

export const Hover = Template.bind({});
Hover.args = {
    mode: 'hover',
};
Hover.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/XQZ70KZhPLc6Ngms52EOmX/Focus-Designsystem-B-team-library?node-id=412%3A11012',
    }
}

export const Active = Template.bind({});
Active.args = {
    mode: 'active',
};
Active.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/XQZ70KZhPLc6Ngms52EOmX/Focus-Designsystem-B-team-library?node-id=412%3A11014',
    }
}
