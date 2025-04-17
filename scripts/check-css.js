const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Checking CSS references in HTML files...');

// Check the output directory
const outDir = path.join(process.cwd(), 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: The "out" directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Find all HTML files
const htmlFiles = glob.sync('**/*.html', { cwd: outDir });

if (htmlFiles.length === 0) {
  console.error('Error: No HTML files found in the output directory.');
  process.exit(1);
}

console.log(`Found ${htmlFiles.length} HTML files.`);

let cssPathsFixed = 0;
let scriptPathsFixed = 0;
let filesModified = 0;

// Process each HTML file
htmlFiles.forEach(htmlFile => {
  const filePath = path.join(outDir, htmlFile);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix CSS paths
  if (content.includes('href="/_next/') && !content.includes('href="/SvaStudy/_next/')) {
    content = content.replace(/href="\/_next\//g, 'href="/SvaStudy/_next/');
    cssPathsFixed += (content.match(/href="\/SvaStudy\/_next\//g) || []).length;
    modified = true;
  }
  
  // Fix JS paths
  if (content.includes('src="/_next/') && !content.includes('src="/SvaStudy/_next/')) {
    content = content.replace(/src="\/_next\//g, 'src="/SvaStudy/_next/');
    scriptPathsFixed += (content.match(/src="\/SvaStudy\/_next\//g) || []).length;
    modified = true;
  }
  
  // Write changes back to the file if modified
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
    console.log(`Fixed paths in: ${htmlFile}`);
  }
});

console.log('\nSummary:');
console.log(`- Files modified: ${filesModified} of ${htmlFiles.length}`);
console.log(`- CSS paths fixed: ${cssPathsFixed}`);
console.log(`- Script paths fixed: ${scriptPathsFixed}`);

if (filesModified > 0) {
  console.log('\nSuccess! CSS and script paths have been fixed.');
} else {
  console.log('\nNo paths needed fixing. Your build looks good!');
} 