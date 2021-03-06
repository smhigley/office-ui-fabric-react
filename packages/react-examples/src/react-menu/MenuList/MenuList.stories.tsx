import * as React from 'react';

import {
  MenuList,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuGroup,
  MenuDivider,
  MenuGroupHeader,
  MenuItemCheckboxProps,
  MenuItemRadioProps,
  MenuListProps,
} from '@fluentui/react-menu';
import { CutIcon, PasteIcon, EditIcon, AcceptIcon } from '@fluentui/react-icons-mdl2';
import { makeStylesCompat } from '@fluentui/react-make-styles';

const useContainerStyles = makeStylesCompat([
  // This should eventually be the popup container styles
  [
    null,
    theme => ({
      backgroundColor: theme.alias.color.neutral.neutralBackground1,
      minWidth: '128px',
      minHeight: '48px',
      maxWidth: '128px',
      boxShadow: `${theme.alias.shadow.shadow16}`,
      paddingTop: '4px',
      paddingBottom: '4px',
    }),
  ],
]);
const Container: React.FC = props => {
  const classNames = useContainerStyles({});
  return <div className={classNames}>{props.children}</div>;
};

export const MenuListExample = () => (
  <Container>
    <MenuList>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuItem>Edit</MenuItem>
    </MenuList>
  </Container>
);

export const MenuListWithIconsExample = () => (
  <Container>
    <MenuList>
      <MenuItem icon={<CutIcon />}>Cut</MenuItem>
      <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
      <MenuItem icon={<EditIcon />}>Edit</MenuItem>
    </MenuList>
  </Container>
);

export const MenuListWithGroups = () => (
  <Container>
    <MenuList>
      <MenuGroup>
        <MenuGroupHeader>Section header</MenuGroupHeader>
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup>
        <MenuGroupHeader>Section header</MenuGroupHeader>
        <MenuItem icon={<CutIcon />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      </MenuGroup>
    </MenuList>
  </Container>
);

export const MenuListWithDivider = () => (
  <Container>
    <MenuList>
      <MenuItem icon={<CutIcon />}>Cut</MenuItem>
      <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
      <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      <MenuDivider />
      <MenuItem icon={<CutIcon />}>Cut</MenuItem>
      <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
      <MenuItem icon={<EditIcon />}>Edit</MenuItem>
    </MenuList>
  </Container>
);

export const MenuListWithCheckboxes = (props: { defaultCheckedValues?: MenuListProps['defaultCheckedValues'] }) => {
  const checkmark = <AcceptIcon />;

  return (
    <Container>
      <MenuList defaultCheckedValues={props.defaultCheckedValues}>
        <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut" checkmark={checkmark}>
          Cut
        </MenuItemCheckbox>
        <MenuItemCheckbox icon={<PasteIcon />} name="edit" value="paste" checkmark={checkmark}>
          Paste
        </MenuItemCheckbox>
        <MenuItemCheckbox icon={<EditIcon />} name="edit" value="edit" checkmark={checkmark}>
          Edit
        </MenuItemCheckbox>
      </MenuList>
    </Container>
  );
};

export const MenuListWithRadios = () => {
  const checkmark = <AcceptIcon />;

  return (
    <Container>
      <MenuList>
        <MenuItemRadio icon={<CutIcon />} name="font" value="segoe" checkmark={checkmark}>
          Segoe
        </MenuItemRadio>
        <MenuItemRadio icon={<PasteIcon />} name="font" value="calibri" checkmark={checkmark}>
          Calibri
        </MenuItemRadio>
        <MenuItemRadio icon={<EditIcon />} name="font" value="arial" checkmark={checkmark}>
          Arial
        </MenuItemRadio>
      </MenuList>
    </Container>
  );
};

export const DefaultCheckedValues = () => <MenuListWithCheckboxes defaultCheckedValues={{ edit: ['cut'] }} />;

export const MenuListWithSelectionGroups = () => {
  const checkmark = <AcceptIcon />;

  return (
    <Container>
      <MenuList>
        <MenuGroup>
          <MenuGroupHeader>Checkbox group</MenuGroupHeader>
          <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut" checkmark={checkmark}>
            Cut
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<PasteIcon />} name="edit" value="paste" checkmark={checkmark}>
            Paste
          </MenuItemCheckbox>
          <MenuItemCheckbox icon={<EditIcon />} name="edit" value="edit" checkmark={checkmark}>
            Edit
          </MenuItemCheckbox>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuGroupHeader>Radio group</MenuGroupHeader>
          <MenuItemRadio icon={<CutIcon />} name="font" value="segoe" checkmark={checkmark}>
            Segoe
          </MenuItemRadio>
          <MenuItemRadio icon={<PasteIcon />} name="font" value="calibri" checkmark={checkmark}>
            Caliri
          </MenuItemRadio>
          <MenuItemRadio icon={<EditIcon />} name="font" value="arial" checkmark={checkmark}>
            Arial
          </MenuItemRadio>
        </MenuGroup>
      </MenuList>
    </Container>
  );
};

const MemoRadio = React.memo((props: MenuItemRadioProps) => {
  // use icons in the memo because JSX will always create a new object
  // possible to memoize icons but it can be overkill
  return (
    <MenuItemRadio icon={<EditIcon />} name={props.name} value={props.value} checkmark={<AcceptIcon />}>
      {props.children}
    </MenuItemRadio>
  );
});

export const MemoRadioItems = () => {
  return (
    <Container>
      <MenuList>
        <MemoRadio name="font" value="segoe">
          Segoe
        </MemoRadio>
        <MemoRadio name="font" value="calibri">
          Calibri
        </MemoRadio>
        <MemoRadio name="font" value="arial">
          Arial
        </MemoRadio>
      </MenuList>
    </Container>
  );
};

const MemoCheckbox = React.memo((props: MenuItemCheckboxProps) => {
  // use icons in the memo because JSX will always create a new object
  // possible to memoize icons but it can be overkill
  return (
    <MenuItemCheckbox icon={<EditIcon />} name={props.name} value={props.value} checkmark={<AcceptIcon />}>
      {props.children}
    </MenuItemCheckbox>
  );
});

export const MemoCheckboxItems = () => {
  return (
    <Container>
      <MenuList>
        <MemoCheckbox name="font" value="segoe">
          Segoe
        </MemoCheckbox>
        <MemoCheckbox name="font" value="calibri">
          Calibri
        </MemoCheckbox>
        <MemoCheckbox name="font" value="arial">
          Arial
        </MemoCheckbox>
      </MenuList>
    </Container>
  );
};

export const MenuListWithCheckboxesControlled = () => {
  const checkmark = <AcceptIcon />;
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({});
  const onChange = (e: React.SyntheticEvent, name: string, items: string[]) => {
    setCheckedValues(s => {
      return s ? { ...s, [name]: items } : { [name]: items };
    });
  };

  return (
    <Container>
      <MenuList checkedValues={checkedValues} onCheckedValueChange={onChange}>
        <MenuItemCheckbox icon={<CutIcon />} name="edit" value="cut" checkmark={checkmark}>
          Cut
        </MenuItemCheckbox>
        <MenuItemCheckbox icon={<PasteIcon />} name="edit" value="paste" checkmark={checkmark}>
          Paste
        </MenuItemCheckbox>
        <MenuItemCheckbox icon={<EditIcon />} name="edit" value="edit" checkmark={checkmark}>
          Edit
        </MenuItemCheckbox>
      </MenuList>
    </Container>
  );
};

export const MenuListWithRadiosControlled = () => {
  const checkmark = <AcceptIcon />;
  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({ checkbox: ['2'] });
  const onChange = (e: React.SyntheticEvent, name: string, items: string[]) => {
    setCheckedValues(s => ({ ...s, [name]: items }));
  };

  return (
    <Container>
      <MenuList checkedValues={checkedValues} onCheckedValueChange={onChange}>
        <MenuItemRadio icon={<CutIcon />} name="font" value="segoe" checkmark={checkmark}>
          Segoe
        </MenuItemRadio>
        <MenuItemRadio icon={<PasteIcon />} name="font" value="calibri" checkmark={checkmark}>
          Calibri
        </MenuItemRadio>
        <MenuItemRadio icon={<EditIcon />} name="font" value="arial" checkmark={checkmark}>
          Arial
        </MenuItemRadio>
      </MenuList>
    </Container>
  );
};
