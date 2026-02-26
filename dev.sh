#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Woodex Development Setup${NC}\n"

# Check if .env files exist, create them if not
echo -e "${YELLOW}Setting up environment files...${NC}"

# Server .env
if [ ! -f "./server/.env" ]; then
    echo -e "${YELLOW}Creating server/.env...${NC}"
    cat > "./server/.env" << 'EOF'
SUPABASE_URL=https://xyzxyzxyz.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_KEY=your_service_key_here
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
EOF
    echo -e "${RED}⚠️  Please update server/.env with your Supabase credentials${NC}"
fi

# Client .env
if [ ! -f "./client/.env" ]; then
    echo -e "${YELLOW}Creating client/.env...${NC}"
    cat > "./client/.env" << 'EOF'
VITE_API_URL=http://localhost:4000/api
EOF
    echo -e "${GREEN}✓ Client .env created${NC}"
fi

echo -e "${YELLOW}\nInstalling dependencies...${NC}"

# Install client dependencies
if [ ! -d "./client/node_modules" ]; then
    echo -e "${BLUE}Installing client dependencies...${NC}"
    cd client
    pnpm install
    cd ..
fi

# Install server dependencies
if [ ! -d "./server/node_modules" ]; then
    echo -e "${BLUE}Installing server dependencies...${NC}"
    cd server
    pnpm install
    cd ..
fi

echo -e "\n${GREEN}✓ Dependencies installed${NC}\n"

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}Shutting down servers...${NC}"
    kill $SERVER_PID 2>/dev/null
    kill $CLIENT_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

echo -e "${BLUE}Starting servers...${NC}\n"

# Start server in background
echo -e "${BLUE}[Server]${NC} Starting on http://localhost:4000..."
cd server
pnpm dev &
SERVER_PID=$!
cd ..

# Wait a bit for server to start
sleep 2

# Start client in background
echo -e "${BLUE}[Client]${NC} Starting on http://localhost:5173..."
cd client
echo -e "\n${GREEN}✓ Dependencies installed${NC}\n"

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}Shutting down servers...${NC}"
    kill $SERVER_PID 2>/dev/null
    kill $CLIENT_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

echo -e "${BLUE}Starting servers...${NC}\n"

# Start server in background
echo -e "${BLUE}[Server]${NC} Starting on http://localhost:4000..."
cd "$SCRIPT_DIR/server" || exit 1
pnpm dev > /tmp/woodex-server.log 2>&1 &
SERVER_PID=$!
echo "Server PID: $SERVER_PID"
cd "$SCRIPT_DIR" || exit 1

# Wait a bit for server to start
sleep 3

# Start client in background
echo -e "${BLUE}[Client]${NC} Starting on http://localhost:5173..."
cd "$SCRIPT_DIR/client" || exit 1
pnpm dev > /tmp/woodex-client.log 2>&1 &
CLIENT_PID=$!
echo "Client PID: $CLIENT_PID"
cd "$SCRIPT_DIR" || exit 1
pnpm dev &
#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR" || exit 1

echo -e "${BLUE}🚀 Woodex Development Setup${NC}\n"

# Check if .env files exist, create them if not
echo -e "${YELLOW}Setting up environment files...${NC}"

# Server .env
if [ ! -f "./server/.env" ]; then
    echo -e "${YELLOW}Creating server/.env...${NC}"
    cat > "./server/.env" << 'EOF'
SUPABASE_URL=https://xyzxyzxyz.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_KEY=your_service_key_here
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
EOF
    echo -e "${RED}⚠️  Please update server/.env with your Supabase credentials${NC}"
sleep 3

echo -e "\n${GREEN}✓ Both servers starting!${NC}\n"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🏪 Store:${NC}       http://localhost:5173"
echo -e "${GREEN}🔐 Admin:${NC}       http://localhost:5173/admin"
echo -e "${GREEN}🔌 API:${NC}         http://localhost:4000/api"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
echo -e "${YELLOW}Demo Credentials:${NC}"
echo -e "  Email:    admin@woodex.com"
echo -e "  Password: admin123456\n"
echo -e "${YELLOW}Server logs: tail -f /tmp/woodex-server.log${NC}"
echo -e "${YELLOW}Client logs: tail -f /tmp/woodex-client.log${NC}\n"
echo -e "${YELLOW}Press Ctrl+C to stop all servers${NC}\n"

# Show initial logs
echo -e "${BLUE}═══ SERVER OUTPUT ═══${NC}"
sleep 1
tail -3 /tmp/woodex-server.log

# Wait for both processes
wait
echo -e "${YELLOW}\nChecking dependencies...${NC}"

# Install client dependencies
if [ ! -d "./client/node_modules" ]; then
    echo -e "${BLUE}Installing client dependencies (this may take a few minutes)...${NC}"
    cd "$SCRIPT_DIR/client" || exit 1
    pnpm install || { echo -e "${RED}Failed to install client dependencies${NC}"; exit 1; }
    cd "$SCRIPT_DIR" || exit 1
else
    echo -e "${GREEN}✓ Client dependencies installed${NC}"
fi

# Install server dependencies
if [ ! -d "./server/node_modules" ]; then
    echo -e "${BLUE}Installing server dependencies (this may take a few minutes)...${NC}"
    cd "$SCRIPT_DIR/server" || exit 1
    pnpm install || { echo -e "${RED}Failed to install server dependencies${NC}"; exit 1; }
    cd "$SCRIPT_DIR" || exit 1
else
    echo -e "${GREEN}✓ Server dependencies installed${NC}"
fi
