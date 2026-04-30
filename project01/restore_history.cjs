const fs = require('fs');
const path = require('path');
const os = require('os');

const modifiedFiles = [
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\AnimeCard.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\EmptyState.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\ErrorState.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\FavoriteButton.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\FiltersBar.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\Footer.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\Hero.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\LoadingState.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\Navbar.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\SearchBar.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\components\\SectionHeader.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\index.css",
  "c:\\Repos\\Front_Project01\\project01\\src\\pages\\ContactPage.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\pages\\DetailPage.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\pages\\ExplorePage.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\pages\\FavoritesPage.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\pages\\HomePage.jsx",
  "c:\\Repos\\Front_Project01\\project01\\src\\pages\\NotFoundPage.jsx"
].map(p => p.toLowerCase());

const historyDir = path.join(os.homedir(), 'AppData', 'Roaming', 'Code', 'User', 'History');
if(!fs.existsSync(historyDir)) {
    console.log("No VSCode history found");
    process.exit(1);
}

let files = fs.readdirSync(historyDir);
for(let f of files) {
    let fullPath = path.join(historyDir, f);
    if(!fs.statSync(fullPath).isDirectory()) continue;
    
    let entriesPath = path.join(fullPath, 'entries.json');
    if(!fs.existsSync(entriesPath)) continue;
    
    let data;
    try {
        data = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
    } catch(e) { continue; }
    
    if (data.resource && data.resource.includes('project01')) {
        let destPath = decodeURIComponent(data.resource.replace('file:///', '').replace('file://', ''));
        if (destPath.includes('/')) destPath = destPath.replace(/\//g, '\\');
        
        if (modifiedFiles.includes(destPath.toLowerCase()) && data.entries && data.entries.length > 0) {
            // Find max timestamp
            let latestEntry = data.entries[0];
            for (let e of data.entries) {
                if (e.timestamp > latestEntry.timestamp) {
                    latestEntry = e;
                }
            }
            
            let backupFilePath = path.join(fullPath, latestEntry.id);
            if (fs.existsSync(backupFilePath)) {
                fs.copyFileSync(backupFilePath, destPath);
                console.log("Restored:", destPath);
            }
        }
    }
}
