#!/bin/sh

# exit script, if error
set -e

# defne colors
RED=`tput setaf 1`
GREEN=`tput setaf 2`
NOCOLOR=`tput sgr0`



echo "${GREEN}Running FarblosBunt Bootstrap Specialized v1.0 (2017-03-14)${NOCOLOR}"


installDependencyWithNpmGlobally(){
  echo "${GREEN} INSTALLING $1 ${NOCOLOR}"
  yarn global ls $1 || npm install -g $1 || echo "${RED} FAILED TO INSTALL $1 ${NOCOLOR}";
}


installDependencyWithGem(){
  gem list -i $1 || gem install $1 || echo "${RED} FAILED TO INSTALL $1 ${NOCOLOR}";
}


# =========================================+
# ========= PROJECT DEPENDENCIES  =========+
# =========================================+


# =========================+
# ======== FOREMAN ========+
# =========================+
installDependencyWithGem foreman


# =========================+
# ======== Ember CLI ======+
# =========================+
installDependencyWithNpmGlobally ember-cli


# =========================+
# ========= Bower =========+
# =========================+
installDependencyWithNpmGlobally bower



#
