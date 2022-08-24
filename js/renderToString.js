// <div id="container" class="red bold"><span id="text">username</span></div>
const element = {
  type: "div",
  props: {
    id: "container",
    className: ["red", "bold"],
    children: [
      {
        type: "span",
        props: {
          id: "text",
          text: "username"
        }
      },
      {
        type: "div",
        props: {
          id: "good",
          text: "hello"
        }
      }
    ]
  }
}

const composeAttribute = (key, value) => {
  if (!value) {
    return ""
  }
  if (Array.isArray(value)) {
    return `${key}="${value.join(" ")}"`
  }
  return `${key}="${value}"`;
}

const renderToString = (element) => {
  const renderChildren = (children)=>{
    return children.map(item=>{
      if(Array.isArray(item.props.children)){
        return renderChildren(item.props.children)
      }
      return renderToString(item)
    }).join("")
  }

  const className = composeAttribute("class", element.props.className)
  const id = composeAttribute("id", element.props.id)

  return `<${element.type} ${className} ${id}>${element.props.children ? renderChildren(element.props.children) :""}${element.props.text || ""}</${element.type}>`
}

console.log(renderToString(element))

