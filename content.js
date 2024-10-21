// Function to replace all occurrences of 'nikkuu_u' (case-insensitive) in text nodes
function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // Replace occurrences of 'nikkuu_u' (case-insensitive)
        node.textContent = node.textContent.replace(/nikkuu_u/gi, '');
    } else {
        // Recursively replace text in child nodes
        node.childNodes.forEach(replaceText);
    }
}

// Function to handle text replacement in dynamically added content
function observeAndReplace() {
    // Apply replacements to the current content of the page
    replaceText(document.body);

    // Set up a MutationObserver to monitor changes to the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // Handle any added nodes by applying the replacement function
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Apply the replacement to any new elements
                    replaceText(node);
                }
            });
        });
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
        childList: true,  // Observe child elements being added/removed
        subtree: true     // Observe the entire subtree for changes
    });
}

// Start the process
observeAndReplace();
