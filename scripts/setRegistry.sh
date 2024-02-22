echo 'Setting registry token';
echo token ${NPM_PUBLISH_TOKEN};
pnpm config set //registry.npmjs.org/:_authToken=${NPM_PUBLISH_TOKEN};
echo 'Registry token set';
