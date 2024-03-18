import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module
const __dirname = path.dirname(__filename);

export function copyFile(source, destination, callback) {
  const sourcePath = path.join(__dirname, '../hooks/', source);
  const destinationPath = path.join(__dirname, '../.git/hooks', destination || source);
  console.log('@== sourcePath', sourcePath)
  console.log('@== destinationPath', destinationPath)
  return fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      return callback(err);
    }
    console.log('File copied successfully!');
    callback(null);
  });
}
