import RouteName from '../routename';
import { IMenuItem } from './_shared/MobileMenu';

export interface KeyValue {
  key: number;
  value: string;
}

export class Config {
  static Gender: KeyValue[] = [
    { key: 1, value: 'Male' },
    { key: 2, value: 'Female' }
  ];

  static Monthes = 'Jan-Feb-Mar-Apr-May-Jun-Jul-Aug-Sep-Oct-Nov-Dec'.split('-');
  static Weekdays = 'Sunday-Monday-Tuesday-Wednesday-Thursday-Friday-Saturday'.split(
    '-'
  );
  static ShortWeekdays = 'Sun-Mon-Tue-Wed-Thur-Fri-Sat'.split('-');

  static WeekdayObjects = Config.Weekdays.map((d, i) => {
    return { index: i.toString(), name: d };
  });

  static PageConfig = {
    length: 0,
    pageSize: 5,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20]
  };

  static ValidatorError = {
    emailExists: { emailExists: true }
  };

  static MobileMenu: IMenuItem[] = [
    { menu_text: 'Portfolio', action: RouteName.Home },
    { menu_text: 'About Me', action: RouteName.AboutMe },
    {
      menu_text: 'My Skills',
      action: 'skills',
      show_submenu: true,
      sub_menu: [
        { menu_text: 'Front-End', action: RouteName.Skills, param: 'front' },
        { menu_text: 'Back-End', action: RouteName.Skills, param: 'back' },
        { menu_text: 'Database', action: RouteName.Skills, param: 'data' }
      ]
    },
    // { menu_text: 'Gallery', action: RouteName.Home },
    { menu_text: 'My CV', action: RouteName.SignUp },

  ];
}

export enum ValidatorError {
  EMAIL_EXIST = 'EMAIL_EXIST'
}

export enum ClubClient {
  LPBC = 'LPBC',
  LVBC = 'LVBC',
  WIBC = 'WIBC'
}

export enum Sorting {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum ClaimType {
  Supervisor = '',
  Admin = 'Admin',
  Member = 'Member',
  Guest = 'Guest'
}

export enum EventName {
  Event_MetaInfoChanged = 'Event_MetaInfoChanged',
  Event_HideClubMainContent = 'Event_HideClubMainContent',
  Event_MobileToggleClicked = 'Event_MobileToggleClicked',
  Event_MenuItemClicked = 'Event_MenuItemClicked',
  Event_LoggedInUserChanged = 'Event_LoggedInUserChanged',
  Event_SignIn = 'Event_SignIn',
  Event_SignOut = 'Event_SignOut'
}
