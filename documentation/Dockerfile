FROM ubuntu:19.10 as base

#ENV container openldap
LABEL project="FMS Core"
LABEL maintainer "tsahbazoglu@tspb.org.tr"

# WOWRKDIR
WORKDIR /home/fms

# add user 
RUN useradd -ms /bin/bash telman

# update system
RUN apt-get update
RUN apt-get -y install curl dirmngr apt-transport-https lsb-release ca-certificates vim nano
RUn apt-get install net-tools -y

# install git
RUN apt-get install git -y

# extra tools
RUN apt-get install tree -y

# add Node.js None LTS repository
# RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# add Node.js LTS repository
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

# install nodejs and npm
RUN apt-get install nodejs -y

# install yarn
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

# instal angular cli
RUN npm install -g @angular/cli -y

RUN mkdir -p /home/fms/angular

USER root

