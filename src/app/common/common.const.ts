
export const restrictPages = ['login', 'register'];

export const APPCONSTANT = {
  EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
  EMAIL_PHONE: /(^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$)|(^[0-9]+$)/
};


export class Constants {
  _data: any = 'data';
  _token: any = 'tkn';
  authToken = 'Authorization';
  staticToken = 'Basic UEFZUFJPX1dFQl9VU0VSOlBBWVBST19XRUJfVVNFUl9TRUNSRVQ=';
  resfreshStaticToken = 'Basic d2ViQ2xpZW50OndlYkNsaWVudFNlY3JldA==';
  serverErr = 'Something went wrong. Please try again after 5  minutes';
  dontHaveRights = 'You do not have edit rights.';
  noRecords = 'No Records Found';
  loading = 'loading....';
  maxUploadFileSize = 10 * 1024 * 1024;
  appRoutes = [
    {
      name: 'Disco Master',
      route: '/main/discoMaster',
      iconClass: 'fa-briefcase'
    },
    {
      name: 'Customer Master',
      route: '/main/customerMaster',
      iconClass: 'fa-user-cog'
    },
    {
      name: 'User Management',
      route: '/main/users',
      iconClass: 'fa-users'
    },
    {
      name: 'Role Management',
      route: '/main/roles',
      iconClass: 'fa-user-secret'
    },
    {
      name: 'PIN Generation',
      route: '/main/pinGeneration',
      iconClass: 'fa-key'
    },
    {
      name: 'Collection Partners',
      route: '/main/collPartners',
      iconClass: 'fa-handshake'
    },
    {
      name: 'Channel Managers',
      route: '/main/channels',
      iconClass: 'fa-link'
    },
    {
      name: 'Reports',
      route: '/main/reports',
      iconClass: 'fa-chart-bar'
    }
  ]
  patterns = {
    name: /^[a-zA-Z]((?!.*[-' ]{2})[a-zA-Z '-]?)+$/,
    lastName: /^[a-zA-Z_\-]+$/,
    alphaNumaric: /^[a-zA-Z0-9]*$/,
    phone: /^[0-9]+$/,
    password: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    emailPhone: /(^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$)|(^[0-9]+$)/,
    alphaNumericStartWithOnlyAlphabet: /^[a-zA-Z]([a-zA-Z0-9_]?)+$/,
    alphaNumericStartWithOnlyAlphabetWithSpace: /^[a-zA-Z]([a-zA-Z0-9\s]?)+$/,
    alphaNumericStartWithOnlyAlphabetWithSpaceAndDecimal: /^[a-zA-Z]([a-zA-Z0-9.\s]?)+$/,
    alphaNumericStartWithOnlyAlphabetWithSpaceAndUnderScore: /^[a-zA-Z]([a-zA-Z0-9_\s]?)+$/,
    alphaNumericStartWithOnlyAlphabetWithSpaceAndUnderScoreAndOneSCharoneTime: /^[a-zA-Z]((?!.*[-_ ]{2})[a-zA-Z0-9-_\s]?)+$/,
    alphaNumericStartWithAlphaNumericWithSpace: /^[a-zA-Z0-9]([a-zA-Z0-9\s]?)+$/,
    alphanumeric: /^[a-zA-Z0-9]+ ?([a-zA-Z0-9]+$)/,
    alphanumericWithSpaceAndDecimal: /^[a-zA-Z0-9]+ ?([a-zA-Z0-9.\s]+$)/,
    singleSpace: /^(?!.*\s\s)\S(.*\S)?$/,
    startWithAlphaNumeric: /^[a-zA-Z0-9]((?!.*[-_@*#&^!%$]{2})[\s\S]?)+/,
    anyThing: /^[a-zA-Z0-9]([\s\S]?)+/,
    numberOnly: /^\d+$/,
    numberWithNegative: /^[\+\-]?\d+$/,
    numberDecimalWithNegative: /^[\+\-]?\d*\.?\d{1,2}$/,
    numberDecimalWithNegativeString: '^[\\+\\-]?\\d*\\.?\\d{1,endDecimal}$',
    realComplexQuaterNumber: /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/,
    alphaNumericOnly: /^[a-zA-Z0-9]*$/,
    alphabetsWithSpace: /^[a-zA-Z ]*$/,
    remarksDescription: /^[a-zA-Z0-9]((?!.*[@!#\$\^%`~_&*()+=\-\[\]\\\';,\\/\{\}\|\":<>\?]{2})(?!.*[ ]{2})(?!.*[.]{2})[a-zA-Z0-9\s\r\n@!#\$\^%`~&_*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\?]?)+$/
  };
  dateFormat = 'dd/MM/yyyy';
  dateTimeFormat = 'dd/MM/yyyy HH:mm:ss';
  headerUserId = 'userId';
  loginConst = {
    userId: 'user_ID',
    userIdFormats: ['userId', 'user_ID', 'USER_ID'],
    userInfoObj: 'userInfo'
  };
  unauthorisedText = 'You are not authorised to view this page. Please contact Admin.'
  accessMenu = [
    {
      name: 'User Management',
      route: 'users'
    },
    {
      name: 'Screen Management',
      route: 'screens'
    },
    {
      name: 'Transaction Management',
      route: 'transactions'
    },
    {
      name: 'Content Management',
      route: 'webContent'
    },
    {
      name: 'Campaign Management',
      route: 'campaigns'
    },
    {
      name: 'Role Management',
      route: 'roles'
    },
    {
      name: 'mPos Onboarding',
      route: 'devices'
    },
    {
      name: 'Analytics',
      route: 'analytics'
    }
  ]


}
