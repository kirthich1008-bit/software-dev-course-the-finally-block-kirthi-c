function processFile(fileName, fileData) { 
  try {
    // Input validation
    if (!fileName) { 
      throw new ReferenceError("File name is missing"); 
    } 
    if (typeof fileData !== "string") { 
      throw new TypeError("File data must be a string"); 
    } 
    if (fileData.trim() === "") { 
      throw new TypeError("File data cannot be empty"); 
    } 
    
    // Simulated file processing
    console.log(`Processing file: ${fileName}`); 
    console.log(`File content: ${fileData}`); 
    
    // Simulated file operations (reading/writing)
    console.log("Reading / writing data ..."); 
    throw new Error("An error occurred during reading / writing data!"); 
    
  } catch (err) { 
    // Error handling
    console.error(`${err.name}: ${err.message}`); 
  } finally { 
    // Finally block to close resources
    console.log("Resources closed"); 
  } 
} 

// ============================================ 
// 🧪 Test Cases Below 
// ============================================ 

processFile(); 
// ❌ ReferenceError: File name is missing
console.log("-------------------");

processFile("myFile.txt", 42); 
// ❌ TypeError: File data must be a string
console.log("-------------------");

processFile("myFile.txt", "  "); 
// ❌ TypeError: File data cannot be empty
console.log("-------------------");

processFile("myFile.txt", "Hello, world!");