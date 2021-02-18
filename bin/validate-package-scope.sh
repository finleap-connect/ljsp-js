if [[ ! $NPM_PACKAGE_NAME =~ ^@$CI_PROJECT_ROOT_NAMESPACE/ ]]; then
  echo "Invalid package scope! Packages must be scoped in the root namespace of the project, e.g. \"@${CI_PROJECT_ROOT_NAMESPACE}/${CI_PROJECT_NAME}\""
  echo 'For more information, see https://docs.gitlab.com/ee/user/packages/npm_registry/#package-naming-convention'
  exit 1
fi
