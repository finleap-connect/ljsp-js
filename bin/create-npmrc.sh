if [[ ! -f .npmrc ]]; then
  echo 'No .npmrc found! Creating one now. Please review the following link for more information: https://docs.gitlab.com/ee/user/packages/npm_registry/index.html#authenticating-with-a-ci-job-token'

  {
    echo '@${CI_PROJECT_ROOT_NAMESPACE}:registry=${CI_SERVER_PROTOCOL}://${CI_SERVER_HOST}:${CI_SERVER_PORT}/api/v4/projects/${CI_PROJECT_ID}/packages/npm/'
    echo '//${CI_SERVER_HOST}:${CI_SERVER_PORT}/api/v4/packages/npm/:_authToken=${CI_JOB_TOKEN}'
    echo '//${CI_SERVER_HOST}:${CI_SERVER_PORT}/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${CI_JOB_TOKEN}'
  } >> .npmrc

fi
