import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const AudioLoadingIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 18 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M16.008,8a3.021,3.021,0,0,0-3,3v5a3,3,0,0,0,6,0V11A3.031,3.031,0,0,0,16.008,8Zm2,8a2,2,0,0,1-4,0V11a2,2,0,0,1,4,0Zm4.57,1.828a2.537,2.537,0,0,1,1.594.57c-.266,0-1.024-.14-1.024.344a.362.362,0,0,0,.336.344h1.6a.37.37,0,0,0,.344-.344V17.148a.357.357,0,0,0-.368-.343c-.39,0-.335.633-.32.883a3.425,3.425,0,0,0-5.594,2.648.478.478,0,0,0,.461.461.458.458,0,0,0,.414-.289c.063-.141.071-.61.133-.836A2.518,2.518,0,0,1,22.578,17.828Zm2.969,2.055a.471.471,0,0,0-.422.281c-.078.188-.055.594-.125.836a2.516,2.516,0,0,1-4.023,1.281c.257,0,1.023.141,1.023-.343a.351.351,0,0,0-.336-.344h-1.6a.357.357,0,0,0-.343.344v1.593a.37.37,0,0,0,.343.344c.43,0,.36-.6.344-.891a3.345,3.345,0,0,0,2.172.774A3.426,3.426,0,0,0,26,20.336.475.475,0,0,0,25.547,19.883ZM16.008,21a5.021,5.021,0,0,1-4.32-2.492A4.954,4.954,0,0,1,11,16a.5.5,0,0,0-1,0,6.041,6.041,0,0,0,5.508,5.977v1.57a.507.507,0,0,0,.5.453.514.514,0,0,0,.5-.5V21.977a6.066,6.066,0,0,0,1.531-.336V20.562A5.034,5.034,0,0,1,16.008,21Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M15.508,23.5V21.977A6.041,6.041,0,0,1,10,16a.514.514,0,0,1,.5-.5.505.505,0,0,1,.5.5,4.957,4.957,0,0,0,.688,2.508,4.973,4.973,0,0,0,6.351,2.054v1.079a6.066,6.066,0,0,1-1.531.336V23.5a.514.514,0,0,1-.5.5A.5.5,0,0,1,15.508,23.5Zm4.211.031V21.938a.357.357,0,0,1,.343-.344h1.6a.351.351,0,0,1,.336.344c0,.484-.766.343-1.023.343A2.516,2.516,0,0,0,25,21c.07-.242.047-.648.125-.836a.455.455,0,0,1,.875.172,3.439,3.439,0,0,1-3.359,3.422,3.388,3.388,0,0,1-2.235-.774c.008.118.008.235.008.352,0,.242-.039.539-.352.539A.37.37,0,0,1,19.719,23.531Zm-.571-3.195a3.425,3.425,0,0,1,5.594-2.648c-.008-.118-.008-.227-.008-.344,0-.211.047-.539.328-.539a.357.357,0,0,1,.368.343v1.594a.37.37,0,0,1-.344.344h-1.6a.362.362,0,0,1-.336-.344c0-.484.758-.344,1.024-.344a2.513,2.513,0,0,0-4.016,1.274c-.062.226-.07.7-.133.836a.458.458,0,0,1-.414.289A.478.478,0,0,1,19.148,20.336ZM13,16V11a3,3,0,0,1,6.008,0v5A3,3,0,0,1,13,16Z"
      />
    </svg>
  ),
  displayName: 'AudioLoadingIcon',
});
