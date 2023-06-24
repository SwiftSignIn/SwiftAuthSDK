Swift Signin Styling
==========================

This Library contains the necessary styling button to have an approved signin application

Installing
----------

You can install using `yarn` or `npm`_:

    $ yarn add swift-auth-sdk
    $ npm install swift-auth-sdk

Extras
------

[swift-auth-sdk](https://github.com/SwiftSignIn/SwiftAuthClient) has few extras that you can install. For example::

    $ yarn add swift-auth-client
    $ npm install swift-auth-client


TODO

Documentation
-------------

TODO

Current Maintainers
-------------------
For Direct Contact Please use email header "SwiftAuthSDK - {Your inquire}"

- [Pablo Alguindigue](https://www.linkedin.com/in/pablo-alguindigue-425a1887/) - pablo.alguindigue@gmail.com 
- [Luke Blauvelt](TO ADD) - TODO


Contributing
------------

Contributions to this library are always welcome and highly encouraged.

See `CONTRIBUTING.MD`_ for more information on how to get started.

.. _CONTRIBUTING.md: https://github.com/SwiftSignIn/SwiftAuthSDK/blob/main/CONTRIBUTING

License
-------

Apache 2.0 - See `the LICENSE`_ for more information.

.. _the LICENSE: https://github.com/SwiftSignIn/SwiftAuthSDK/blob/main/LICENSE

##Versioning
Use conventional commits: For standard-version to work correctly, your commits should follow the conventional commit format. The format of a commit message should be type(scope): subject, where type can be one of the following:

feat: A new feature
fix: A bug fix
docs: Documentation changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing tests or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
For example:
```git commit -m "feat(user-auth): add oauth2 authentication"```
Run standard-version: When you're ready to release a new version, simply run npm run release or yarn release. This will do the following:

Bump the version in metadata files (like package.json)
Use conventional-changelog to update CHANGELOG.md
Commit package.json (or other metadata file) and CHANGELOG.md
Tag a new release
Here's the usual workflow:

You make changes to your code.
Stage those changes with git add .
Commit those changes with a conventional commit message, like git commit -m "feat: add new feature"
Once all your changes are committed, you can run npm run release. This will:
Determine the next semantic version number based on your commit messages.
Update the version number in your package.json.
Generate or update your CHANGELOG.md.
Commit these changes and create a new version tag.
Then you can push your changes and the new tag to your repository with git push --follow-tags.