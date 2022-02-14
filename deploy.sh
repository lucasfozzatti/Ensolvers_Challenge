#!/bin/bash

# ANSI colors variables for shell scripts
    Red='\033[0;31m'
    Green='\033[0;32m'
    Yellow='\033[0;33m'
    Blue='\033[0;34m'
    Cyan='\033[0;36m'
    White='\033[0;37m'
    Grey='\033[0;37m'
    NC='\033[0m'

function check_dependecy {
    if ! command -v node &> /dev/null;then
        echo -e "${Red}Node is not installed.${NC}"
        echo -e "${Green}Installing node${NC}"

        install_node
    fi
    if ! command -v npm &> /dev/null;then
        echo -e "${Red}Npm is not installed.${NC}"
        echo -e "${Green}Installing npm${NC}"
        install_npm
    fi
}

function deploy_backend {
    cd ../backend
    npm run start
}

function install_node {
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        sudo apt install -y nodejs
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        brew install nodejs
    fi
}

function install_npm {
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        sudo apt install -y npm
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        brew install npm
    fi
}

function run_backend {
    cd ./backend && npm install
    npm run dev
}

function run_frontend {
    cd ./frontend && npm install
    npm run start
}

function main {
    echo -e "${Green}Cheking dependecies...${NC}"
    check_dependecy
    run_backend &> report_backend.log &
    echo -e "${Green}--> Backend is running in port 4000${NC}"
    run_frontend &> report_frontend.log &
    echo -e "${Green}--> Opening website${NC}"
    echo -e "${Red}\nPress 'q' to exit${NC}"
    while : ; do
    read -n 1 k <&1
    if [[ $k = q ]]; then
        echo -e "${NC}Quitting from the program"
        break
    fi
    done
    pkill node
    exit 0
}

main