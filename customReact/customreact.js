



//injecting reactElement into main container in the html file 
customRender(reactElement, mainContainer) 
{
    //.type property tells React "what to render"—either a DOM node type or a React component.
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement); 
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    }, 
    children: 'Click me to visit google!'
}; 

const mainContainer = document.querySelector('#root'); 