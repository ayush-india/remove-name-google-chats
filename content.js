// Function to recursively traverse the DOM and replace text content
function replaceText(node) {
    // Text node (nodeType 3) check
    if (node.nodeType === Node.TEXT_NODE) {
        // Replace occurrences of 'nikkuu_u' in text content
        node.textContent = node.textContent.replace(/nikkuu_u/g, '');
    } else {
        // If the node is an element, recursively call replaceText on child nodes
        node.childNodes.forEach(replaceText);
    }
}

// Start traversing the document body
replaceText(document.body);

