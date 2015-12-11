###########################################################
#
# Dockerfile for tfk-api-postnummer
#
###########################################################

# Setting the base to nodejs 4.2
FROM node:4.2-slim

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT node standalone.js