# Star Wars Whalar Test
Here you can see the application deployed on netlify in the next link.

([starwarswhalar.netlify.app](https://starwarswhalar.netlify.app/))

## Run project

- `npm install` - install all dependencies.
- `npm run dev` - starts a development server accessible from the browser. The server notices changes made to files and reloads automatically.
- `npm run build` - compiles the web app into a production ready build.
- `npm run format` - Running prettier and format all the files in the app.
- `npm run lint` - Running lint in the project and fix lint errors.
- `npm run test` - Running test with jest.
- `npm run test:watch` - Running test with jest, generate coverage and it listening any changes and run again the test.

## Technologies used in the project

- Vite: for start application and server.
- React: to build the application and all its interfaces.
- Redux: to store global variables and have persistence and immutability of data.
- styledComponents: for application styling.
- lint: to search for errors and possible bug fixes.
- prettier: for formatting all the application code.
- typescript: to be able to type the classes in the application.
- jest & testing-library : to be able to perform unit tests in the application.

## Architecture used in the project

Architecture used in the project:
I have followed a pod architecture where it is broken into layout, scenes and pods as follows:

- common file: components that are not linked to the domain and are promotable to libraries.
- common-app: components linked to the domain and that are reused in the application.
- core: transversal components such as, store, router, theme.
- layout: master pages.
- pods: components grouped by domain.
- scenes: pages of the application, a scene can be composed of a layout and one or more pods. 

## Structure and component of the application

```
src
|__assets
|__common
   |__common-button
   |__error
   |__loader
   |__scroll-top
|__common-app
   |__utils
   |__components
       |__app-footer
       |__app-navbar       
|__core
   |__router
   |__store
   |__theme
|__layout
   |__app.layout
   |__centered-home.layout
   |__centered-pod.layout
   |__centered.layout
|__pods
   |__characters-details
   |__characters-list
   |__text-intro
|__scenes
   |__characters-details.scene
   |__characters-list.scene
   |__home.scene
 ```  
 

## TODOs

- [ ]  Create the mockup of the redux store in order to make the missing UTs.
- [ ]  Complete the missing UTs of the components.
- [ ]  Review the typing and interfaces in the store and in some components.
- [ ]  Create e2e with cypress.
- [ ]  Create the continuous integration for the deployment.

##  Improvements in the application

- [ ] Create dark / light mode.
- [ ] Implement input to be able to search for characters in the application.
- [ ] Create Breadcrumbs to improve the user experience in the application.
- [ ] Bring the image of the characters from another API related to the one used, as the current one does not have it.




