# https://my-security-check.com

Is the website to support companies to secure there business.
It's made for their needs.

The code that you see here is made with support form experts from all over the world.

Some parts of it are open source to provide the maximum of transparency but be aware that some content is copy right protected, especially pictures.
Everyone can check the code, report issues, add suggestions and contribute.


# How to start developing

1. Make sure node v14 and npm v7 is installed.

1. Fork the project on github by pressing the fork button in the top right corner.

    More information about forking you will find here: https://docs.github.com/en/get-started/quickstart/fork-a-repo

1. Install Pull Bot 

    it helps you to keep your fork uptodate with changes you can do so by installing it in to your fork following instructions on this page:
    https://github.com/apps/pull/installations/new

1. clone your new fork with git

1. configure the upstream

    you can do that with the following command:
  `git remote add upstream https://github.com/my-security-check-com/sveltekit-site.git`

1. before you start a new branch make sure you start with uptodate 

   - `git switch main`
   - `git fetch upstream`
   - `git rebase upstream/main`
   - `git push origin main --force`

1. start a new branch 

    - `git switch -c my-new-feature`

1. run the application in dev mode

    - `npm install`
    - `npm run dev`

# how to build / test

to create the optimized build which minimizes CSS/HTML/JS run: 

   - `npm run build`
   - `firebase serve`

when you feature is ready create a pull request and wait some seconds for github to run the deployment.
it will add a link to you merge request where the result of you work will be visible.

# Can I get payed for my contribution?

yes you can sent me offers. Please fork the project (see "how to start developing above) before starting any offer.


# Can I use the code for other projects

yes with some restrictions, there is a strong copy left enforced by the license please read the license.


# Contributens are welcome

you miss a product or feature just open a issue

# security bug found?

you found a security issue? please contact me direct message/email.
