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
    { menu_text: 'About Me', route: RouteName.AboutMe },
    { menu_text: 'Work Experience', route: RouteName.Home },
    {
      menu_text: 'My Skill Set',
      route: 'skills',
      show_submenu: true,
      sub_menu: [
        { menu_text: 'Front-End', route: RouteName.Skills, param: 'front' },
        { menu_text: 'Back-End', route: RouteName.Skills, param: 'back' },
        { menu_text: 'Database', route: RouteName.Skills, param: 'data' }
      ]
    },
    // { menu_text: 'Gallery', action: RouteName.Home },
    { menu_text: 'My CV', isLink: true, route: 'https://docs.google.com/document/d/1wilLURW7nKxX_g_wDlyGBfYDjMGx9Du-pRYFw-ed8Ok/edit' },
    { menu_text: 'Some Photos', route: RouteName.Photo },
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
