import fsn from "fs";
import fs from "fs/promises";
import path from "path";

const myPath = process.cwd();

let files = await fs.readdir(myPath);

for (let file of files) {
    let ext = file.split(".").pop();
    if(ext !== "js" && ext !== "json" && file.split(".").length > 1 ){
        if(fsn.existsSync(path.join(myPath, ext))){
          await  fs.rename(path.join(myPath, file), path.join(myPath, ext, file))
        }else{
          await  fs.mkdir(path.join(myPath, ext))
              console.log(`Folder for .${ext} created successfully!`);
           await fs.rename(path.join(myPath, file), path.join(myPath, ext, file))
        }
}
}




// ======================================
// =====OR THE AI ONE SUGGESTED WAY======
// =====================================

// import fs from "fs/promises";
// import path from "path";

// const myPath = "E:\\practice\\express js\\clear-clutter";

// // 1. Get all files in the directory
// let files = await fs.readdir(myPath);

// for (let file of files) {
//     // 2. Safely get the extension
//     let ext = file.split(".").pop();
    
//     // 3. Skip folders/files without extensions, and skip js/json
//     if (ext !== "js" && ext !== "json" && file.split(".").length > 1) {
        
//         const targetFolder = path.join(myPath, ext);
        
//         // 4. Smart Step: This creates the folder ONLY if it doesn't exist
//         await fs.mkdir(targetFolder, { recursive: true });
        
//         // 5. Move the file
//         await fs.rename(path.join(myPath, file), path.join(targetFolder, file));
//     }
// }




// ======================================
// =====OR THE AI SECOUD SUGGESTED WAY======
// =====================================

// import fs from "fs/promises";
// import path from "path";

// const myPath = "E:\\practice\\express js\\clear-clutter";

// try {
//     // 1. Read all files in the directory
//     let files = await fs.readdir(myPath);

//     for (let file of files) {
//         // 2. Get extension with the dot (e.g., ".jpg")
//         let rawExt = path.extname(file); 
        
//         // 3. Remove the dot and turn to lowercase (e.g., "jpg")
//         let ext = rawExt.substring(1).toLowerCase(); 

//         // 4. Only process if it has a valid extension AND isn't js/json
//         if (ext && ext !== "js" && ext !== "json") {
            
//             const targetFolder = path.join(myPath, ext);
//             const oldPath = path.join(myPath, file);
//             const newPath = path.join(targetFolder, file);

//             // 5. Create folder automatically if missing
//             await fs.mkdir(targetFolder, { recursive: true });
            
//             // 6. Move the file
//             await fs.rename(oldPath, newPath);
//             console.log(`Moved: ${file} ➔ Folder: ${ext}`);
//         }
//     }
//     console.log("Clutter cleared successfully!");
// } catch (error) {
//     console.error("Something went wrong:", error.message);
// }
