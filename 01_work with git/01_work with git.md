# Work with Git

## Второй уровень("Централизованная система контроля версий"):

1. On new PC in console command:

		ssh-keygen
<br>

		cat ~/.ssh/id_rsa.pub
<br>

or

	pbcopy < ~/.ssh/id_rsa.pub
<br>

then add new SSH key in githab/settings/SSH and GPG keys

then create new folder for git and type in it with console command:

	git init
<br>
Add files in folder

	git status
<br>

	git add -A
<br>

	git commit -m "01_work with git"
<br>

	git config --global user.name "Win X work"
<br>

	git config --global user.email "winxwork@i.ua"
<br>

	git commit -m "01_work with git"
<br>

	git log
<br>

	git remote add origin git@github.com:Kostya012/Fullstack-php.git
<br>

	git remote -v
<br>

    git pull origin master
<br>

    git push

if fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

then in gitlab.com

	git clone git@gitlab.com:Kostya012/fullstack.git

	cd fullstack

	git switch -c main

	git add README.md

	git commit -m "add README"

	git push -u origin main
