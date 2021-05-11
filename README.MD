# Example Federated Module Component
This app is the most basic example of how to build a react component to work with <product_name>.
There are two peices to getting this to work.
1) Develop a react component that controls a smart device.
2) Publish the react component to be used in your dashboards to control a smart device.

<br >

## Requirements (has been tested with)
> Ubuntu 18 or 20 (x86, arm7)

> node.js v14.16.1

<br >

# Develop a component
You can create your own custom component to control a smart device. 

<br >

### Download and unzip the latest version of this repository.
<br >

### Navigate to the unzipped dir and run:
```shell
npm i
npm start
```

In your browser, open the app. http://localhost:3001 

You can now edit the component `src/components/Test.js` and when you save the changes, your browser will refresh the page and load in the new changes.

<br >

While your webpack dev server is running, you can also load this component into the Devloper's Sandox. This will allow you to create your component as if it were a real dashboard tile.

<br >

More information coming with a full guide.

<br >

# Publish A Component

Currently you must use github to publish components.

Create a new public repository in github and initialize your finished component. Once you have committed and pushed everything up to github you will need to create a new git tag and push the tag up to origin as well.

Once your component has been tagged it will create a new "release" in github. You can use this zip file's url to install the component to the device you built it for.

<br >

More information coming with a full guide.
