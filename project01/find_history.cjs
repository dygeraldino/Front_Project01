const fs = require('fs');
const path = require('path');
const os = require('os');

const historyDir = path.join(os.homedir(), 'AppData', 'Roaming', 'Code', 'User', 'History');
if(!fs.existsSync(historyDir)) {
    console.log("No VSCode history found:", historyDir);
    process.exit(0);
}

let found = false;
let files = fs.readdirSync(historyDir);
for(let f of files) {
    let fullPath = path.join(historyDir, f);
    if(fs.statSync(fullPath).isDirectory()) {
        let entriesPath = path.join(fullPath, 'entries.json');
        if(fs.existsSync(entriesPath)) {
            let data;
            try {
                data = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
            } catch(e) { continue; }
            
            if (data.resource && data.resource.includes('project01')) {
                console.log("=== Found history for:", data.resource);
                // Convert resource file://... back to windows path
                let destPath = decodeURIComponent(data.resource.replace('file:///', '').replace('file://', ''));
                if (destPath.includes('/')) destPath = destPath.replace(/\//g, '\\');
                console.log("Target path:", destPath);
                
                if (data.entries && data.entries.length > 0) {
                    // Try to find the latest before we ran the script, or just the first/last
                    // Let's print out the timestamps
                    for(let e of data.entries) {
                       console.log("Entry ID:", e.id, "Time:", new Date(e.timestamp).toISOString());
                    }
                    
                    // We just need to take the first entry and restore it potentially, 
                    // or maybe we'll do it manually.
                }
                found = true;
            }
        }
    }
}
if(!found) console.log("No relevant history found.");
