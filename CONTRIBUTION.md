# Contribution

We are going to base our Github practices on [DG's Github Practices](ttp://wiki.digitalglobe.com/display/GitHub/GitHub+at+DigitalGlobe).

This is our internal practices:

## Github Working Flow

![Git Flow](http://nvie.com/img/git-model@2x.png)

These are the working steps:

1. Clone the repository in your local machine: `$ git clone https://github.com/DigitalGlobe/cloud-cover-ui.git`

2. Checkout **develop** branch: `$ git checkout develop`
3. Create your feature branch: `$ git checkout -b FEATURE_NAME`
4. Work on your changes.
5. Make the commits with functional code.
6. The commit messages should have the following prefixes:
	- **add**: when you add a new file or functionality
	- **fix**: when you fix a bug or file error
	- **edit**: when you edit a piece of code but the functionality is the same
	- **delete**: when you delete a functionality or file

The messages should be explicit, that everybody developer or not can understand the change.

7. Push your changes:
	- Before a push you **always** should pull and rebase last changes from develop: `$ git pull --rebase origin develop`
	- Push your changes: `$ git push origin FEATURE_NAME`

8. Create a pull request:
	- Go to the repository in github.com
	- Go to your branch and make a new pull request.
	- Assign the PR to your partner in order to make the code review.
9. After the Code Review, merge the code into **develop**, and remove the feature branch.
