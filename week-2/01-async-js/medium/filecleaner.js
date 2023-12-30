const fs = require('fs');
const path = "./week-2/01-async-js/medium/a.txt";

function cleanFile(filePath) {
    // Read the content from the file
    const content = fs.readFileSync(filePath, 'utf-8');

    // Remove extra spaces
    const cleanedContent = content.replace(/\s+/g, ' ');

    // Write the cleaned content back to the file
    fs.writeFileSync(filePath, cleanedContent);

    console.log('File cleaned successfully.');
}

// Example usage: Replace 'your_file.txt' with the actual file path
cleanFile(path);