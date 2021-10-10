# File Explorer FE

### Prerequisit
- docker
- docker-compose

### How to Setup
- Run docker-compose-up to start the project in development
- The project will be run at localhost:4200

### Description
File Explorer will be opened root folder of the server. It has the following features
  - You can navigate to any folder and see its children folder/file
  - You can nagivate to parent folder
  - You can see the details of the folder/file by right click on any file/folder and click on detail from the menu, it will pop a modal where the details of the folder/file will be shown
  - It shows the error if graphql throws any error
  - It shows loader when graphql request is pending
