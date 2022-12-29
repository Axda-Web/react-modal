[![npm version](https://badge.fury.io/js/@axda%2Freact-modal.svg)](https://badge.fury.io/js/@axda%2Freact-modal)

# React Modal

> Simple re-usable Modal component built with React

## Prerequisites

This library requires NodeJS (version 16.17.0 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Import the Modal component](#import-the-modal-component)
    - [Customisation](#customisation)
    - [CodeSandbox Demo](#check-this-demo)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will show you how to install and use the Modal component on your project.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install @axda/react-modal
```

## Usage

### Import the Modal component

```jsx
//import the useState hook from React library
import { useState } from "react";

// Import the Modal component from the library
import { Modal } from "@axda/react-modal";



const App = () => {

    // Implement the modal state (make sure to use the same name*)
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            {/* Use an element to trigger the state change (e.g. button) */}
            <button onClick={() => setShowModal(prev => !prev)}>I'm a modal</button>
            {/* Use the Modal component (don't forget to add the showModal, setShowModal and modalStyle props) */}
            <Modal showModal={showModal} setShowModal={setShowModal}>
            {/* Insert the modal content here (e.g. text) */}
            </Modal>
        </>
    )
})
```

### Customisation

```jsx

...

const App = () => {

    ...

    // Add a modalStyle object and set your own values here
    const modalStyle = {
        modalOverlay: {
            background: '' // Default: 'rgba(0, 0, 0, .5)'
        },
        modalWrapper: {
            width: '', // Default: '500px'
            height: '', // Default: '200px'
            boxShadow: '', // Default: '0 5px 16px rgba(0, 0, 0, 0.2)'
            background: '', // Default: '#fff'
            borderRadius: '', // Default: '5px'
            border: '', // Default: 'none'
        },
        modalContent: {
            color: '', // Default: 'rgba(0, 0, 0, 0.8)'
            background: '', // Default: '#fff'
            fontSize: '', // Default: '1.5rem'
            fontWeight: '', // Default: '700'
            fontFamily: '' // Default: 'inherit'
        },
        closeModalButton: {
            color: '' // Default: 'rgba(0, 0, 0, 0.8)'
        }
    }


    return (
        <>
            ...

            {/* Add the modalStyle props */}
            <Modal showModal={showModal} setShowModal={setShowModal} modalStyle={modalStyle}>
            {/* Insert the modal content here (e.g. text) */}
            </Modal>
            ...
        </>
    )
})
```

### Check this demo:

[![CodeSandbox](https://img.shields.io/badge/Codesandbox-040404?style=for-the-badge&logo=codesandbox&logoColor=DBDBDB)](https://codesandbox.io/s/react-select-demo-ytruiv?file=/src/App.js)

## Built With

* VSCode
* React
* Styled Components

## Authors

* **Axda** - [Axda](https://github.com/Axda-Web)

## License

[MIT License](https://en.wikipedia.org/wiki/MIT_License)