const fs = require("fs");
const path = require("path");

function renameImages() {
  const assetsDir = "./assets";

  // Read all files in the assets directory
  fs.readdir(assetsDir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Filter for image files (you can add more extensions if needed
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    // Sort the files alphabetically
    imageFiles.sort();

    // Rename each file
    imageFiles.forEach((file, index) => {
      const oldPath = path.join(assetsDir, file);
      const extension = path.extname(file);
      const newPath = path.join(assetsDir, `${index + 1}${extension}`);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${file}:`, err);
        } else {
          console.log(`Renamed ${file} to ${index + 1}${extension}`);
        }
      });
    });
  });
}

// Call the function to rename images
renameImages();
