// Development: used for actively developing locally using non-production resources
const development = {
  CONFIG_MODE: "development",
  STRIPE_KEY: "pk_test_Xt1sNlUfR6bZwd66WfxRPHGg00E9SpX4Sy",
  s3: {
    REGION: "us-east-1",
    BUCKET: "editmule-2-api-dev-attachmentsbucket-ejoo37si6wz"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v1xqiqwcrc.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_unaCRHOVU",
    APP_CLIENT_ID: "3rbl1nhup1fsgeqgenpmggjpok",
    IDENTITY_POOL_ID: "us-east-1:67faef25-1dbc-4aa9-b523-be3dd9920edf"
  }
};

// Staging: testing in live environment, but using non-production resources (staging.editmule.com)
const staging = {
  CONFIG_MODE: "staging",
  STRIPE_KEY: "pk_test_Xt1sNlUfR6bZwd66WfxRPHGg00E9SpX4Sy",
  s3: {
    REGION: "us-east-1",
    BUCKET: "editmule-2-api-dev-attachmentsbucket-ejoo37si6wz"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v1xqiqwcrc.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_unaCRHOVU",
    APP_CLIENT_ID: "3rbl1nhup1fsgeqgenpmggjpok",
    IDENTITY_POOL_ID: "us-east-1:67faef25-1dbc-4aa9-b523-be3dd9920edf"
  }
};

// Production: full client-facing site with live production resources (www.editmule.com)
const production = {
  CONFIG_MODE: "production",
  STRIPE_KEY: "pk_live_JASopZlaOkFhGj5WnnidVV0100DwSUduBg",
  s3: {
    REGION: "us-east-1",
    BUCKET: "editmule-2-api-prod-attachmentsbucket-4ehmwlpjajxv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qxn3tijge0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0sa3SjRLP",
    APP_CLIENT_ID: "2rgjidsj9pfu3co173g6p49gfk",
    IDENTITY_POOL_ID: "us-east-1:743d02dd-99e2-4ed7-ad8f-583398425d6c"
  }
};

// Default to development mode if not explicitely set
let config = development;
if (process.env.REACT_APP_CONFIG_MODE) {
  switch(process.env.REACT_APP_CONFIG_MODE) {
    case 'production':
      config = production;
      break;
    case 'staging':
      config = staging;
      break;
  }
}

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
