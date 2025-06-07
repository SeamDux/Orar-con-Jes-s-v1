const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

async function updateImports(filePath) {
  try {
    const content = await readFileAsync(filePath, 'utf8');
    
    // Replace imports with @ alias
    const updatedContent = content
      .replace(/from '\.\.\/(\.\.\/)+components\//g, "from '@/components/")
      .replace(/from '\.\.\/(\.\.\/)+constants\//g, "from '@/constants/")
      .replace(/from '\.\.\/(\.\.\/)+assets\//g, "from '@/assets/")
      .replace(/from '\.\.\/(\.\.\/)+hooks\//g, "from '@/hooks/")
      .replace(/from '\.\.\/(\.\.\/)+types'/g, "from '@/types'");
    
    if (content !== updatedContent) {
      await writeFileAsync(filePath, updatedContent);
      console.log(`Updated imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      await updateImports(filePath);
    }
  }
}

// Start from the app directory
walkDir('./app'); 