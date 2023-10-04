interface SlateChildren {
  text: string
  bold?: boolean
  italic?: boolean
}

interface SlateNode {
  type: string
  href?: string
  level?: number
  children: (SlateChildren | SlateNode)[]
}

function convertSlateText(child: SlateChildren): string {
  let convertedText = child.text
  if (child.bold)
    convertedText = `<strong>${child.text}</strong>`
  else if (child.italic)
    convertedText = `<i>${child.text}</i>`

  return convertedText
}

function convertSlateNode(childNode: SlateNode, childrenText: string): string {
  switch (childNode.type) {
    case 'quote':
      return `<blockquote><p>${childrenText}</p></blockquote>`
    case 'paragraph':
      return `<p>${childrenText}</p>`
    case 'link':
      return `<a href="${childNode.href}">${childrenText}</a>`
    case 'heading':
      return `<h${childNode.level}>${childrenText}</h${childNode.level}>`
    case 'unordered-list':
      return `<ul>${childrenText}</ul>`
    case 'list-item':
      return `<li>${childrenText}</li>`
    default:
      return childrenText
  }
}

function slateSerialize(nodes: (SlateChildren | SlateNode)[]): string {
  return nodes.map((child) => {
    if ((child as SlateNode).children) {
      const childNode = child as SlateNode
      const childrenText = slateSerialize(childNode.children as SlateNode[])
      return convertSlateNode(childNode, childrenText)
    }
    else {
      return convertSlateText(child as SlateChildren)
    }
  }).join('')
}

export { slateSerialize }
