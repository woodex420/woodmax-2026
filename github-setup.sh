#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Woodex GitHub Setup${NC}\n"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing Git repository...${NC}"
    git init
    git branch -M main
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo -e "${YELLOW}Creating .gitignore...${NC}"
    cat > ".gitignore" << 'EOF'
# Dependencies
node_modules/
pnpm-lock.yaml

# Environment
.env
.env.local
.env.*.local

# Build outputs
dist/
.next/
out/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Testing
coverage/
.nyc_output/

# Temporary files
tmp/
temp/
EOF
    echo -e "${GREEN}✓ .gitignore created${NC}"
fi

# Check if already committed
if [ -z "$(git log --oneline 2>/dev/null | head -1)" ]; then
    echo -e "${YELLOW}Committing initial setup...${NC}"
    git add .
    git commit -m "Initial commit: Woodex e-commerce platform"
    echo -e "${GREEN}✓ Initial commit created${NC}"
else
    echo -e "${YELLOW}Repository already has commits${NC}"
fi

echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ Git setup complete!${NC}\n"

echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. Create repository on GitHub:"
echo -e "   ${BLUE}https://github.com/new${NC}"
echo -e "2. Copy repository URL"
echo -e "3. Add remote and push:"
echo -e "   ${BLUE}git remote add origin <your-repo-url>${NC}"
echo -e "   ${BLUE}git push -u origin main${NC}\n"

echo -e "${YELLOW}Then for Vercel deployment:${NC}"
echo -e "   ${BLUE}./vercel-setup.sh${NC}\n"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
