import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const SwitchCameraIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M17.5,8A1.54,1.54,0,0,1,19,9.5v7A1.54,1.54,0,0,1,17.5,18H9.82C8,18,8,14.9,8,13.66V12.34C8,11.1,8,8,9.82,8ZM9.8,18.46a.5.5,0,0,1,.5.5c0,.47-.58.49-.8.83.48.92,4.79,1.2,5.81,1.23C15,20.76,14,19.89,14,19.5a.51.51,0,0,1,.5-.5.47.47,0,0,1,.35.15l2,2a.48.48,0,0,1,0,.7l-2,2a.47.47,0,0,1-.35.15.51.51,0,0,1-.5-.5c0-.41,1-1.22,1.27-1.48-1.35,0-6.77-.3-6.77-2.24A1.59,1.59,0,0,1,9.8,18.46ZM9.82,9C9,9,9,11.91,9,12.48v1C9,14.09,9,17,9.82,17H17.5a.51.51,0,0,0,.5-.5v-7a.51.51,0,0,0-.5-.5ZM22.2,18.46a1.58,1.58,0,0,1,1.3,1.32c0,1.43-3.27,2.06-4.36,2.06a.5.5,0,0,1-.5-.5c0-1,3.41-.51,3.86-1.57-.25-.2-.8-.44-.8-.81A.5.5,0,0,1,22.2,18.46ZM23.5,9a.51.51,0,0,1,.5.5v7a.51.51,0,0,1-.5.5.48.48,0,0,1-.34-.14l-2.53-2.41a2,2,0,0,1,0-2.9l2.53-2.41A.48.48,0,0,1,23.5,9ZM21,13a.94.94,0,0,0,.31.72L23,15.33V10.67l-1.69,1.61A.94.94,0,0,0,21,13Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M17.5,8A1.54,1.54,0,0,1,19,9.5v7A1.54,1.54,0,0,1,17.5,18H9.82C8,18,8,14.89,8,13.66V12.34C8,11.1,8,8,9.82,8ZM9.8,18.46a.5.5,0,0,1,.5.5c0,.52-.6.46-.8.83.41.9,4.82,1.2,5.81,1.23C15,20.76,14,19.9,14,19.5a.51.51,0,0,1,.5-.5.47.47,0,0,1,.35.15l2,2a.48.48,0,0,1,0,.7l-2,2a.47.47,0,0,1-.35.15.51.51,0,0,1-.5-.5c0-.38,1-1.23,1.27-1.48-1.34,0-6.77-.32-6.77-2.24A1.59,1.59,0,0,1,9.8,18.46Zm12.4,0a1.58,1.58,0,0,1,1.3,1.32c0,1.44-3.27,2.06-4.36,2.06a.5.5,0,0,1-.5-.5c0-1,3.46-.55,3.86-1.57-.23-.29-.8-.36-.8-.81A.5.5,0,0,1,22.2,18.46ZM23.5,9a.51.51,0,0,1,.5.5v7a.51.51,0,0,1-.5.5.48.48,0,0,1-.34-.14l-2.54-2.41a2,2,0,0,1,0-2.9l2.54-2.41A.48.48,0,0,1,23.5,9Z"
      />
    </svg>
  ),
  displayName: 'SwitchCameraIcon',
});
