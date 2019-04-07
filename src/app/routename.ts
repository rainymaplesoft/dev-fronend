export class RouteName {
  get default() {
    return '';
  }

  static Exception = 'fe/exception';
  static FE_Home = 'fe/home';
  static FE_About = 'fe/about';
  static FE_Skills = 'fe/skills';
  static FE_Photo = 'fe/photo';
  static FS_Home = 'fs/home';
  static FS_About = 'fs/about';
  static FS_Skills = `fs/skills`;
  static FS_Photo = 'fs/photo';


  static SignUp = `signup`;
  static ClubSetting = 'setting/club';
  static AccountSetting = 'setting/account';
  static BookingSetting = 'setting/booking';
  static User = `setting/user`;

  static GeoSchoolInfo = 'schoolinfo';

  static Terminology = 'i18n';
  static TermsEdit = 'termsedit';
  static EditClient = 'editclient';
  static ManageTerm = 'manageterm';

  static DefaultRoute = RouteName.FE_Home;
}
export default RouteName;
