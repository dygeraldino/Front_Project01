const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.css') && !filePath.endsWith('.js')) return;
  if(filePath.includes('replace_colors.js')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  const hexReplacements = {
    '#0bc2e5': '#BD6DF2',
    '#7adbf0': '#D9A3C0',
    '#768298': '#4634BF',
    '#f97316': '#BD6DF2',
    '#ea4335': '#BD6DF2',
    '#f9f6fb': '#D9A3C0',
    '#05030a': '#251659',
    '#0a0715': '#251659',
    '#1c2331': '#2F1D73',
  };

  for (const [key, value] of Object.entries(hexReplacements)) {
    newContent = newContent.replace(new RegExp(key, 'gi'), value);
  }

  const wordReplacements = [
    { from: '-white\\b', to: '-mist' },
    { from: '-black\\b', to: '-night' },
    { from: '-slate-100\\b', to: '-mist' },
    { from: '-slate-200\\b', to: '-mist' },
    { from: '-slate-300\\b', to: '-mist' },
    { from: '-slate-500\\b', to: '-plasma' },
    { from: '-slate-600\\b', to: '-ink' },
    { from: '-slate-700\\b', to: '-ink' }
  ];

  for (const r of wordReplacements) {
    newContent = newContent.replace(new RegExp(r.from, 'g'), r.to);
  }
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Processed:', filePath);
  }
}

walk('c:\\Repos\\Front_Project01\\project01\\src', processFile);
console.log('Done.');
