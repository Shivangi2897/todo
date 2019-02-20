import * as React from 'react';
import * as styles from '../style/Icon';
import * as cx from 'classnames';
const Icons = {
  burger: require('../../assets/action_icons/burger.png'),
  bolt: require('../../assets/action_icons/bolt.png'),
  cloud: require('../../assets/action_icons/cloud.png'),
  delete: require('../../assets/action_icons/delete.png'),
  docs: require('../../assets/action_icons/docs.png'),
  edit: require('../../assets/action_icons/edit.png'),
  examples: require('../../assets/action_icons/examples.png'),
  fork: require('../../assets/action_icons/fork.png'),
  heart: require('../../assets/action_icons/heart.png'),
  home: require('../../assets/action_icons/home.png'),
  load: require('../../assets/action_icons/load.png'),
  login: require('../../assets/action_icons/login.png'),
  logout: require('../../assets/action_icons/logout.png'),
  save: require('../../assets/action_icons/save.png'),
  send: require('../../assets/action_icons/send.png'),
  terminal: require('../../assets/action_icons/terminal.png'),
  thunder: require('../../assets/action_icons/thunder.png'),
  user: require('../../assets/action_icons/user.png')
};
export interface IconProps {
  name: keyof typeof Icons;
}
export interface TopBarIconProps extends IconProps {
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  active?: boolean;
  hint?: string;
}
export const IconImage = ({ name }: IconProps) => <img src={Icons[name]} />;
export const TopBarIcon = ({ name, onClick, active, hint, href }: TopBarIconProps) => (
  <a
    className={cx(styles.TopBarIcon, {
      active
    })}
    href={href}
    onClick={onClick}
  >
    <IconImage name={name} />
    {hint && <div className={cx(styles.Hint, 'hint')}>{hint}</div>}
  </a>
);
